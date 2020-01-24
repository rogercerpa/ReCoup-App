
var params = window.location.search;

var urlParamsObj = getUrlParams(params);

//assuming our href's in index.html are created with...
// "/food-detail.html?food=" + selectedFood

if (urlParamsObj["recipeid"]) {
    getFoodDetail(urlParamsObj["recipeid"]);
}else{
    getFoodDetail("http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_ce5a8f2f0ef46d8d83f8b13c731d3340");
}

//sample url url_to_this_page + recipeid=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_ce5a8f2f0ef46d8d83f8b13c731d3340
//https://api.edamam.com/search?app_id=1d8d6cd0&app_key=378cb75e8a79027d393bfc99650de712&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_ce5a8f2f0ef46d8d83f8b13c731d3340
function getFoodDetail (recipeid) {
     //use foodName in a url for an ajax request to edamam (GET)
     var urlQuery = "https://api.edamam.com/search?app_id=1d8d6cd0&app_key=378cb75e8a79027d393bfc99650de712&r="+encodeURIComponent(recipeid)
     $.get(urlQuery).then(function(response){
         var newDiv = $("<div>");
         //image
         newDiv.append($("<img>").attr("src", response[0].image ));

         //button to find restaurants
         var restaurantSearch = $("<button>");
         restaurantSearch.append("Search For a restaurant with this recipe title");
         restaurantSearch.click(function(){
            window.location.replace("restaurant.html?recipeName="+encodeURIComponent(response[0].label));
         });
         restaurantSearch.addClass("button is-success is-pulled-right")
         newDiv.append(restaurantSearch);


         //recipe title
         newDiv.append($("<div>").append(response[0].label).addClass("title is-1 has-text-centered has-tomato-color"));

         var caloriesEl = $("<div>");
         caloriesEl.append("calories: " +Math.floor( response[0].calories));
         caloriesEl.addClass("has-tomato-color");
         newDiv.append(caloriesEl);

         //don't show a cooktime if it doesn't exist!
         if( response[0].totalTime!==0){
            var prepTime = $("<div>");
            prepTime.append("CookTime: "+ response[0].totalTime)
            prepTime.addClass("has-tomato-color");
            newDiv.append(prepTime);
         }


         healthLabelsSpan=  $("<span>");
         //make small?
        //example tag :<span class="tag is-danger">Super danger</span>
        var healthLabels = response[0].healthLabels;
         healthLabels.forEach((label) => {
            healthLabelsSpan.append("<span class=\"tag is-danger\">"+label+"</span>");
         })

         newDiv.append(healthLabelsSpan);

        //Ingredient List
        newDiv.append($("<div>").append("Ingredient List: ").addClass("title is-3 has-tomato-color"));
         



         ingredientLines = response[0].ingredientLines;
         var ingredientLinesEL = $("<div>").addClass("list");
         ingredientLines.forEach((line)=>{
            var ingredientItem = $("<div>").addClass("list-item");
            ingredientItem.append(line);
            ingredientLinesEL.append(ingredientItem);
         });
         newDiv.append(ingredientLinesEL);



         var originalArticle = $("<div>");
         var originalArticleLink = $("<a>").attr("href", response[0].url);
         originalArticleLink.append( response[0].url);
         originalArticle.append("Original Article: ").append(originalArticleLink);
         originalArticle.addClass("has-tomato-color")
         newDiv.append(originalArticle);

         $("#recipe-id").append(newDiv);
     })

}

function getUrlParams(search) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&')
    const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })
    return params
}