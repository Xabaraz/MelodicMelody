import * as Util from "../../js/utils";
import * as $ from "jquery";
import {mapState} from "vuex";
import {store} from "../../js/Store";

let duration,
    playEl,
    pauseEl,
    countTrack = 0,
    progressEl,
    progressBar,
    $audio;

export default {
    data: () => {
        return {
            title: '',
            album: '',
            totalTrackTime: '0:00',
            currentTrackTime: '0:00',
            volume: "70",
        }
    },
    store,
    computed: mapState({
       trackList: state => state.trackList
    }),
    methods: {
        playTrack: function () {
            playEl.addClass('disable');
            pauseEl.removeClass('disable');
            $audio.play();
        },
        pauseTrack: () => {
            pauseEl.addClass('disable');
            playEl.removeClass('disable');
            $audio.pause();
        },
        next: function () {
            countTrack = (countTrack !== this.trackList.length - 1) ? countTrack + 1 : 0;
            const nextTrack = this.trackList[countTrack];
            $audio.src = nextTrack.src;
            this.$data.title = nextTrack.title;
            Util.pausePlay($audio);
        },
        previous: function () {
            countTrack = (countTrack !== 0) ? countTrack - 1 : this.trackList.length - 1;
            const prevTrack = this.trackList[countTrack];
            $audio.src = prevTrack.src;
            this.$data.title = prevTrack.title;
            Util.pausePlay($audio);
        },
        progressBar: function () {
            progressEl.css('width', `${($audio.currentTime / duration * 100).toFixed(2)}%`);
            this.$data.currentTrackTime = Util.getTime($audio.currentTime);
            this.$data.totalTrackTime = Util.getTime(duration);
        },
        getDuration: () => {
            duration = $audio.duration;
        },
        changeVolume: function (event) {
            this.$data.volume = event.target.value;
            $audio.volume = this.$data.volume / 100;
        },
        rewind: function (evt) {
            let mouseX = evt.pageX - progressEl.offset().left;
            $audio.currentTime = duration * (mouseX / progressBar.width());
            this.progressBar();
        }
    },
    mounted: function () {
        $audio = $('audio').get(0);
        playEl = $('#play > img');
        pauseEl = $('#pause > img');
        progressEl = $('#progressEl');
        progressBar = $('#progressBar');
        this.getDuration();
        $audio.src = this.trackList[countTrack].src;
        this.$data.title = this.trackList[countTrack].title;
        this.$data.album = this.trackList[countTrack].album;
    }

}
