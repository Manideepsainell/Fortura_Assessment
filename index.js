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
