/*===== main text =====*/

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

