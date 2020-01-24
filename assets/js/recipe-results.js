var params = window.location.search;

var urlParamsObj = getUrlParams(params);

//assuming our href's in index.html are created with...
// "/food-detail.html?food=" + selectedFood
// var recipeName = $('#searchtext').val().trim();

if (urlParamsObj['recipeName']) {
	var recipeName = urlParamsObj['recipeName'];
}

console.log(recipeName);

var APIkey = 'f03e5bd493e26d665956a30800c9d16b';
var APIid = '7b29bd33';
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
	//ingredients results
	var ingredients1 = recipe.hits[0].recipe.ingredientLines;
	var ingredients2 = recipe.hits[1].recipe.ingredientLines;
	var ingredients3 = recipe.hits[2].recipe.ingredientLines;
	var ingredients4 = recipe.hits[3].recipe.ingredientLines;
	var ingredients5 = recipe.hits[4].recipe.ingredientLines;
	//calories for those results
	var calories1 = recipe.hits[0].recipe.calories.toFixed(0);
	var calories2 = recipe.hits[1].recipe.calories.toFixed(0);
	var calories3 = recipe.hits[2].recipe.calories.toFixed(0);
	var calories4 = recipe.hits[3].recipe.calories.toFixed(0);
	var calories5 = recipe.hits[4].recipe.calories.toFixed(0);
	//cooking time for those results
	var cooktime1 = recipe.hits[0].recipe.totalTime;
	var cooktime2 = recipe.hits[0].recipe.totalTime;
	var cooktime3 = recipe.hits[0].recipe.totalTime;
	var cooktime4 = recipe.hits[0].recipe.totalTime;
	var cooktime5 = recipe.hits[0].recipe.totalTime;
	// recipe image
	var image1 = recipe.hits[0].recipe.image;
	var image2 = recipe.hits[1].recipe.image;
	var image3 = recipe.hits[2].recipe.image;
	var image4 = recipe.hits[3].recipe.image;
	var image5 = recipe.hits[4].recipe.image;
	//recipe name
	var name1 = recipe.hits[0].recipe.label;
	var name2 = recipe.hits[1].recipe.label;
	var name3 = recipe.hits[2].recipe.label;
	var name4 = recipe.hits[3].recipe.label;
	var name5 = recipe.hits[4].recipe.label;
	//transfer content to HTML
	$('#results1').text('ingredients: ' + ingredients1);
	$('#results2').text('ingredients: ' + ingredients2);
	$('#results3').text('ingredients: ' + ingredients3);
	$('#results4').text('ingredients: ' + ingredients4);
	$('#results5').text('ingredients: ' + ingredients5);

	//calories info
	$('.recipe1-calories').text('Total Calories = ' + calories1);
	$('.recipe2-calories').text('Total Calories = ' + calories2);
	$('.recipe3-calories').text('Total Calories = ' + calories3);
	$('.recipe4-calories').text('Total Calories = ' + calories4);
	$('.recipe5-calories').text('Total Calories = ' + calories5);
	//cooking time
	$('.recipe1-cooktime').text('Cooking Time = ' + cooktime1);
	$('.recipe2-cooktime').text('Cooking Time = ' + cooktime2);
	$('.recipe3-cooktime').text('Cooking Time = ' + cooktime3);
	$('.recipe4-cooktime').text('Cooking Time = ' + cooktime4);
	$('.recipe5-cooktime').text('Cooking Time = ' + cooktime5);
	// recipe image
	$('#recipe1').attr('src', image1);
	$('#recipe2').attr('src', image2);
	$('#recipe3').attr('src', image3);
	$('#recipe4').attr('src', image4);
	$('#recipe5').attr('src', image5);
	//recipe name
	$('.recipe-name1').text(name1);
	$('.recipe-name2').text(name2);
	$('.recipe-name3').text(name3);
	$('.recipe-name4').text(name4);
	$('.recipe-name5').text(name5);
});

function getUrlParams(search) {
	const hashes = search.slice(search.indexOf('?') + 1).split('&');
	const params = {};
	hashes.map((hash) => {
		const [ key, val ] = hash.split('=');
		params[key] = decodeURIComponent(val);
	});
	return params;
}
