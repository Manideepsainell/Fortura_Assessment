const readline = require("readline");

const question = 1; // change this (1–10)

// Q1: Even Counter
function evenCounter(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) count++;
    }
    return count;
}

// Q2: Sum of Prices
function sumPrices(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Q3: Password Attempts
function passwordAttempts(correctPassword) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let attempts = 0;

    function askPassword() {
        if (attempts === 3) {
            console.log("Access Denied");
            rl.close();
            return;
        }

        rl.question("Enter password: ", (input) => {
            if (input === correctPassword) {
                console.log("Access Granted");
                rl.close();
            } else {
                attempts++;
                console.log("Wrong password");
                askPassword();
            }
        });
    }

    askPassword();
}

// Q4: Print Pattern
function printPattern() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// Q5: Reverse Array
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

// Q6: Find Max
function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// Q7: Shopping Cart with Discount
function shoppingCart(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        if (price > 100) {
            price = price - (price * 0.10);
        }
        total += price;
    }

    return Math.round(total);
}

// Q8: Average Marks
function averageMarks(arr) {
    if (arr.length === 0) return 0;
    return sumPrices(arr) / arr.length;
}

// Q9: Frequency Counter
function frequencyCounter(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

// Q10: Order Billing System
function orderBilling(menu, orders) {
    let total = 0;

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        if (!menu[order.item]) continue;

        let itemPrice = menu[order.item].price;
        total += itemPrice * order.qty;
    }

    let gst = total * 0.18;
    let finalAmount = total + gst;

    return {
        total,
        gst,
        finalAmount
    };
}

// 🔴 CONTROL BLOCK
if (question === 1) {
    console.log(evenCounter([1, 2, 3, 4, 6]));
}
else if (question === 2) {
    console.log(sumPrices([100, 200, 50]));
}
else if (question === 3) {
    passwordAttempts("admin123");
}
else if (question === 4) {
    printPattern();
}
else if (question === 5) {
    console.log(reverseArray([1, 2, 3, 4]));
}
else if (question === 6) {
    console.log(findMax([10, 5, 20, 8]));
}
else if (question === 7) {
    console.log(shoppingCart([50, 120, 200]));
}
else if (question === 8) {
    console.log(averageMarks([80, 90, 100]));
}
else if (question === 9) {
    console.log(frequencyCounter([1, 2, 2, 3, 1, 1]));
}
else if (question === 10) {
    const menu = {
        1: { name: "Item1", price: 100 },
        2: { name: "Item2", price: 200 },
        3: { name: "Item3", price: 50 }
    };

    const orders = [
        { item: 1, qty: 2 },
        { item: 2, qty: 1 }
    ];

    console.log(orderBilling(menu, orders));
}