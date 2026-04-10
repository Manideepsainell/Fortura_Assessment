const readline=require("readline");
const question = 9; // change this to run specific question
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

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


//Q2.Sum of Prices
function sumPrices(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}

//Q3.Password Attempts
function passwordAttempts(correctPassword){
    let attempts=0;

    function askPassword(){
        if(attempts === 3){
            console.log("Access Denied");
            rl.close();
            return;
        }
        rl.question("Enter password: ",(input)=>{
            if(input === correctPassword){
                console.log("Access Granted");
                rl.close();
            }
            else{
                attempts++;
                console.log("Wrong password");
                askPassword();
            }
        });
    }
    askPassword();
}

//Q4.Print Pattern
function printPattern(){
    for(let i=1;i<=5;i++){
        let row="";

        for(let j=1;j<=i;j++){
            row+="*";
        }
        console.log(row);
    }
}

//Q5.Reverse Array
function reverseArray(arr){
    let result=[];

    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i]);
    }
    return result;
}

//Q6.Find Max
function findMax(arr){
    if(arr.length===0) return null;

    let max=arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;

}
//Q7.Shopping Cart with Discount
function shoppingCart(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];

        if (price > 100) {
            price = price - (price * 0.10); // 10% discount
        }

        total += price;
    }

    return Math.round(total);
}
//Q8.Student Marks Average
function averageMarks(arr) {
    if (arr.length === 0) return 0;
    return sumPrices(arr) / arr.length;
}
//Q9.Frequency Counter
function frequencyCounter(arr) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return freq;
}

if (question === 1) {
    console.log(evenCounter([1,2,3,4,6]));
}
else if (question === 2) {
    console.log(sumPrices([100,200,50]));
}
else if (question === 3) {
    passwordAttempts("admin123");
}
else if (question === 4) {
    printPattern();
}
else if(question === 5){
    console.log(reverseArray([1, 2, 3, 4]));
}
else if(question === 6){
    console.log(findMax([10,5,20,8]));
}
else if(question=== 7){
    console.log(shoppingCart([50, 120, 200])); 
}
else if (question === 8) {
    console.log(averageMarks([80, 90, 100]));
}
else if(question === 9){
    console.log(frequencyCounter([1, 2, 2, 3, 1, 1]));
}
