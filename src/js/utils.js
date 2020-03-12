export function getTime(seconds) {
    let minutes = Math.trunc(seconds / 60) || 0;
    let sec = Math.trunc(seconds % 60);
    return `${minutes}:${sec > 9 ? sec : `0${sec}`}`
}

export function pausePlay($audio) {
    $audio.pause();
    $audio.play();
}
