
export function getTime(seconds) {
    let minutes = Math.trunc(seconds / 60) || 0;
    let sec = Math.trunc(seconds % 60);
    return `${minutes}:${sec > 9 ? sec : `0${sec}`}`
}

export function pausePlay(store) {
    playVue(store);
    store.state.$audio.pause();
    store.state.$audio.play();
}

export function playVue(store) {
    if (store.state.pauseEl.classList.contains('disable')) {
        store.state.playEl.classList.add('disable');
        store.state.pauseEl.classList.remove('disable');
    }
}
