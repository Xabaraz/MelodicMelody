import TrackService from "../../js/Services/TrackService.js";
import * as Util from "../../js/Util/utils.js"
import {store} from "../../js/Store/Store";
import {mapState} from "vuex";
import StoreService from "../../js/Services/StoreService";

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
            StoreService.setTrackInfo(track);
            StoreService.setTrackIndex(index);
            Util.pausePlay();
        }
    },
    async created() {
        try {
            StoreService.setTrackList( await TrackService.getTracks());
        } catch (e) {
            this.error = e.message
        }
    }
}
