import * as Util from "../../js/Util/utils";
import * as $ from "jquery";
import {mapState} from "vuex";
import {store} from "../../js/Store/Store";
import StoreService from "../../js/Services/StoreService";

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
        playEl: state => state.playEl,
        pauseEl: state => state.pauseEl,
        $audio: state => state.$audio,
    }),
    methods: {
        playTrack: function () {
            this.playEl.addClass('disable');
            this.pauseEl.removeClass('disable');
            this.$audio.play();
        },
        pauseTrack: () => {
            this.pauseEl.addClass('disable');
            this.playEl.removeClass('disable');
            this.$audio.pause();
        },
        next: function () {
            StoreService.incrementTrackIndex();
            const nextTrack = this.trackList[StoreService.getTrackIndex()];
            StoreService.setTrackInfo(nextTrack);
            Util.pausePlay();
        },
        previous: function () {
            StoreService.decrementTrackIndex();
            const prevTrack = this.trackList[StoreService.getTrackIndex()];
            StoreService.setTrackInfo(prevTrack);
            Util.pausePlay();
        },
        progressBar: function () {
            progressEl.css('width', `${(this.$audio.currentTime / duration * 100).toFixed(2)}%`);
            this.$data.currentTrackTime = Util.getTime(this.$audio.currentTime);
            this.$data.totalTrackTime = Util.getTime(duration);
        },
        getDuration: () => {
            duration = this.$audio.duration;
        },
        changeVolume: function (event) {
            this.$data.volume = event.target.value;
            StoreService.setVolume(this.$data.volume / 100);
        },
        rewind: function (evt) {
            let mouseX = evt.pageX - progressEl.offset().left;
            StoreService.getAudio().currentTime = duration * (mouseX / progressBar.width());
            this.progressBar();
        }
    },
    mounted: function () {
        StoreService.setAudio($('audio').get(0));
        StoreService.setPlayerElem($('#play > img'), $('#pause > img'));
        progressEl = $('#progressEl');
        progressBar = $('#progressBar');
        this.getDuration();
    }
}
