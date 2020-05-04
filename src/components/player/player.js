import * as Util from "../../js/Util/utils";
import * as $ from "jquery";
import {mapState} from "vuex";
import store from "../../js/Store/Store";
import {
    DECREMENT_TRACK_INDEX,
    INCREMENT_TRACK_INDEX,
    SET_AUDIO, SET_PLAYER_EL,
    SET_TRACK
} from "../../js/Constatnts";

let duration,
    progressEl,
    progressBar;

export default {
    data: () => {
        return {
            totalTrackTime: '0:00',
            currentTrackTime: '0:00',
            volume: "70",
        }
    },
    store,
    computed: mapState({
        trackList: state => state.trackList,
        title: state => state.title,
        album: state => state.album,
    }),
    methods: {
        playTrack: function () {
            this.$store.state.pauseEl.classList.remove('disable');
            this.$store.state.playEl.classList.add('disable');
            this.$store.state.$audio.play();
        },
        pauseTrack: function () {
            this.$store.state.playEl.classList.remove('disable');
            this.$store.state.pauseEl.classList.add('disable');
            this.$store.state.$audio.pause();
        },
        next: function () {
            this.$store.commit(INCREMENT_TRACK_INDEX);
            const nextTrack = this.trackList[this.$store.state.trackIndex];
            this.$store.commit(SET_TRACK,  nextTrack);
            Util.pausePlay(this.$store);
        },
        previous: function () {
            this.$store.commit(DECREMENT_TRACK_INDEX);
            const prevTrack = this.trackList[this.$store.state.trackIndex];
            this.$store.commit(SET_TRACK,  prevTrack);
            Util.pausePlay(this.$store);
        },
        progressBar: function () {
            progressEl.style.width =  `${(this.$store.state.$audio.currentTime / duration * 100).toFixed(2)}%`;
            this.$data.currentTrackTime = Util.getTime(this.$store.state.$audio.currentTime);
            this.$data.totalTrackTime = Util.getTime(duration);
        },
        getDuration: function () {
            duration = this.$store.state.$audio.duration;
        },
        changeVolume: function (event) {
            this.$data.volume = event.target.value;
            this.$store.commit('setVolume', this.$data.volume / 100);
        },
        rewind: function (evt) {
            let mouseX = evt.pageX - progressEl.offsetLeft;
            this.$store.state.$audio.currentTime = duration * (mouseX / progressBar.offsetWidth);
            this.progressBar();
        }
    },
    mounted: function () {
        this.$store.commit(SET_AUDIO, document.getElementsByTagName('audio')[0]);
        this.$store.commit(SET_PLAYER_EL, {
                playEl: document.querySelector('#play > img'),
                pauseEl: document.querySelector('#pause > img'),
            }
        );
        progressEl = document.getElementById('progressEl');
        progressBar = document.getElementById('progressBar');
        this.getDuration();
    }
}
