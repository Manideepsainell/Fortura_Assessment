const readline=require("readline");
const question = 3; // change this to run specific question
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