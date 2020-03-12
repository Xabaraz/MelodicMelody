import * as Util from "../../js/utils";
import * as $ from "jquery";
import {Track} from "../../js/Models/Track.js"

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
            title: 'Warriors',
            album: 'White Rose',
            totalTrackTime: '0:00',
            currentTrackTime: '0:00',
            volume: "70",
            trackList: [
                new Track(require('@tracks/Warriors.mp3'), 'Warriors', 'White Rose'),
                new Track(require('@tracks/Battle Cry.mp3'), 'Battle Cry', 'White Rose'),
                new Track(require('@tracks/Monster.mp3'), 'Monster', 'White Rose'),
                new Track(require('@tracks/Death Parad.mp3'), 'Death Parad', 'White Rose'),
                new Track(require('@tracks/Ведьма I.mp3'), 'Ведьма I', 'White Rose'),
                new Track(require('@tracks/Ведьма II.mp3'), 'Ведьма II', 'White Rose'),
                new Track(require('@tracks/Дикая охота.mp3'), 'Дикая охота', 'White Rose'),
                new Track(require('@tracks/Геймер.mp3'), 'Геймер', 'White Rose'),
                new Track(require('@tracks/Символ мироздания.mp3'), 'Символ мироздания', 'White Rose'),
                new Track(require('@tracks/Никто вместо нас.mp3'), 'Никто вместо нас', 'White Rose'),
                new Track(require('@tracks/Песня ведьм.mp3'), 'Песня ведьм', 'White Rose'),
            ]
        }
    },
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
            countTrack = (countTrack !== this.$data.trackList.length) ? countTrack + 1 : 0;
            const nextTrack = this.$data.trackList[countTrack];
            $audio.src = nextTrack.src;
            this.$data.title = nextTrack.title;
            Util.pausePlay($audio);
        },
        previous: function () {
            countTrack = (countTrack !== 0) ? countTrack - 1 : this.$data.trackList.length;
            const prevTrack = this.$data.trackList[countTrack];
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
        $audio.src = this.$data.trackList[countTrack].src;
    }

}
