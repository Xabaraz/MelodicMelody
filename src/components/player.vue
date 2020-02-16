<template>
    <div class="player__container">
        <div class="player__container--top">
            <div class="player__buttons--container">
                <div>
                    <img src="../icons/previous.svg" class="player__buttons player__buttons--prev">
                </div>
                <div>
                    <img src="../icons/play.svg" class="player__buttons player__buttons--play">
                </div>
                <div>
                    <img src="../icons/pause.svg" class="player__buttons player__buttons--pause disable">
                </div>
                <div>
                    <img src="../icons/next.svg" class="player__buttons player__buttons--next">
                </div>
            </div>
            <div class="player__track-description">
                <div id="Title" class="player__track-description">Title</div>
                <div id="Album" class="player__track-description">Album</div>
            </div>
        </div>
        <div class="player__progress-track--container">
            <div class="player__progress-track">
                <div class="player__progress-track player__progress-track--fill"></div>
            </div>
        </div>
    </div>
</template>

<script>
</script>
