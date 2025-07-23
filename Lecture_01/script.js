// // gives warning in console if target element not found (as commented in html)
// gsap.to("#one", {
// 	x: 1200,
// 	rotate: 90,
// 	duration: 2,
// 	delay: 1,
// 	backgroundColor: "blue",
// });

// gsap.from("#two", {
// 	x: 1300,
// 	backgroundColor: "teal",
// 	scale: 0.7,
// 	delay: 1,
// 	duration: 2,
// });

// gsap.from("h1", {
// 	opacity: 0,
// 	y: 30,
// 	stagger: 0.5, // controls multiple elements timing
// 	delay: 1,
// });

// gsap.to("#b3", {
// 	x: 1200,
// 	rotate: 360,
// 	delay: 1,
// 	duration: 2,
// 	repeat: 1, // no of times to repeat, excluding the initial one, -1 for infinite
// 	yoyo: true,
// });

let tm = gsap.timeline();

tm.from("h2", {
	y: -20,
	opacity: 0,
	delay: 0.5,
	duration: 1,
});

tm.from("h4", {
	y: -20,
	opacity: 0,
	duration: 1,
	stagger: 0.1,
});

let tm2 = gsap.timeline();

tm.from("h3", {
	y: 20,
	opacity: 0,
	duration: 0.3,
});

tm.from("h1", {
	y: 20,
	color: "green",
	opacity: 0,
	scale: 0.3,
	duration: 0.3,
});
