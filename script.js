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
});

$(function() {
	$('.expand-arrow').click(function() {
		console.log(this);
		var $arrow = $(this);
		var $jumbotron = $arrow.closest('.jumbotron');
		var $details = $jumbotron.find('.details');
		if ($details.is(":visible")) {
			$details.hide();
		} else {
			$details.show();
		}
	});
});