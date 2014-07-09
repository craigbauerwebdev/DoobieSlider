
function doobieSlider(interval, speed) {

		var wrap = $('#wrap');
		var prev = $('.prev');
		var next = $('.next');
		var controls = $('.next, .prev');

		//Slider Auto Play
		var slider = setInterval(function() {

			$('#wrap img:first').appendTo('#wrap').hide().fadeIn(speed);
			
		},interval);

		// Hide controls
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

		//Next button
		next.on('click', function(e) {
			e.preventDefault();
			$('#wrap img:first').appendTo('#wrap').hide().fadeIn(speed);

		});

		//Previous button
		prev.on('click', function(e) {
			e.preventDefault();
			var last = $('#wrap img:last');

			last.fadeOut(speed);

			setTimeout(function(){
				$('#wrap img:last').prependTo('#wrap').fadeIn();
			}, speed);

		});

}// close doobie slider