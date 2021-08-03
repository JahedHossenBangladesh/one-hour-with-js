const array = [null, undefined, ""];

console.log(countTruthy(array));



function countTruthy(arr){
    let count = 0;
    for(let value of arr){
        if(value) count++;
        return count;
    }
   
}