const movie = {
    title: 'a',
    releaseYear:2018,
    rating:4.5,
    director: 'b'
}
// console.log(movie.title);
// console.log(Object.keys(movie));
 showProperties(movie);

function showProperties(obj){
    for(let key in obj){
    //    console.log(key);
        if(typeof obj[key] === "string"){
            console.log(key, obj[key]);
        }
    }

}

// find the lowest number in an array 
// this is me
function lowestNumber(arr){
    let lowest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            lowest = arr[i];
        }
    }
    return lowest;
}

// ternary operator
