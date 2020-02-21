import {getTime} from "./utils"


let duration,
    playEl,
    pauseEl,
    countTrack = 0,
    progressEl;
const $audio = new Audio();

export default {
    data: () => {
        return {
            title: 'Warriors',
            album: 'White Rose',
            totalTrackTime: '0:00',
            currentTrackTime: '0:00',
            trackList: [
                {
                    src: require('../track/Warriors.mp3'),
                    title: 'Warriors',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Battle Cry.mp3'),
                    title: 'Battle Cry',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Monster.mp3'),
                    title: 'Monster',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Death Parad.mp3'),
                    title: 'Death Parad',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Ведьма I.mp3'),
                    title: 'Ведьма I',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Ведьма II.mp3'),
                    title: 'Ведьма II',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Дикая охота.mp3'),
                    title: 'Дикая охота',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Геймер.mp3'),
                    title: 'Геймер',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Герой с тысячью лиц.mp3'),
                    title: 'Герой с тысячью лиц',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Символ мироздания.mp3'),
                    title: 'Символ мироздания',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Никто вместо нас.mp3'),
                    title: 'Никто вместо нас.',
                    album: 'White Rose'
                },
                {
                    src: require('../track/Песня ведьм.mp3'),
                    title: 'Песня ведьм',
                    album: 'White Rose'
                },
            ]
        }
    },
    methods: {
        playTrack: function playTrack() {
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
            $audio.load();
            playTrack();
        },
        previous: function () {
            countTrack = (countTrack !== 0) ? countTrack - 1 : this.$data.trackList.length;
            const prevTrack = this.$data.trackList[countTrack];
            $audio.src = prevTrack.src;
            this.$data.title = prevTrack.title;
            $audio.load();
        },
        progressBar: function () {
            progressEl.css('width', `${($audio.currentTime / duration * 100).toFixed(2)}%`);
            this.$data.currentTrackTime = getTime($audio.currentTime);
            this.$data.totalTrackTime = getTime(duration);
        },
        getDuration: () => {
            duration = $audio.duration;
        }
    },
    mounted: function () {
        $audio.src = this.$data.trackList[countTrack].src;
        playEl = $('#play > img');
        pauseEl = $('#pause > img');
        progressEl = $('#progressBar');
    }
}
