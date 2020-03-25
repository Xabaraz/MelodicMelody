import Vuex from 'vuex';
import Vue from 'vue';
import {
    DECREMENT_TRACK_INDEX,
    INCREMENT_TRACK_INDEX,
    SET_AUDIO,
    SET_PAUSE_EL,
    SET_PLAY_EL,
    SET_TITLE,
    SET_TRACK_INDEX,
    SET_TRACK_LIST, SET_VOLUME
} from "../Constatnts";

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        pauseEl: '',
        playEl: '',
        trackList: [],
        trackIndex: 0,
        title: '',
        album: '',
        $audio: '',
    },
    mutations: {
        setPauseEl(state, pauseEl) {
            state.pauseEl = pauseEl;
        },
        setPlayEl(state, playEl) {
            state.playEl = playEl;
        },
        setTrackList(state, trackList) {
            state.trackList = trackList;
        },
        incrementTrackIndex(state) {
            state.trackIndex = (state.trackIndex !== state.trackList.length - 1) ? state.trackIndex + 1 : 0;
        },
        decrementTrackIndex(state) {
            state.trackIndex = (state.trackIndex !== 0) ? state.trackIndex - 1 : state.trackList.length - 1;
        },
        setTrackIndex(state, trackIndex) {
            state.trackIndex = trackIndex;
        },
        setTitle(state, item) {
            state.title = item.title;
        },
        setAlbum(state, item) {
            state.album = item.album;
        },
        setAudio(state, audio) {
            state.$audio = audio;
        },
        setVolume(state, volume) {
            state.$audio.volume = volume;
        },
        setSrc(state, src) {
            state.$audio.src = src;
        }
    },
    actions: {
        setPauseEl(context, pauseEl) {
            context.commit(SET_PAUSE_EL, pauseEl);
        },
        setPlayEl(context, playEl) {
            context.commit(SET_PLAY_EL, playEl);
        },
        setTrackList(context, trackList) {
            context.commit(SET_TRACK_LIST, trackList);
        },
        incrementTrackIndex(context) {
            context.commit(INCREMENT_TRACK_INDEX);
        },
        decrementTrackIndex(context) {
            context.commit(DECREMENT_TRACK_INDEX);
        },
        setTrackIndex(context, trackIndex) {
            context.commit(SET_TRACK_INDEX, trackIndex);
        },
        setTitle(context, title, album) {
            context.commit(SET_TITLE, title, album);
        },
        setVolume(context, volume) {
            context.commit(SET_VOLUME, volume);
        },
        setAudio(context, audio) {
            context.commit(SET_AUDIO, audio);
        }
    }
});
