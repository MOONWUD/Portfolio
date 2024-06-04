history.scrollRestoration = "manual"; // 새로고침 위치 기억

/*===== 클릭시 이미지 생성  =====*/

/*===== main  =====*/
/*=== text ===*/
var textWrapper = document.querySelector('.ml1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 2})
  .add({
    targets: '.ml1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml1',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 2})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i + 500
  }).add({
    targets: '.ml2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/*=== box ===*/
gsap.to(".box1", {
  scrollTrigger: {
    trigger: '.box1',//객체기준범위
    start: "10% 30%",//시작 지점
    end: "100% 80%",//끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1,//부드러운 스크러빙
    //markers: true,개발가이드선
  },
  scale: 2,
  borderRadius: 0,
  duration: 1
});

/*===== about =====*/
/*=== face ===*/
$(window).on('scroll', () => {
  let faceHt = $('.face').offset().top - 400;
  if (scrollY > faceHt) {
    $('.face').addClass('show');
    
  } else {
    $('.face').removeClass('show');
  }
})

/*=== drop ===*/

gsap.to(".drop .contentsWrapper .text-wrapper", {
  scrollTrigger: {
    trigger: '.drop',//객체기준범위
    start: "10% 30%",//시작 지점
    end: "80% 80%",//끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1,//부드러운 스크러빙
    //markers: true,개발가이드선
  },
  scale: 1,
  borderRadius: 0,
  duration: 1,
  opacity: 1,
});

$(window).on('scroll', () => {
  let dropHt = $('.drop .contentsWrapper .text-wrapper').offset().top - 350;
  if (scrollY > dropHt) {
    $('.glitters').addClass('show');

  } else {
    $('.glitters').removeClass('show');
  }
})

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
