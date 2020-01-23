//  create-recipe-details-page
$(button).on('click', function(event) {
	event.preventDefault();

	var recipeName = $('.recipe-input').val().trim();
	localStorage.setItem(recipeName);
});


var carouselRecipes =  [{"name": "pizza", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_c9bf37296a0126d18781c952dc45a230", "imageUrl": "https://www.edamam.com/web-img/9a8/9a87dd2cd93448b915b0199a2e2c646e.jpg"},
{"name": "chicken alfredo", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9ad9bf0871131e8ddb3ecff86ef14e7c", "imageUrl": "https://www.edamam.com/web-img/5e2/5e2e0d9be2b56d2a3e56ee7c3ab0c5e3.jpg"},
{"name": "lasagna", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_4c84b322eab7b5b744b62d350aebc043", "imageUrl": "https://www.edamam.com/web-img/ad8/ad8a585fa3e6462080b40f7a09a6597c.jpg"},
{"name": "hamburger", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_a028745a95726dbbef0df24165960b9e", "imageUrl": "https://www.edamam.com/web-img/e88/e8808d5d35b2e62a2a10414bac64613a.jpg"},
{"name": "burrito", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_3ef6eca250edb0ac1ebe687023da0729", "imageUrl": "https://www.edamam.com/web-img/389/3895160cd2221952d30ccfb1ba1c6dd2.jpg"},
{"name": "taco", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_5f3f94497e55142479e16614edcd2b29", "imageUrl": "https://www.edamam.com/web-img/3a5/3a5d46ed5c8ba51eac0cd94999fb6ea0.jpg"},
{"name": "apple pie", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_5566988117a1bac65505e87b68c9d855", "imageUrl": "https://www.edamam.com/web-img/6a5/6a5473893dcd84aca7416aaee3cccd60.png"},
{"name": "brownie", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_a65d867bbfb209df693c984e3cc6cb4b", "imageUrl": "https://www.edamam.com/web-img/61f/61f5192e341eefe369c63fc924262743.jpg"},
{"name": "smoothie", "id": "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_ce5a8f2f0ef46d8d83f8b13c731d3340", "imageUrl": "https://www.edamam.com/web-img/6d9/6d993e74dd6a486e2f268d05cb6a937e.jpg"}];

var res;
function initialImages(recipeArr){
    var carouselEl = $(".slick-carousel");
    
    console.log(recipeArr)
    for(var i =0;i< recipeArr.length;i++){


        var aTag = $("<a>");
        aTag.attr("href", "recipe-detail.html?recipeid="+ carouselRecipes[i].id);
        
        
        var newImg = $("<img>");
        newImg.attr("src", carouselRecipes[i].imageUrl);
        newImg.attr("alt","broken-image");
        newImg.addClass("carousel-image");

        aTag.append(newImg);

        carouselEl.append(aTag)

    }

}

initialImages(carouselRecipes);


// var recipesObject = [];

// class recipe {
//     constructor(name, id, imageUrl) {
//         this.name = name;
//         this.id = id;
//         this.imageUrl = imageUrl;
//     }
// }
// var index =0;
// var interval = setInterval(function(){
//     var recipeName = recipes[index];

//     var urlQuery = "https://api.edamam.com/search?app_id=1d8d6cd0&app_key=378cb75e8a79027d393bfc99650de712&q="+recipeName +"&to=2&from=1";
//     $.ajax({"method":"get", "url":urlQuery}).then(
//         function(response){
//             recipesObject.push(new recipe(response.q, encodeURIComponent(response.hits[0].recipe.uri), response.hits[0].recipe.image))
//         }
//     );

//     if(index === recipes.length ){
//         clearInterval(interval);
//     }
//     index++;
// },12000);


$('.slick-carousel').slick();
// master
