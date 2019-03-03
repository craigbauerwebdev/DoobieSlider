function doobieSlider(interval, speed) {
	var wrap = $('#wrap'),
	prev = $('.prev'),
	next = $('.next'),
	controls = $('.next, .prev'),
	slider = setInterval(function() {
		$('#wrap img:first').appendTo('#wrap').hide().fadeIn(speed);
	},interval);
	controls.hide();

	wrap.on('mouseenter', function() {
			clearInterval(slider);
			$('.next, .prev').show();
	});

	wrap.on('mouseleave', function() {
		slider = setInterval(function() {
		$('#wrap img:first').appendTo('#wrap').hide().fadeIn(speed);
		},interval);
		$('.next, .prev').hide();
	});

	next.on('click', function(e) {
		e.preventDefault();
		$('#wrap img:first').appendTo('#wrap').hide().fadeIn(speed);

	});

	prev.on('click', function(e) {
		e.preventDefault();
		var last = $('#wrap img:last');
		last.fadeOut(speed);
		setTimeout(function(){
			$('#wrap img:last').prependTo('#wrap').fadeIn();
		}, speed);

	});
}
