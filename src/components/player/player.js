import * as Util from "../../js/Util/utils";
import * as $ from "jquery";
import {mapState} from "vuex";
import {store} from "../../js/Store/Store";
import {SET_TITLE, SET_VOLUME} from "../../js/Constatnts";

let duration,
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
            realStore.trackIndex = (realStore.trackIndex !== this.trackList.length - 1) ? realStore.trackIndex + 1 : 0;
            const nextTrack = this.trackList[realStore.trackIndex];
            realStore.$audio.src = nextTrack.src;
            store.commit({
                type: SET_TITLE,
                title: nextTrack.title,
                album: nextTrack.album,
            });
            Util.pausePlay(realStore);
        },
        previous: function () {
            realStore.trackIndex = (realStore.trackIndex !== 0) ? realStore.trackIndex - 1 : this.trackList.length - 1;
            const prevTrack = this.trackList[realStore.trackIndex];
            realStore.$audio.src = prevTrack.src;
            store.dispatch({
                type: SET_TITLE,
                title: prevTrack.title,
                album: prevTrack.album,
            });
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
            store.commit(SET_VOLUME, this.$data.volume / 100);
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
