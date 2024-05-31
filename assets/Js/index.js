/*===== main =====*/
/*
var split = new SplitText(".mainTitle", {
  type:"chars", 
}), 
tl = gsap.timeline({repeat:1});

// gsap.set(".mainTitle", {opacity:1}); 
tl.from(split.chars, {
duration:2.5, 
y:100,
ease:"elastic", 
stagger: 0.05
});
8?

/*===== appleRotation =====*/

gsap.to(".appleRotation img", {
  scrollTrigger: {
    trigger: '.appleRotation',//객체기준범위
    start: "5% 10%",//시작 지점
    end: "150% 100%",//끝 지점
    scrub: 1,//부드러운 스크러빙
    markers: true, //  개발가이드선
  },
  // x: 300,
  y: '180vh',
  rotation: 360,
  scale: 3.5
});

