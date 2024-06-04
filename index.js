#! /usr/bin/env node
import inquirer from "inquirer";
//initial balance and pin Number
let myBalance = 25000;
let myPin = 1234;
//showing initial balance
console.log("Your current balance is: " + myBalance);
//prompt to get pin number from user
const pinAnswer = await inquirer.prompt([
    {
        message: "Enter your PIN number:",
        type: "number",
        name: "pinNumber",
    },
]);
//condition to check if pin number is valid or not
if (pinAnswer.pinNumber === myPin) {
    console.log("Correct pin code!");
    //if pin is valid show options of atmtasks in a list form, user can select any task.
    let options = await inquirer.prompt([
        {
            message: "What do you want to do:",
            type: "list",
            name: "atmTasks",
            choices: ["Withdraw", "Check Balance", "Online Payments", "Fast Cash"],
        },
    ]);
    //show selected task on terminal (optional)
    console.log(options.atmTasks);
    //if user selected "Withdraw" options
    if (options.atmTasks === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                message: "Enter amount you want to withdraw:",
                type: "number",
                name: "amount",
            },
        ]);
        //if withdrawn amount is less than or equal to Your balance
        if (amountAns.amount <= myBalance) {
            console.log("You have withdrawn: " + amountAns.amount);
            let currentBalance = (myBalance -= amountAns.amount);
            console.log("Your Remaining balance is:" + currentBalance);
        }
        //if witdrawn amount is not equal to your balance
        else {
            console.log("You have insufficient balance");
        }
    }
    //if user selected "Check Balance" option
    else if (options.atmTasks === "Check Balance") {
        console.log(`You Account Balance is: ${myBalance}`);
    }
    //if user selected "Online Payments" option
    else if (options.atmTasks === "Online Payments") {
        let onlinePayment = await inquirer.prompt([
            {
                message: "Enter amount you want to transfer:",
                type: "number",
                name: "onlinePay",
            },
        ]);
        console.log("You have transfered: " + onlinePayment.onlinePay);
        let currentBalance = (myBalance -= onlinePayment.onlinePay);
        console.log(`Your Remaining balance is: ${currentBalance}`);
    }
    //if user selected "Fash Cash" option
    else if (options.atmTasks === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                message: "Select an amount to Withdraw from given options:",
                type: "list",
                name: "cashOptions",
                choices: ["3000", "5000", "7000", "10000", "20000"],
            },
        ]);
        console.log("You have transfered: " + fastCash.cashOptions);
        let currentBalance = (myBalance -= fastCash.cashOptions);
        console.log(`Your Remaining balance is: ${currentBalance}`);
    }
    //if pin number is invalid , show this message
}
else {
    console.log("Invalid pin number");
}
