/*
 * Vue Slider
 */
const root = new Vue({
	el: "#root",
	data: {
		slides: [
			{
				image: "img/01.jpg",
				title: "Svezia",
				text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque providen totam omnis, magnam dolores dolorum corporis.",
			},
			{
				image: "img/02.jpg",
				title: "Svizzera",
				text: "Lorem ipsum.",
			},
			{
				image: "img/03.jpg",
				title: "Gran Bretagna",
				text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
			},
			{
				image: "img/04.jpg",
				title: "Germania",
				text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
			},
			{
				image: "img/05.jpg",
				title: "Bahamas",
				text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
			},
		],
		actived: 0,
	},
	created() {
		setInterval(() => {
			this.nextSlide();
		}, 3000);
	},
	methods: {
		getActive(thumbIndex, currentIndex) {
			return thumbIndex === currentIndex ? `active` : "";
		},
		getHidden(thumbIndex, currentIndex) {
			return thumbIndex !== currentIndex ? `hidden` : "";
		},
		prevSlide() {
			this.actived <= 0 ? (this.actived = this.slides.length - 1) : this.actived--;
		},
		nextSlide() {
			this.actived >= this.slides.length - 1 ? (this.actived = 0) : this.actived++;
		},
		handleClick(e) {
			this.actived = [...document.querySelectorAll(".thumb")].indexOf(e.currentTarget);
		},
	},
});
