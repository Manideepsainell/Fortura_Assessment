//Q1.Even Counter
function evenCounter(arr){
    let count=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++;
        }
    }
    return count;
}

//test
console.log(evenCounter([1,2,3,4,6])); //3

//Q2.Sum of Prices
function sumPrices(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}
//test
console.log(sumPrices([100,200,50]));//350
