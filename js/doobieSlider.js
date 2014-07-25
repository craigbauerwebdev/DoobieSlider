
function doobieSlider(interval, speed) {

		var wrap = $('#wrap');
		var prev = $('.prev');
		var next = $('.next');
		var controls = $('.next, .prev');
		var first = $('#long-wrap a:eq(0)');
		
		function slide() {
			var first = $('#long-wrap a:eq(0)');
			var second = $('#long-wrap a:eq(1)');

			second.css('right', '0').animate({

				right: '+960px'

			}, speed);

			first.animate({

				right: '+=960px'

			}, speed, function(){ 

				first.removeAttr('style').appendTo('#long-wrap');
				$('#long-wrap a:eq(0)').css('right', '960px');

				});	
		}

		function nextSlide(e){
			e.preventDefault();

			slide();
			
			setTimeout(function(){
				$('.next').one('click', nextSlide);
			}, speed);
		}

		function prevSlide(e){
			e.preventDefault();

			var first = $('#long-wrap a:eq(0)');
			var last = $('#long-wrap a:last');

			last.css('left', '0').animate({

				left: '+960px'

			}, speed);

			first.animate({

				right: '-=960px'

			}, speed, function(){
				
				last.removeAttr('style').prependTo('#long-wrap');
				$('#long-wrap a:eq(0)').css('right', '960px');
				$('#long-wrap a:eq(0)').next().removeAttr('style');

				$('.prev').one('click', prevSlide);

				});

		}
		//Slider Auto Play
		var slider = setInterval(function() {

			slide();
			
		},interval);

		wrap.on('mouseenter', function() {

				clearInterval(slider);

				$('.next, .prev').show();

		});

		wrap.on('mouseleave', function() {

			slider = setInterval(function() {

				slide();
			
			},interval);

			$('.next, .prev').hide();

		});

		// Hide controls
		controls.hide();

		//initial placement offirst slide
		first.css('right', '960px');

		//Next button
		next.one('click', nextSlide);
			
		//Previous button
		prev.one('click', prevSlide);

}// close doobie slider