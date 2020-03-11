import {getTime} from "../../js/utils";
import * as $ from "jquery";

let duration,
    playEl,
    pauseEl,
    countTrack = 0,
    progressEl,
    progressBar,
    volumeEl,
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
                {
                    src: require('@tracks/Warriors.mp3'),
                    title: 'Warriors',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Battle Cry.mp3'),
                    title: 'Battle Cry',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Monster.mp3'),
                    title: 'Monster',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Death Parad.mp3'),
                    title: 'Death Parad',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Ведьма I.mp3'),
                    title: 'Ведьма I',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Ведьма II.mp3'),
                    title: 'Ведьма II',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Дикая охота.mp3'),
                    title: 'Дикая охота',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Геймер.mp3'),
                    title: 'Геймер',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Герой с тысячью лиц.mp3'),
                    title: 'Герой с тысячью лиц',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Символ мироздания.mp3'),
                    title: 'Символ мироздания',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Никто вместо нас.mp3'),
                    title: 'Никто вместо нас.',
                    album: 'White Rose'
                },
                {
                    src: require('@tracks/Песня ведьм.mp3'),
                    title: 'Песня ведьм',
                    album: 'White Rose'
                },
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
            this.pauseTrack();
            this.playTrack();
        },
        previous: function () {
            countTrack = (countTrack !== 0) ? countTrack - 1 : this.$data.trackList.length;
            const prevTrack = this.$data.trackList[countTrack];
            $audio.src = prevTrack.src;
            this.$data.title = prevTrack.title;
            this.pauseTrack();
            this.playTrack();
        },
        progressBar: function () {
            progressEl.css('width', `${($audio.currentTime / duration * 100).toFixed(2)}%`);
            // progressEl.value = `${($audio.currentTime / duration * 100).toFixed(2)}`;
            this.$data.currentTrackTime = getTime($audio.currentTime);
            this.$data.totalTrackTime = getTime(duration);
        },
        getDuration: () => {
            duration = $audio.duration;
        },
        changeVolume: function () {
            this.$data.volume = volumeEl.value;
            $audio.volume = this.$data.volume / 100;
            console.log($audio.volume);
            console.log(volumeEl.value);
        },
        rewind: function (evt) {
            let mouseX = evt.pageX - progressEl.offset().left;
            $audio.currentTime = duration * (mouseX / progressBar.width());
            this.progressBar();
        }
    },
    mounted: function () {
        $audio = $('audio').get(0);
        volumeEl = $('#trackVolume').get(0);
        $audio.src = this.$data.trackList[countTrack].src;
        playEl = $('#play > img');
        pauseEl = $('#pause > img');
        progressEl = $('#progressEl');
        progressBar = $('#progressBar');
        this.getDuration();
    }

}
