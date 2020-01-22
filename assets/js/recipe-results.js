var APIkey = 'f03e5bd493e26d665956a30800c9d16b';
var APIid = '7b29bd33';
var recipeName = 'pizza';
//localStorage.getItem(recipeName);
var queryURL =
	'https://api.edamam.com/search?q=' +
	recipeName +
	'&app_id=' +
	APIid +
	'&app_key=' +
	APIkey;

$.ajax({
	url    : queryURL,
	method : 'GET'
}).then(function(recipe) {
	console.log(recipe);
	console.log(queryURL);

	var ingredients1 = recipe.hits[0].recipe.ingredientLines;
	var ingredients2 = recipe.hits[1].recipe.ingredientLines;
	var ingredients3 = recipe.hits[2].recipe.ingredientLines;
	var ingredients4 = recipe.hits[3].recipe.ingredientLines;
	var ingredients5 = recipe.hits[4].recipe.ingredientLines;

	//transfer content to HTML
	$('#details1').text('ingredients: ' + ingredients1);
	$('#details2').text('ingredients: ' + ingredients2);
	$('#details3').text('ingredients: ' + ingredients3);
	$('#details4').text('ingredients: ' + ingredients4);
	$('#details5').text('ingredients: ' + ingredients5);
});
