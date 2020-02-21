import Track from "../Track/Track";

export default {
    name: "trackList",
    data: () => {
        return {
            trackList: [
                {
                    src: require('@tracks/Warriors.mp3'),
                    title: 'Warriors',
                    album: 'White Rose'
                }
            ]
        }
    },
    components: {Track}
}
