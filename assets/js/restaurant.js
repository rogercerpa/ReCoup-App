var APIkey = 'aefad060561a909d5ec1befb1d62a02b';
var query = '';
var recipeName = "";

// Copied from recipe-detail.js

var params = window.location.search;

var urlParamsObj = getUrlParams(params);

//assuming our href's in index.html are created with...
// "/food-detail.html?food=" + selectedFood
console.log(urlParamsObj["recipeName"]);

if (urlParamsObj["recipeName"]&& urlParamsObj["recipeName"] !== "") {
    recipeName = urlParamsObj["recipeName"];
}else{
    recipeName = "pizza";
}

console.log(recipeName);

var queryURL =
	'https://developers.zomato.com/api/v2.1/search?query=' +
	recipeName +
	'&apikey=' +
	APIkey;

$.ajax({
	url    : queryURL,
	method : 'GET'
}).then(function(recipe) {
    for (let i = 0; i < 10; i++) {
    
        var card = $("<div>");
        card.addClass("card");
    
        var cardContent = $("<div>");
        cardContent.addClass("card-content");
        card.append(cardContent);
        
        var content = $("<div>");
        content.addClass("content");
        cardContent.append(content);
    
    
        // var card = $("<div>").addClass("card");
        // var restaurantName = $("<div>").addClass("card-content");
        // var divWithinRestaurantName = $("<div>");
        // var divWithinRestaurantAddress = $("<div>");
        // var divWithinRestaurantPhoneNumber = $("<div>");
        // restaurantName.append("blahahaha");
        // cardContent.append(card);
        // cardContent.addClass("content");
        content.append("Name: " + restaurantInfo.restaurants[i].restaurant.name + "<br>");
        content.append("Address: " + restaurantInfo.restaurants[i].restaurant.location.address + "<br>");
        content.append("Phone Number: " + restaurantInfo.restaurants[i].restaurant.phone_numbers);
        // restaurantName.append(restaurantInfo.restaurants[i].restaurant.name);
        $(".cardroot").append(card);

}




    // console.log(divWithinRestaurantName);
    
    // $("#nameAddressPhone").append("Address " + restaurantInfo.restaurants[i].restaurant.location.address);

    // $("#nameAddressPhone").append("Phone Number " +restaurantInfo.restaurants[i].restaurant.phone_numbers);
    
    // name.append(restaurantInfo.restaurants[i].name);


})

function getUrlParams(search) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&')
    const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })
    return params
}