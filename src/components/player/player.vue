<template>
    <div class="player__container">
        <div class="player__container--top">
            <div class="player__buttons--container">
                <button @click="previous" id="previous">
                    <img src="@icons/previous.svg" class="player__buttons player__buttons--prev">
                </button>
                <button @click="playTrack" id="play">
                    <img src="@icons/play.svg" class="player__buttons player__buttons--play">
                </button>
                <button @click="pauseTrack" id="pause">
                    <img src="@icons/pause.svg" class="player__buttons player__buttons--pause disable">
                </button>
                <button @click="next" id="next">
                    <img src="@icons/next.svg" class="player__buttons player__buttons--next">
                </button>
            </div>
            <div class="player__track-description">
                <div id="Title" class="player__track-description">{{ title}}</div>
                <div id="Album" class="player__track-description">{{ album }}</div>
            </div>
        </div>
        <div class="player__progress-track--container" @click="rewind">
            <div id="progressBar" class="player__progress-track">
                <div id="progressEl" class="player__progress-track player__progress-track--fill"></div>
                <div class="player__track-description player__track-description--time player__track-description--time-current">{{currentTrackTime}}</div>
                <div class="player__track-description player__track-description--time player__track-description--time-total">{{totalTrackTime}}</div>
            </div>
            <input id="trackVolume" type="range" @change="changeVolume" v-bind:value="volume">
        </div>
        <audio crossorigin="anonymous"
               preload="metadata"
               @timeupdate="progressBar"
               @loadedmetadata="getDuration">
        </audio>
    </div>
</template>

<script src="./player.js"></script>
