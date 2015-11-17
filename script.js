$(function() {
	$(window).scroll(function() {
		var buttonsToHide = document.getElementsByClassName('invisible');
		if ($(window).scrollTop() < 525) {
			for (i = 0; i < buttonsToHide.length; i++) {
				buttonsToHide[i].style.visibility = 'hidden';
			}
		} else {
			for (i = 0; i < buttonsToHide.length; i++) {
				buttonsToHide[i].style.visibility = 'visible';
			}
		}
	});

	if (!!$('.sticky').offset()) {
		var stickyTop = $('.sticky').offset().top; 
		$(window).scroll(function(){ 
			var windowTop = $(window).scrollTop();
		    if (stickyTop < (windowTop + 75)){
		    	$('#add-course-display').css({ position: 'fixed', top: 60 });
		    	$('#legend-display').css({ position: 'fixed', top: ($('#add-course-display').height() + 70) });
		    } else {
		        $('#legend-display').css('position','static');
		       	$('#add-course-display').css('position', 'static');
		    }
		});
	}
});