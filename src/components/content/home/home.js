export default {
    data: () => {
        return {
            slideIndex: 0,
            slides: []
        }
    },
    methods: {
        changeSlide: function(nextIndex) {
            this.$data.slides[this.$data.slideIndex].classList.remove('active');
            this.showSlide(this.$data.slideIndex += nextIndex);
        },
        showSlide: function(showIndex) {
            if (showIndex > this.$data.slides.length - 1) {
                showIndex = 0;
            }
            if (showIndex < 0) {
                showIndex = this.$data.slides.length - 1;
            }
            this.$data.slides[showIndex].classList.add('active');
            this.$data.slideIndex = showIndex;
        }
    },
    mounted: function () {
        this.$data.slides = document.getElementsByClassName('slide');
    }

}
