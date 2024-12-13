window.addEventListener('DOMContentLoaded', function() {
	const accordionEl = document.querySelectorAll('.accordion-title');

	accordionEl.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			const accordion = e.currentTarget.closest('.accordion-item');

			document.querySelectorAll('.accordion-item').forEach((item) => {
				if (item !== accordion) {
					item.classList.remove('open');
				}
			});

			accordion.classList.toggle('open');
		});
	});
});
