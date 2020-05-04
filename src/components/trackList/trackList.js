import * as Util from "../../js/Util/utils.js"
import store from "../../js/Store/Store";
import {mapState} from "vuex";
import {REQUEST_GET, SET_TRACK, SET_TRACK_INDEX, SET_TRACK_LIST} from "../../js/Constatnts";
import RequestOptions from "../../js/Models/RequestOptions";
import ApiService from "../../js/Services/ApiService";

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
            this.$store.commit(SET_TRACK, track);
            this.$store.commit(SET_TRACK_INDEX, index);
            Util.pausePlay(this.$store);
        }
    },
    created() {
        const requestOptions = new RequestOptions(REQUEST_GET);
        ApiService.sendRequest(requestOptions).then(response => {
            this.$store.commit(SET_TRACK_LIST,
                response.data.map(track => ({
                    ...track
                })))
        });
    }
}
