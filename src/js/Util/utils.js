import StoreService from "../Services/StoreService";

export function getTime(seconds) {
    let minutes = Math.trunc(seconds / 60) || 0;
    let sec = Math.trunc(seconds % 60);
    return `${minutes}:${sec > 9 ? sec : `0${sec}`}`
}

export function pausePlay() {
    if (StoreService.getPauseEl().hasClass('disable')) {
        StoreService.getPlayEl().addClass('disable');
        StoreService.getPauseEl().removeClass('disable');
    }
    StoreService.getAudio().pause();
    StoreService.getAudio().play();
}
