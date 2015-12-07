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
			$arrow.children('img').removeClass('rotated');
		} else {
			$details.show();
			$arrow.children('img').addClass('rotated');
		}
	});
});

var collapseSection = function(idSelector) {
    var section = $(idSelector);
    section.find('.details').hide();
    section.find('.expand-arrow').children('img').removeClass('rotated');
}

var expandSection = function(idSelector) {
    var section = $(idSelector);
    section.find('.details').show();
    section.find('.expand-arrow').children('img').addClass('rotated');
}

var filterCourses = function(oppositeSelector, selector) {
	var selectedButtons = $(selector);
	var notSelectedButtons = $(oppositeSelector);
	for (i = 0; i < notSelectedButtons.length; i++) {
		var button = notSelectedButtons[i];
		button.classList.add('disabled');
	}
	for (j = 0; j < selectedButtons.length; j++) {
		var button = selectedButtons[j];
		button.classList.remove('disabled');
	}
}

var clearCourses = function() {
	var buttons = $('.btn');
	for (i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		button.classList.remove('disabled');
	}
}

var rotateAllArrows = function() {
	$('.expand-arrow').children('img').addClass('rotated');
}

var unRotateAllArrows = function() {
	$('.expand-arrow').children('img').removeClass('rotated');
}

var collapseAll = function() {
    $('.details').hide();
    unRotateAllArrows();
}

var expandAll = function() {
    $('.details').show();
    rotateAllArrows();
}

/*
   Make every section collapse when the page loads
   */
$(function() {
    $(document).ready(collapseAll);
});


$(function() {
    $('#collapse-all').click(collapseAll);
});

$(function() {
    $('#expand-all').click(expandAll);
});

/* For making the popover hover< */
$(function() {
	$('.searchItem').popover({
		html: true,
		animation: false,
		trigger: "hover",
		placement: "bottom"
	});
});


/* For smooth scrolling on the website. */
$(".scroll").click(function(event) {
	event.preventDefault();
	
  $('html, body').animate({
		scrollTop: $(this.hash).offset().top - 60
	}, 1000);
});