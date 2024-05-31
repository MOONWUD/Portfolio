/*===== main text =====*/
var textWrapper = document.querySelector('.mainTitle-wrapper .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 0})
  .add({
    targets: '.mainTitle-wrapper .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.mainTitle-wrapper',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
var textWrapper = document.querySelector('.mainTitle-wrapper2 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 0})
  .add({
    targets: '.mainTitle-wrapper2 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i + 1000
  }).add({
    targets: '.mainTitle-wrapper2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 0
  });

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

/*===== 화살표 svg =====*/

/*=====  skill & tool =====*/

/*=== title ===*/
/*
var textWrapper = document.querySelector('.subTitle .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

$(window).on('scroll', () => {
  let dropHt = $('.circularDrop').offset().top - 390;
  if(scrollY >= dropHt) {
      anime.timeline({loop: false})
        .add({
          targets: '.subTitle .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i+1)
        }).add({
          targets: '.subTitle',
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 500
        });
    } 
  })
  */
/*=== 날라오는 박스 ===*/
$(window).on('scroll', () => {
  let skillHt = $('.skillTool').offset().top - 390;
  if(scrollY > skillHt) {
    $('.skill-wrapper').addClass('on')

  } else {
    $('.skill-wrapper').removeClass('on')
  }
})