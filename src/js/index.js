import {$} from './common';

// $(window).scroll(function(){
// 	if($(this).scrollTop()>300){
// 		$('.js-move-up').addClass('visible');
// 	}else{
// 		$('.js-move-up').removeClass('visible');
// 	}
// });
// $('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});

// gallery slider
if($('.js-gal-slider').length){
	$('.js-gal-slider').slick({
		infinite: true,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}

// partners slider
if($('.js-partners-list').length){
	$('.js-partners-list').slick({
		infinite: true,
		slidesToShow: 4,
  		slidesToScroll: 4,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}
