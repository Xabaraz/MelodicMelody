<template>
    <div class="player__container">
        <div class="player__container--top">
            <div class="player__buttons--container">
                <div @click="previous" id="previous">
                    <img src="src/icons/previous.svg" class="player__buttons player__buttons--prev">
                </div>
                <div @click="playTrack" id="play">
                    <img src="src/icons/play.svg" class="player__buttons player__buttons--play">
                </div>
                <div @click="pauseTrack" id="pause">
                    <img src="src/icons/pause.svg" class="player__buttons player__buttons--pause disable">
                </div>
                <div @click="next" id="next">
                    <img src="src/icons/next.svg" class="player__buttons player__buttons--next">
                </div>
            </div>
            <div class="player__track-description">
                <div id="Title" class="player__track-description">{{ title}}</div>
                <div id="Album" class="player__track-description">{{ album }}</div>
            </div>
        </div>
        <div class="player__progress-track--container">
            <div class="player__progress-track">
                <div id="progressBar" class="player__progress-track player__progress-track--fill">
                </div>
                <div class="player__track-description player__track-description--time player__track-description--time-current">{{currentTrackTime}}</div>
                <div class="player__track-description player__track-description--time player__track-description--time-total">{{totalTrackTime}}</div>
            </div>
        </div>

<!--        <audio id="audio"-->
<!--               crossorigin="anonymous"-->
<!--               preload="metadata"-->
<!--               src="../track/Warriors.mp3"-->
<!--               @timeupdate="progressBar"-->
<!--               @loadedmetadata="getDuration">-->
<!--&lt;!&ndash;            <source type="audio/mpeg">&ndash;&gt;-->
<!--        </audio>-->
    </div>
</template>

<script src="src/components/player/player.js"></script>
