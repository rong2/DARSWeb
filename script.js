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


/* For offsetting the navbar on the website. */
$(".scroll").click(function(event) {
   event.preventDefault();
   $('html, body').animate({
		scrollTop: $(this.hash).offset().top - 60
	}, 0);
});

