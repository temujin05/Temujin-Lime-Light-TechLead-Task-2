$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.item-1').css('top',(400-(scrolled*.8))+'px');
   $('.item-2').css('top',(200-(scrolled*.6))+'px');
   $('.item-3').css('top',(500-(scrolled*.4))+'px'); 
   $('.item-4').css('top',(600-(scrolled*.5))+'px'); 
}