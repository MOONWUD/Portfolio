/*===== mouse emoji =====*/
const emoji = document.querySelector('.logo-emoji');
$('.logo-emoji');

let mouseX = 0;
let mouseY = 0;

addEventListener('mousemove', (e) => {
 mouseX = e.clientX -10;
 mouseY = e.clientY -10;
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


/*===== header =====*/


/*===== 눈알 굴러가는 이벤트 =====*/
var eyeball = $(".pupil");

function moveEyes(event) {
  let x = event.x * 100 / window.innerWidth - 5 + "%";
  let y = event.y * 100 / window.innerHeight - 5 + "%";
  console.log(event.clientX * 100 / window.innerWidth);
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
