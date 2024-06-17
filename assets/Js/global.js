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
