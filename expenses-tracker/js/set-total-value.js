function setTitleName(input){

    const titleName = document.getElementById('expense-name');

    titleName.innerText = input;

}

// Set Expense, Budget & Total Balance Amount
function addAmount(element, input){

    const previousAmount = document.getElementById(element)
    const previousAmountString = previousAmount.innerText
    const previousAmountValue = parseInt(previousAmountString)

    const totalAmount = previousAmountValue + input

    previousAmount.innerText = totalAmount

}

// Decrease Expense & Total Balance
function addExpense(element, input){

    const previousAmount = document.getElementById(element)
    const previousAmountString = previousAmount.innerText
    const previousAmountValue = parseInt(previousAmountString)

    const totalAmount = previousAmountValue - input

    previousAmount.innerText = totalAmount

}