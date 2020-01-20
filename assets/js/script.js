$(button).on('click', function(event) {
	event.preventDefault();

	var recipeName = $('.recipe-input').val().trim();
	localStorage.setItem(recipeName);
});
