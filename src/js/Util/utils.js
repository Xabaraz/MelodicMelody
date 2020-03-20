export function getTime(seconds) {
    let minutes = Math.trunc(seconds / 60) || 0;
    let sec = Math.trunc(seconds % 60);
    return `${minutes}:${sec > 9 ? sec : `0${sec}`}`
}

export function pausePlay(realStore) {
    if (realStore.pauseEl.hasClass('disable')) {
        realStore.playEl.addClass('disable');
        realStore.pauseEl.removeClass('disable');
    }
    realStore.$audio.pause();
    realStore.$audio.play();
}
