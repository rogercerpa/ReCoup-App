
var params = window.location.search;

var urlParamsObj = getUrlParams(params);

//assuming our href's in index.html are created with...
// "/food-detail.html?food=" + selectedFood

if (urlParamsObj["food"]) {
    getFoodDetail(urlParamsObj["food"]);
} 



function getFoodDetail (foodName) {
     //use foodName in a url for an ajax request to edamam (GET)
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