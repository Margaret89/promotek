import {$, Inputmask} from './common';

var wibdowWidth = $(window).width();

// move-up
$(window).on('scroll', function(){
	if($(this).scrollTop()>300){
		$('.js-move-up').addClass('visible');
	}else{
		$('.js-move-up').removeClass('visible');
	}
});
$('.js-move-up').on('click', function(){$('body,html').animate({scrollTop:0},800);return false;});

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
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
}

// Phone mask
Inputmask('+7 (999) 999-9999').mask('.js-phone');

// show/hide mobile menu
if($('.js-btn-menu').length){
	$('.js-btn-menu').on('click', function(){
		closeMobContacts();
		$(this).toggleClass('active');
		$('.js-body').toggleClass('no-scroll');
		$('.js-nav').slideToggle(400);
	});
}

// show/hide mobile submenu
if($('.js-mob-arr').length){
	$('.js-mob-arr').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.js-mob-link').siblings('.js-mob-sub').slideToggle(300);
	});
}

// show/hide mobile contacts
if($('.js-open-call').length){
	$('.js-open-call').on('click', function(){
		$('.js-btn-menu').removeClass('active');
		$('.js-nav').slideUp(400);
		$(this).addClass('hide');
		$('.js-close-call').addClass('hide');
		$('.js-close-call').find('.ic-hamburger').addClass('active');
		$('.js-header-mob-contact').slideDown(300);
	});

	$('.js-close-call').on('click', function(){
		closeMobContacts();
	});
}

function closeMobContacts(){
	$('.js-close-call').removeClass('hide');
	$('.js-open-call').removeClass('hide');
	$('.js-close-call').find('.ic-hamburger').removeClass('active');
	$('.js-header-mob-contact').slideUp(300);
}

$(document).on('click', function(event) {
	if(wibdowWidth < 768){
		if ($(event.target).closest('.js-nav').length) return;
		if ($(event.target).closest('.js-btn-menu').length) return;
		if ($(event.target).closest('.js-close-call').length) return;
		if ($(event.target).closest('.js-open-call').length) return;
		if ($(event.target).closest('.js-header-mob-contact').length) return;
		$('.js-body').removeClass('no-scroll');
		$('.js-btn-menu').removeClass('active');
		$('.js-nav').slideUp(400);
		closeMobContacts();
		event.stopPropagation();
	}
});

// project slider
if($('.js-project-slider').length){
	$('.js-project-slider').slick({
		infinite: true,
		slidesToShow: 3,
  		slidesToScroll: 2,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="16" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="16" height="24"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		// responsive: [
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			slidesToShow: 3,
		// 			slidesToScroll: 3,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 		}
		// 	},
		// ]
	});
}