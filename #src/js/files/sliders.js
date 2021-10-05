//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function sliders_bild_callback(params) { }

if (document.querySelector('.slider-hero__body')) {
	let heroSlider = new Swiper('.slider-hero__body', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
		watchOverflow: true,
		parallax: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 1500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.slider-hero .slider-arrow_next',
			prevEl: '.slider-hero .slider-arrow_prev',
		},
		pagination: {
			el: '.slider-hero__bullets',
			bulletClass: 'slider-hero__bullet bullet-hero',
			bulletActiveClass: 'bullet-hero_active',
			clickable: true,
			renderBullet: function (index, className) {
				var dataArray = [];
				var dataElements = document.querySelectorAll('[data-name]');
				for (let index = 0; index < dataElements.length; index++) {
					var dataElement = dataElements[index];
					dataArray[index] = dataElement.dataset.name;
				}
				return '<div class="' + className + '">' +
					'<span class="bullet-hero__number">0' + (index + 1) + '</span>' +
					'<span class="bullet-hero__value">' + dataArray[(index + 1)] + '</span>' +
					'</div>';
			},
		},
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
	});
}

if (document.querySelector('.slider-collage__body')) {
	let collageSlider = new Swiper('.slider-collage__body', {
		slidesPerGroup: 1,
		spaceBetween: 0,
		watchOverflow: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: '.slider-collage .slider-arrow_next',
			prevEl: '.slider-collage .slider-arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 4,
			},
		},
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
	});
}

if (document.querySelector('.slider-travel__body')) {
	let travelSlider = new Swiper('.slider-travel__body', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 130,
		watchOverflow: true,
		parallax: true,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: '.slider-travel .slider-arrow_next',
			prevEl: '.slider-travel .slider-arrow_prev',
		},
	});
}

if (document.querySelector('.slider-sleep__body')) {
	let sleepSlider = new Swiper('.slider-sleep__body', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 130,
		watchOverflow: true,
		parallax: true,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 1500,
		navigation: {
			nextEl: '.slider-sleep .slider-arrow_next',
			prevEl: '.slider-sleep .slider-arrow_prev',
		},
	});
}

if (document.querySelector('.slider-shop__body')) {
	let shopSlider = new Swiper('.slider-shop__body', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 130,
		watchOverflow: true,
		parallax: true,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 1500,
		navigation: {
			nextEl: '.slider-shop .slider-arrow_next',
			prevEl: '.slider-shop .slider-arrow_prev',
		},
	});
}


