import TrackService from "../../js/TrackService";

export default {
    name: "TrackEl",
    data()  {
        return {
            trackList: [],
            error: '',
            src: '',
            title: '',
            albums: ''
        }
    },
    async created() {
        try {
            this.trackList = await TrackService.getTracks();
        } catch (e) {
            this.error = e.message
        }
    }
}
