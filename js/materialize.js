// Initialization Materialize JS.


// Main - Carousel
document.addEventListener('DOMContentLoaded', function() {
	let slider = document.querySelectorAll('.carousel');
	M.Carousel.init(slider, {
		fullWidth: true,
		indicators: true,
	});
});