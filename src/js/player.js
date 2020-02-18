import {getTime} from "./utils"


let duration,
    audioEl,
    $audio,
    playEl,
    pauseEl,
    countTrack = 0,
    progressEl;

export default {
    data: () => {
        return {
            title: 'Warriors',
            album: 'White Rose',
            totalTrackTime: '0:00',
            currentTrackTime: '0:00',
            trackList: [
                {
                    src: '../track/Warriors.mp3',
                    title: 'Warriors',
                    album: 'White Rose'
                },
                {
                    src: '../track/Warriors.mp3',
                    title: 'Battle Cry',
                    album: 'White Rose'
                },
                {
                    src: '../track/Monster.mp3',
                    title: 'Monster',
                    album: 'White Rose'
                },
                {
                    src: '../track/Death Parad.mp3',
                    title: 'Death Parad',
                    album: 'White Rose'
                },
                {
                    src: '../track/Ведьма I.mp3',
                    title: 'Ведьма I',
                    album: 'White Rose'
                },
                {
                    src: '../track/Ведьма II.mp3',
                    title: 'Ведьма II',
                    album: 'White Rose'
                },
                {
                    src: '../track/Дикая охота.mp3',
                    title: 'Дикая охота',
                    album: 'White Rose'
                },
                {
                    src: '../track/Геймер.mp3',
                    title: 'Геймер',
                    album: 'White Rose'
                },
                {
                    src: '../track/Герой с тысячью лиц.mp3',
                    title: 'Герой с тысячью лиц',
                    album: 'White Rose'
                },
                {
                    src: '../track/Символ мироздания.mp3',
                    title: 'Символ мироздания',
                    album: 'White Rose'
                },
                {
                    src: '../track/Никто вместо нас..mp3',
                    title: 'Никто вместо нас.',
                    album: 'White Rose'
                },
                {
                    src: '../track/Песня ведьм.mp3',
                    title: 'Песня ведьм',
                    album: 'White Rose'
                },
            ]
        }
    },
    methods: {
        playTrack: function() {
            playEl.addClass('disable');
            pauseEl.removeClass('disable');
            $audio.trigger('play');
        },
        pauseTrack: () => {
            pauseEl.addClass('disable');
            playEl.removeClass('disable');
            $audio.trigger('pause');
        },
        next: function () {
            countTrack = (countTrack !== this.$data.trackList.length) ? countTrack + 1 : 0;
            const nextTrack = this.$data.trackList[countTrack];
            $audio.get(0).src = nextTrack.src;
            this.$data.title = nextTrack.title;
            $audio.trigger('load');
        },
        previous: function () {
            countTrack = (countTrack !== 0) ? countTrack - 1 : this.$data.trackList.length;
            const prevTrack = this.$data.trackList[countTrack];
            $audio.attr('src', prevTrack.src);
            this.$data.title = prevTrack.title;
            $audio.trigger('load');
        },
        progressBar: function () {
            progressEl.css('width', `${(audioEl.currentTime / duration * 100).toFixed(2)}%`);
            this.$data.currentTrackTime = getTime(audioEl.currentTime);
            this.$data.totalTrackTime = getTime(duration);
        },
        getDuration: () => {
            duration = audioEl.duration;
        }
    },
    mounted: () => {
        $audio = $('audio').first();
        audioEl = $audio[0];
        playEl = $('#play > img');
        pauseEl = $('#pause > img');
        progressEl = $('#progressBar');
    },
    updated: () => {
        $audio = $('audio').first();
        audioEl = $audio.get(0);
    }
}
