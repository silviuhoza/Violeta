//var button = document.querySelector(".button");
//button.addEventListener("click", function(){
//	document.body.classList.toggle("a");
//});




$("button").on("click", function(){
 $('.ascunde').slideToggle(2000);//, function(){
 	//$(this).remove();
//     console.log("I'm sliding up and down!");
// });
//    $('div').fadeOut(1000);
  // $('.ascunde').fadeIn(2000);
   // $('.div').fadeToggle(5000);
    
});

$("p").on("click", function(){
    $('.div').slideDown(2000);
 });
$("span").on("click", function(){
    $('.div2').slideDown(2000);
 });

$("small").on("click", function(){
    
    $('.div3').slideDown(2000);
 });
 