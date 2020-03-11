<template>
    <div>
        <ul>
            <trackEl v-for="track in trackList" :key="track.src" />
        </ul>
    </div>

</template>

<script src="./trackList.js"></script>
