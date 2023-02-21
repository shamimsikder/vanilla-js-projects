function setTitleName(input){

    const titleName = document.getElementById('expenses-name');

    titleName.innerText = input;

}

function addAmount(element, input){

    const previousAmount = document.getElementById(element)
    const previousAmountString = previousAmount.innerText
    const previousAmountValue = parseInt(previousAmountString)

    const totalAmount = previousAmountValue + input

    previousAmount.innerText = totalAmount

}

function addExpenses(element, input){

    const previousAmount = document.getElementById(element)
    const previousAmountString = previousAmount.innerText
    const previousAmountValue = parseInt(previousAmountString)

    const totalAmount = previousAmountValue - input

    previousAmount.innerText = totalAmount

}