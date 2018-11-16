// let box1 = document.querySelector('box1')

// box1.addEventListener('click',function() {
  
//   this.animate([{
// 			background: getComputedStyle(this).background,
// 			width: getComputedStyle(this).width,
// 			height:  getComputedStyle(this).height
// 		},
//     {
// 			background: black,
// 			width: '1670px',
// 			height: '806px'
// 		}], {
//       duration: 250,
//       iterations: 1,
//       fill:'forwards'
//       console.log('hello')
//   });

// })

$(document).ready(function(){
    $(".box1").click(function(){
        $(this).addClass("fullscreen");
    });


 $(".box2").click(function(){
        $(this).addClass("screen2");
    });



 $(".box3").click(function(){
        $(this).addClass("screen3");
        $('.box2').addClass("black");
        $('.box1').addClass("white");
    });


});