
var params = window.location.search;

var urlParamsObj = getUrlParams(params);

//assuming our href's in index.html are created with...
// "/food-detail.html?food=" + selectedFood

var recipeName;
if (urlParamsObj["recipeid"]) {
    recipeName = getFoodDetail(urlParamsObj["recipeid"]);
    console.log(recipeName);
} 



//  recipe image: response[0].image 
// title: response[0].label
// button for restaurant search
//  response[0].healthLabels[]
//  response[0].ingredientLines[]
//  response[0].calories
//  preptime response[0].totalTime
// url to original article: response[0].url

//sample url url_to_this_page + recipeid=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_ce5a8f2f0ef46d8d83f8b13c731d3340

// make a button that makes a reference to a restaurants page with lattitude, longitude, and the label
function getFoodDetail (recipeid) {
     //use foodName in a url for an ajax request to edamam (GET)
     var urlQuery = "https://api.edamam.com/search?app_id=1d8d6cd0&app_key=378cb75e8a79027d393bfc99650de712&r="+encodeURIComponent(recipeid)
     $.get(urlQuery).then(function(response){
         var newDiv = $("<div>");
         //image
         newDiv.append($("<img>").attr("src", response[0].image ));
         //recipe title
         newDiv.append($("<h3>").append(response[0].label));
         healthLabelsSpan=  $("<span>");
         //make small?
        var healthLabels = response[0].healthLabels;
         healthLabels.forEach((label) => {
            healthLabelsSpan.append(" "+label);
         })
         newDiv.append(healthLabelsSpan);
         ingredientLines = response[0].ingredientLines;
         var ingredientLinesEL = $("<ul>")
         ingredientLines.forEach((line)=>{
            var ingredientItem = $("<li>").append(line);
            ingredientLinesEL.append(ingredientItem);
         });
         newDiv.append(ingredientLinesEL);

         var caloriesEl = $("<div>");
         caloriesEl.append("calories: " + response[0].calories)
         newDiv.append(caloriesEl);

         var prepTime = $("<div>");
         prepTime.append("CookTime: "+ response[0].totalTime)
         newDiv.append(prepTime);

         var originalArticle = $("<div>");
         var originalArticleLink = $("<a>").attr("href", response[0].url);
         originalArticleLink.append( response[0].url);
         originalArticle.append("Original Article: ").append(originalArticleLink);
         newDiv.append(originalArticle);

         $("#recipe-id").append(newDiv);
         console.log(response);
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