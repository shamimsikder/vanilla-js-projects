// Add Budget

document.getElementById('add-budget-btn').addEventListener('click', function(){

    const budget = getInputFieldValue('budget-input-field')

    if(validation(budget)){
        
        addAmount('total-budget',budget)
        addAmount('total-balance',budget)
    
    }

    else{
        alert('You have to enter a valid value')
    }

})

// Add Expense

document.getElementById('add-expense-btn').addEventListener('click', function(){

    const expenseName = getInputTitle('expense-name-input-field')

    const expense = getInputFieldValue('expense-input-field')
    const balance = parseInt(document.getElementById('total-balance').innerText)

    if(validation(expense)){

        if(expense > balance){
            alert("You don't have sufficient balance")
        }

        else{
            addAmount('total-expense',expense)
            addExpense('total-balance',expense)
            addExpenseList(expenseName, expense)
        }

    }

    else{
        alert('You have to enter a valid value')
    }

})