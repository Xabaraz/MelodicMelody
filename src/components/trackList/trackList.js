import TrackService from "../../js/Services/TrackService.js";
import * as Util from "../../js/Util/utils.js"
import {store} from "../../js/Store/Store";
import {mapState} from "vuex";

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
        chosenTrack: function (track) {
            store.commit(SET_ALBUM, track.album);
            store.commit(SET_TITLE, track.title);
            store.commit(SET_SRC, track.src);
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
