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
const logo = document.querySelectorAll("#facePaths .facePath");

for(let i = 0; i < logo.length; i++) {
    console.log(`${i+1}번째 path의 총 길이 ${logo[i].getTotalLength()}`);
}