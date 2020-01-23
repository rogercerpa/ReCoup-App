var APIkey = 'aefad060561a909d5ec1befb1d62a02b';
var query = '';
// var queryURL =
// 	'https://developers.zomato.com/api/v2.1/search?query=' +
// 	recipeName +
// 	'&app_id=' +
// 	APIid +
// 	'&app_key=' +
// 	APIkey;

// $.ajax({
// 	url    : queryURL,
// 	method : 'GET'
// }).then(function(recipe) {}


for (let i = 0; i < 10; i++) {
    var restaurantName = $("<div>");
    var divWithinRestaurantName = $("<div>");
    var divWithinRestaurantAddress = $("<div>");
    var divWithinRestaurantPhoneNumber = $("<div>");
    // restaurantName.append("blahahaha");
    divWithinRestaurantName.append("Name: " + restaurantInfo.restaurants[i].restaurant.name);
    divWithinRestaurantAddress.append("Address: " + restaurantInfo.restaurants[i].restaurant.location.address);
    divWithinRestaurantPhoneNumber.append("Phone Number: " + restaurantInfo.restaurants[i].restaurant.phone_numbers);
    // restaurantName.append(restaurantInfo.restaurants[i].restaurant.name);
    $("#nameAddressPhone").append(divWithinRestaurantName);
    $("#nameAddressPhone").append(divWithinRestaurantAddress);
    $("#nameAddressPhone").append(divWithinRestaurantPhoneNumber);
    // console.log(divWithinRestaurantName);
    
    // $("#nameAddressPhone").append("Address " + restaurantInfo.restaurants[i].restaurant.location.address);

    // $("#nameAddressPhone").append("Phone Number " +restaurantInfo.restaurants[i].restaurant.phone_numbers);
    
    // name.append(restaurantInfo.restaurants[i].name);


}