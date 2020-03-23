import TrackService from "../../js/Services/TrackService.js";
import * as Util from "../../js/Util/utils.js"
import {store} from "../../js/Store/Store";
import {mapState} from "vuex";
import {SET_ALBUM, SET_TITLE, SET_SRC, SET_TRACK_INDEX} from "../../js/Constatnts";

let realStore = store.state;

export default {
    data() {
        return {
            error: ''
        }
    },
    store,
    computed: mapState({
        trackList: state => state.trackList
    }),
    methods: {
        chosenTrack: function (track, index) {
            store.commit(SET_TITLE, track.title, track.album);
            store.commit(SET_SRC, track.src);
            store.commit(SET_TRACK_INDEX, index);
            Util.pausePlay(realStore);
        }
    },
    async created() {
        try {
            realStore.trackList = await TrackService.getTracks();
        } catch (e) {
            this.error = e.message
        }
    }
}
