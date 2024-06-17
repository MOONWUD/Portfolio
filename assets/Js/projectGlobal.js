/*
// ===== scroll event 
// === objective
$(window).on('scroll', () => {
  let objectiveHt = $('main .contentsWrapper .objective').offset().top - 300;
  if (scrollY > objectiveHt) {
    $('.objective').addClass('show');
    
  } else {
    $('.objective').removeClass('show');
  }
})
// === design 
$(window).on('scroll', () => {
  let designHt = $('main .contentsWrapper .design').offset().top - 250;
  if (scrollY > designHt) {
    $('.design').addClass('show');
    
  } else {
    $('.design').removeClass('show');
  }
})
// === design 
$(window).on('scroll', () => {
  let publishingHt = $('main .contentsWrapper .publishing').offset().top - 300;
  if (scrollY > publishingHt) {
    $('.publishing').addClass('show');
    
  } else {
    $('.publishing').removeClass('show');
  }
})
// === review 
$(window).on('scroll', () => {
  let reviewHt = $('main .contentsWrapper .review').offset().top - 500;
  if (scrollY > reviewHt) {
    $('.review').addClass('show');
    
  } else {
    $('.review').removeClass('show');
  }
})
// === review 
$(window).on('scroll', () => {
  let problemSolutionHt = $('main .contentsWrapper .problemSolution').offset().top - 300;
  if (scrollY > problemSolutionHt) {
    $('.problemSolution ').addClass('show');
    
  } else {
    $('.problemSolution ').removeClass('show');
  }
})
// ===  problem
$(window).on('scroll', () => {
  let problemSolutionHt = $('main .contentsWrapper .problemSolution').offset().top - 300;
  if (scrollY > problemSolutionHt) {
    $('.problemSolution ').addClass('show');
    
  } else {
    $('.problemSolution ').removeClass('show');
  }
})
$(window).on('scroll', () => {
  let problem1Ht = $('main .contentsWrapper .problemSolution .content .problemContainer .problem1').offset().top - 300;
  if (scrollY > problem1Ht) {
    $('.problem1').addClass('active');
    
  } else {
    $('.problem1').removeClass('active');
  }
})
$(window).on('scroll', () => {
  let problem2Ht = $('main .contentsWrapper .problemSolution .content .problemContainer .problem2').offset().top - 300;
  if (scrollY > problem2Ht) {
    $('.problem2').addClass('active');
    
  } else {
    $('.problem2').removeClass('active');
  }
})
$(window).on('scroll', () => {
  let problem3Ht = $('main .contentsWrapper .problemSolution .content .problemContainer .problem3').offset().top - 300;
  if (scrollY > problem3Ht) {
    $('.problem3').addClass('active');
    
  } else {
    $('.problem3').removeClass('active');
  }
})
$(window).on('scroll', () => {
  let problem4Ht = $('main .contentsWrapper .problemSolution .content .problemContainer .problem4').offset().top - 300;
  if (scrollY > problem4Ht) {
    $('.problem4').addClass('active');
    
  } else {
    $('.problem4').removeClass('active');
  }
})

*/
$(window).on('scroll', () => {
  let upHt = $('main').offset().top + $('main').height() * 0.7;
  if(scrollY > upHt ) {
    $('.up').addClass('on')
  } else {
    $('.up').removeClass('on')

  }
})