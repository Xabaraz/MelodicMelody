import Vuex from 'vuex';
import Vue from 'vue';
// import * from '../Constatnts.js';

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
            state.trackIndex++;
        },
        decrementTrackIndex(state) {
            state.trackIndex--;
        },
        setTrackIndex(state, trackIndex) {
            state.trackIndex = trackIndex;
        },
        setTitle(state, title) {
            state.title = title;
        },
        setAlbum(state, album) {
            state.album = album;
        },
        setAudio(state, audio) {
            state.$audio = audio;
        },
        setVolume(state, volume) {
            state.$audio.volume = volume;
        },
        setSrc(state, src) {
            state.$audio.crs = src;
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
        setTitle(context, title) {
            context.commit(SET_TITLE, title);
        },
        setAlbum(context, album) {
            context.commit(SET_ALBUM, album);
        },
        setAudio(context, audio) {
            context.commit(SET_AUDIO, audio);
        }
    }
});
