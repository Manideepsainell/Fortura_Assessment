const readline=require("readline");

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
passwordAttempts("admin124");