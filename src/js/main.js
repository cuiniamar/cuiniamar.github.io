try {
    window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	
    require('bootstrap');
    require('js-loading-overlay');
} catch (e) {}

// ============================================================================
//	document.ready
//	Will fire immediately when DOM is ready
// ============================================================================
$(document).ready(function () {

	// ==========================================================================
	// AP Header (new header)
	// ==========================================================================
	(function() {

		const navTrigger = document.querySelector('.main-navbar__trigger')
		const menuNav = document.querySelector('.main-navbar__mobile-nav')
		
		// menu-nav click
		if(navTrigger) {
			navTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				e.target.classList.toggle('is-active')
				menuNav.classList.toggle('is-active')
			})
		}
	})();
	// ==========================================================================

	// ==========================================================================
	// Color Picker
	// ==========================================================================
	(function () {
		const colorTrigger = document.querySelector('.color-config__trigger')
		const colorGear = document.querySelector('.color-config__trigger-link')
		const colorOption = document.querySelector('.color-config__content')

		if(colorGear) {
			colorGear.addEventListener('click', (e) => {
				e.preventDefault()
				e.target.classList.toggle('is-active')
				colorTrigger.classList.toggle('is-active')
				colorOption.classList.toggle('is-active')
			})
		}
	})();
	// ==========================================================================

	// ==========================================================================
	// Back-to-top Button
	// ==========================================================================
	(function () {
		$('body').append('<a class="scroll-up"></a>');
		var btn = $('.scroll-up');

		$(window).scroll(function () {
			if ($(window).scrollTop() > 400) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, '300');
		});
	})();
	// ==========================================================================


	// ==========================================================================
	// Color Option
	// ==========================================================================
	(function () {
		$('.theme-color__item a').on('click', function(e) { 
			// Loading Overlay
			JsLoadingOverlay.show({
				'spinnerIcon': 'ball-fussion',
				'spinnerColor': '#eee',
  				'spinnerSize': 'small',
			});
			$('.main-navbar__list').hide();

			// Loading Delay
			setTimeout(() => {
				JsLoadingOverlay.hide();
				$('.main-navbar__list').show();
			}, 800)

			// Retreiving CSS Styles
			var $styleSheet = $(this).attr('data-style');
			var $name = $(this).attr('data-name');
			
			$('#theme-style').attr('href', $styleSheet);

			// Change is-active
			$('.theme-color__item').removeClass('is-active');
			$(this).parent().addClass('is-active');

			// Switching Images
			switch($name) {
				case 'peachy':
					$('.hero__banner').attr('src', 'dist/img/banner-peachy.png');
					$('.profession__palette').attr('src', 'dist/img/svg/palette-icon-peachy.svg');
				  break;
				case 'teal':
					$('.hero__banner').attr('src', 'dist/img/banner-teal.png');
					$('.profession__palette').attr('src', 'dist/img/svg/palette-icon-teal.svg');
				  break;
				case 'warm':
					$('.hero__banner').attr('src', 'dist/img/banner-warm.png');
					$('.profession__palette').attr('src', 'dist/img/svg/palette-icon-warm.svg');
				  break;
				case 'nature':
					$('.hero__banner').attr('src', 'dist/img/banner-nature.png');
					$('.profession__palette').attr('src', 'dist/img/svg/palette-icon-nature.svg');
				  break;
				case 'pop':
					$('.hero__banner').attr('src', 'dist/img/banner-pop.png');
					$('.profession__palette').attr('src', 'dist/img/svg/palette-icon-pop.svg');
				  break;
				default:
					$('.hero__banner').attr('src', 'dist/img/banner.png');
					$('.profession__palette').attr('src', 'dist/img/svg/palette-icon.svg');
			}
		});	
	})();
	// ==========================================================================


}); // end document.ready