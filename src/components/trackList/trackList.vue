<template>
    <div class="track-list">
        <p class="error" v-if="error">{{error}}</p>
        <div class="track-container">
            <div class="track"
                 @click="chosenTrack(track)"
                 v-for="(track, index) in trackList"
                 v-bind:item="track"
                 v-bind:index="index"
                 v-bind:key="track._id"
            >
                <p class="player__track-description">{{track.title}}</p>
                <p class="player__track-description">{{track.album}}</p>
            </div>
        </div>
    </div>
</template>

<script src="./trackList.js"></script>
