import * as Util from "../../js/utils";
import * as $ from "jquery";
import {mapState} from "vuex";
import {store} from "../../js/Store";

let duration,
    countTrack = 0,
    progressEl,
    progressBar,
    realStore = store.state;

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
        playEl: state => state.playEl,
        pauseEl: state => state.pauseEl,
        $audio: state => state.$audio,
    }),
    methods: {
        playTrack: function () {
            realStore.playEl.addClass('disable');
            realStore.pauseEl.removeClass('disable');
            realStore.$audio.play();
        },
        pauseTrack: () => {
            realStore.pauseEl.addClass('disable');
            realStore.playEl.removeClass('disable');
            realStore.$audio.pause();
        },
        next: function () {
            countTrack = (countTrack !== this.trackList.length - 1) ? countTrack + 1 : 0;
            const nextTrack = this.trackList[countTrack];
            realStore.$audio.src = nextTrack.src;
            this.$data.title = nextTrack.title;
            Util.pausePlay(realStore);
        },
        previous: function () {
            countTrack = (countTrack !== 0) ? countTrack - 1 : this.trackList.length - 1;
            const prevTrack = this.trackList[countTrack];
            realStore.$audio.src = prevTrack.src;
            this.$data.title = prevTrack.title;
            Util.pausePlay(realStore);
        },
        progressBar: function () {
            progressEl.css('width', `${(realStore.$audio.currentTime / duration * 100).toFixed(2)}%`);
            this.$data.currentTrackTime = Util.getTime(realStore.$audio.currentTime);
            this.$data.totalTrackTime = Util.getTime(duration);
        },
        getDuration: () => {
            duration = realStore.$audio.duration;
        },
        changeVolume: function (event) {
            this.$data.volume = event.target.value;
            $audio.volume = this.$data.volume / 100;
        },
        rewind: function (evt) {
            let mouseX = evt.pageX - progressEl.offset().left;
            realStore.$audio.currentTime = duration * (mouseX / progressBar.width());
            this.progressBar();
        }
    },
    mounted: function () {
        realStore.$audio = $('audio').get(0);
        realStore.playEl = $('#play > img');
        realStore.pauseEl = $('#pause > img');
        progressEl = $('#progressEl');
        progressBar = $('#progressBar');
        this.getDuration();
    }
}
