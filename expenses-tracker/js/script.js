// Add Budget

document.getElementById('add-budget-btn').addEventListener('click', function(){

    const budget = getInputFieldValue('budget-input-field')

    addAmount('total-budget',budget)
    addAmount('total-balance',budget)

})

// Add Expenses

document.getElementById('add-expense-btn').addEventListener('click', function(){

    const expenseName = getInputTitle('expense-name-input-field')

    const expense = getInputFieldValue('expense-input-field')

    addAmount('total-expense',expense)
    addExpense('total-balance',expense)
    addExpenseList(expenseName, expense)

})