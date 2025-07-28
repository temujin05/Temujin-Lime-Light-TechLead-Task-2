$(window).bind('scroll', function (e) {
    parallaxScroll();
});

function parallaxScroll() {
   var scrolled = $(window).scrollTop(); 
   $('.item-1').css('top',(350-(scrolled *.5)) + 'px');
   $('.item-2').css('top',(180-(scrolled *.4)) + 'px');
   $('.item-3').css('top',(520-(scrolled *.3)) + 'px'); 
   $('.item-4').css('top',(580-(scrolled *.45)) + 'px'); 
   $('.item-5').css('top',(640-(scrolled *.6)) + 'px'); 
   $('.item-6').css('top',(420-(scrolled *.65)) + 'px'); 
   $('.item-7').css('top',(600-(scrolled *.35)) + 'px'); 
}
