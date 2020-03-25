import {store} from "../Store/Store";
import {
    DECREMENT_TRACK_INDEX,
    INCREMENT_TRACK_INDEX,
    SET_ALBUM,
    SET_AUDIO,
    SET_PAUSE_EL,
    SET_PLAY_EL,
    SET_SRC,
    SET_TITLE,
    SET_TRACK_INDEX, SET_TRACK_LIST,
    SET_VOLUME
} from "../Constatnts";

let realStore = store.state;

export default class StoreService {

    static setPlayerElem(playEl, pauseEl) {
        store.commit(SET_PLAY_EL, playEl);
        store.commit(SET_PAUSE_EL, pauseEl);
    }

    static getPlayEl() {
        return realStore.playEl;
    }

    static getPauseEl() {
        return realStore.pauseEl;
    }

    static getTrackList() {
        return realStore.trackList
    }

    static setTrackList(trackList) {
        store.commit(SET_TRACK_LIST,trackList);
    }

    static incrementTrackIndex() {
        store.commit(INCREMENT_TRACK_INDEX);
    }

    static decrementTrackIndex() {
        store.commit(DECREMENT_TRACK_INDEX);
    }

    static setTrackIndex(trackIndex) {
        store.commit(SET_TRACK_INDEX, trackIndex);
    }

    static getTrackIndex() {
        return realStore.trackIndex;
    }

    static setTrackInfo(track) {
        store.commit(SET_TITLE, track.title);
        store.commit(SET_ALBUM, track.album);
        store.commit(SET_SRC, track.src);
    }

    static setAudio(audio) {
        store.commit(SET_AUDIO, audio);
    }

    static getAudio() {
        return realStore.$audio;
    }

    static setVolume(volume) {
        store.commit(SET_VOLUME, volume);
    }

}
