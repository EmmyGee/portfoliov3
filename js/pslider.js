// portfolio slider
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

// portfolio slider 2
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider2 ul li').length;
	var slideWidth = $('#slider2 ul li').width();
	var slideHeight = $('#slider2 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider2').css({ width: slideWidth, height: slideHeight });

	$('#slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider2 ul li:last-child').prependTo('#slider2 ul');

    function moveLeft() {
        $('#slider2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

// portfolio slider 3
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider3 ul li').length;
	var slideWidth = $('#slider3 ul li').width();
	var slideHeight = $('#slider3 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider3').css({ width: slideWidth, height: slideHeight });

	$('#slider3 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider3 ul li:last-child').prependTo('#slider3 ul');

    function moveLeft() {
        $('#slider3 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider3 ul li:last-child').prependTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider3 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider3 ul li:first-child').appendTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

// portfolio slider 4
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider4 ul li').length;
	var slideWidth = $('#slider4 ul li').width();
	var slideHeight = $('#slider4 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider4').css({ width: slideWidth, height: slideHeight });

	$('#slider4 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider4 ul li:last-child').prependTo('#slider4 ul');

    function moveLeft() {
        $('#slider4 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider4 ul li:last-child').prependTo('#slider4 ul');
            $('#slider4 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider4 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider4 ul li:first-child').appendTo('#slider4 ul');
            $('#slider4 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

// portfolio slider 5
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider5 ul li').length;
	var slideWidth = $('#slider5 ul li').width();
	var slideHeight = $('#slider5 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider5').css({ width: slideWidth, height: slideHeight });

	$('#slider5 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider5 ul li:last-child').prependTo('#slider5 ul');

    function moveLeft() {
        $('#slider5 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider5 ul li:last-child').prependTo('#slider5 ul');
            $('#slider5 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider5 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider5 ul li:first-child').appendTo('#slider5 ul');
            $('#slider5 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

// portfolio slider 6
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider6 ul li').length;
	var slideWidth = $('#slider6 ul li').width();
	var slideHeight = $('#slider6 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider6').css({ width: slideWidth, height: slideHeight });

	$('#slider6 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider6 ul li:last-child').prependTo('#slider6 ul');

    function moveLeft() {
        $('#slider6 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider6 ul li:last-child').prependTo('#slider6 ul');
            $('#slider6 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider6 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider6 ul li:first-child').appendTo('#slider6 ul');
            $('#slider6 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});
