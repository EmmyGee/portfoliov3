// mob-menu

$('.nav-toggle').click(function(e){
$(this).toggleClass('open');
$('.container').toggleClass('nav-open');
});

// transititon

$('.splash').each(function(index, element) {

setTimeout(function(){
    element.classList.remove('loading');
}, index * 600);

});

// gallery hover
$(".hover").mouseleave(
   function () {
     $(this).removeClass("hover");
   }
 );

// smooth scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
