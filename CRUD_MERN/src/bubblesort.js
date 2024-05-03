function bubblesort(array) {
    for(let i=array.length; i > 0; i--){
        // for(let j=0; j<i-1; j++){
            if(array[i] > array[i+1]){
                [array[i],array[i+1]] = [array[i+1],array[i]]
           // }
        }
    }
    return array;
}
const res = bubblesort([5,3,8,2,18,56,4,15]);
console.log(res);