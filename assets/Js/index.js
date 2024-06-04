/*===== main  =====*/
/*=== text ===*/
// var textWrapper = document.querySelector('.mainTitle-wrapper .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: 0 })
//   .add({
//     targets: '.mainTitle-wrapper .letter',
//     rotateY: [-90, 0],
//     duration: 1300,
//     delay: (el, i) => 45 * i
//   }).add({
//     targets: '.mainTitle-wrapper',
//     opacity: 1,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 800
//   });

// var textWrapper = document.querySelector('.mainTitle-wrapper2 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: 0 })
// .add({
//   targets: '.mainTitle-wrapper2 .letter',
//   rotateY: [-90, 0],
//   duration: 1300,
//   delay: (el, i) => 45 * i + 1000
// }).add({
//   targets: '.mainTitle-wrapper2',
//   opacity: 1,
//   duration: 1000,
//   easing: "easeOutExpo",
//   delay: 0
// });
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
// $(window).on('scroll', () => {
//   let dropHt = $('.drop').offset().top - 50;
//   if (scrollY > dropHt) {
//     $('.drop .contentsWrapper').addClass('show');
    
//   } else {
//     $('.drop .contentsWrapper' ).removeClass('show');
//   }
// })
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
  let dropHt = $('.drop .contentsWrapper .text-wrapper').offset().top - 300;
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



// 패스 길이 구하는 식
/*
const logo = document.querySelectorAll("#facePaths .facePath");

for(let i = 0; i < logo.length; i++) {
    console.log(`${i+1}번째 path의 총 길이 ${logo[i].getTotalLength()}`);
}
*/