gsap.from(".p1 .b1", {
	scale: 0,
	rotate: 360,
	delay: 1,
	duration: 0.8,
});

// gsap.from(".p2 .b2", {
// 	x: -1000,
// 	duration: 0.7,
// 	scrollTrigger: {
// 		trigger: ".p2 .b2",
// 		scroller: "body",
// 		markers: true,
// 		start: "top 50%",
// 	},
// });

// gsap.to(".p3 .b3", {
// 	scale: 2,
// 	rotate: 90,
// 	delay: 0.2,
// 	duration: 0.7,
// 	repeat: 1,
// 	yoyo: true,
// 	scrollTrigger: {
// 		trigger: ".p3 .b3",
// 		scroller: "body",
// 		markers: true,
// 		start: "top 50%",
// 	},
// });

gsap.from("#subtext", {
	x: -600,
	duration: 1,
	scrollTrigger: {
		trigger: "#subtext",
		scroller: "body",
		// markers: true,
		scrub: 2,
		start: "top 90%",
		end: "top 30%",
	},
});

gsap.from("#text", {
	x: 600,
	duration: 1,
	scrollTrigger: {
		trigger: "#text",
		scroller: "body",
		// markers: true,
		scrub: 2,
		start: "top 110%",
		end: "top 60%",
	},
});

gsap.to(".p5 h1", {
	transform: "translateX(-100%)",
	duration: 1,
	scrollTrigger: {
		trigger: ".p5",
		scroller: "body",
		markers: true,
		start: "top 0%",
		end: "top -100%",
		scrub: 2,
		pin: true,
	},
});
