window.onload = function () {
	document.addEventListener("click", documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('search-header__link')) {
			document.querySelector('.search-header').classList.toggle('_active');
		} else if (!targetElement.closest('.search-header') && document.querySelector('.search-header._active')) {
			document.querySelector('.search-header').classList.remove('_active');
		}
	}
}

