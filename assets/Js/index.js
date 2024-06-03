/*===== main text =====*/
var textWrapper = document.querySelector('.mainTitle-wrapper .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 0 })
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
    delay: 800
  });

var textWrapper = document.querySelector('.mainTitle-wrapper2 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 0 })
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
    start: "0% 10%",//시작 지점
    end: "120% 100%",//끝 지점
    scrub: 1,//부드러운 스크러빙
    markers: true, //  개발가이드선
  },
  // x: 300,
  y: '180vh',
  rotation: 360,
  scale: 2.5
});

/*===== appleEating =====*/


/*===== skill & tool =====*/
/*=== title ===*/
/*=== 날라오는 박스 ===*/
$(window).on('scroll', () => {
  let skillHt = $('.skillTool').offset().top - 400;
  if (scrollY > skillHt) {
    $('.skillTool').addClass('show');

  } else {
    $('.skillTool').removeClass('show');
  }
})

/*===== project =====*/
$(window).on('scroll', () => {
  let projectHt = $('.project').offset().top - 400;
  if (scrollY > projectHt) {
    $('.project').addClass('show');

  } else {
    $('.project').removeClass('show');
  }
})