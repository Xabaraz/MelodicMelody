import Vuex from 'vuex';
import Vue from 'vue';
import {
    DECREMENT_TRACK_INDEX,
    INCREMENT_TRACK_INDEX,
    SET_AUDIO,
    SET_PAUSE_EL,
    SET_PLAY_EL, SET_PLAYER_EL,
    SET_TRACK,
    SET_TRACK_INDEX,
    SET_TRACK_LIST, SET_VOLUME
} from "../Constatnts";

Vue.use(Vuex);
const store = new Vuex.Store({
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
        [SET_PLAYER_EL](state, payload) {
            state.pauseEl = payload.pauseEl;
            state.playEl = payload.playEl;
        },
        [SET_TRACK_LIST](state, trackList) {
            state.trackList = trackList;
        },
        [INCREMENT_TRACK_INDEX](state) {
            state.trackIndex = (state.trackIndex !== state.trackList.length - 1) ? state.trackIndex + 1 : 0;
        },
        [DECREMENT_TRACK_INDEX](state) {
            state.trackIndex = (state.trackIndex !== 0) ? state.trackIndex - 1 : state.trackList.length - 1;
        },
        [SET_TRACK_INDEX](state, trackIndex) {
            state.trackIndex = trackIndex;
        },
        [SET_TRACK](state, track) {
            state.title = track.title;
            state.album = track.album;
            state.$audio.src = track.src;
        },
        [SET_AUDIO](state, audio) {
            state.$audio = audio;
        },
        [SET_VOLUME](state, volume) {
            state.$audio.volume = volume;
        },
    }
});

export default store;
