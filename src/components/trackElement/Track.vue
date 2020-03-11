<template>
    <div class="track-list">
        <h1>Track</h1>
        <hr />
        <p class="error" v-if="error">{{error}}</p>
        <div class="track-container">
            <div class="track"
                 @click="chosenTrack(trackEl)"
                 v-for="(trackEl, index) in trackList"
                 v-bind:item="trackEl"
                 v-bind:index="index"
                 v-bind:key="trackEl._id"
            >
                <p class="player__track-description">{{trackEl.title}}</p>
                <p class="player__track-description">{{trackEl.album}}</p>
            </div>
        </div>
    </div>
</template>

<script src="./Track.js"></script>
