history.scrollRestoration = "manual"; // 새로고침 위치 기억

/*===== 눈알 굴러가는 이벤트 =====*/
var eyeball = $(".pupil");

function moveEyes(event) {
  let x = event.x * 100 / window.innerWidth - 5 + "%";
  let y = event.y * 100 / window.innerHeight - 5 + "%";
  eyeball.css({
    'left': x,
    'top': y,
  });

}

document.addEventListener("mousemove", moveEyes);

$('body').mouseleave(function (e) {
  eyeball.css({
    'transform': 'translate(0,0)',
    'top': 'calc(50% - 6px)',
    'left': 'calc(50% - 6px)'
  });
});


/*===== mouse emoji =====*/
const emoji = document.querySelector('.logo-emoji');
$('.logo-emoji');

let mouseX = 0;
let mouseY = 0;

addEventListener('mousemove', (e) => {
  mouseX = e.clientX - 10;
  mouseY = e.clientY - 10;
})
let emojiX = 0;
let emojiY = 0;

const emojiMov = () => {
  requestAnimationFrame(emojiMov);

  emojiX += (mouseX - emojiX) * 0.1;
  emojiY += (mouseY - emojiY) * 0.1;

  emoji.style.transform = `translate(${emojiX}px, ${emojiY}px)`;
}

emojiMov();


/*===== main  =====*/
/*=== title ===*/
/* 첫번째 줄 */
var textWrapper = document.querySelector('.ml1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 2 })
  .add({
    targets: '.ml1 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml1',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/* 두번째 줄 */
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 2 })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i + 500
  }).add({
    targets: '.ml2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/*=== background ===*/
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
/*=== scale text ===*/
gsap.to(".drop .contentsWrapper .text-wrapper", {
  scrollTrigger: {
    trigger: '.drop',//객체기준범위
    start: "0% 30%",//시작 지점
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

/*=== glitters ===*/
$(window).on('scroll', () => {
  let dropHt = $('.drop .contentsWrapper .text-wrapper').offset().top - 350;
  if (scrollY > dropHt) {
    $('.glitters').addClass('show');

  } else {
    $('.glitters').removeClass('show');
  }
})

/*===== skill & tool =====*/
$(window).on('scroll', () => {
  let skillHt = $('.skillTool').offset().top - 400;
  if (scrollY > skillHt) {
    $('.skillTool').addClass('show');

  } else {
    $('.skillTool').removeClass('show');
  }
})

/*===== project =====*/
/*=== title ===*/
$(window).on('scroll', () => {
  let projectHt = $('.project').offset().top - 500;
  if (scrollY > projectHt) {
    $('.project').addClass('show');

  } else {
    $('.project').removeClass('show');
  }
})
/*=== 가로스크롤 ===*/
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".projectContainer");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".project",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),s
    end: () => "+=" + document.querySelector(".project").offsetWidth
  }
});
