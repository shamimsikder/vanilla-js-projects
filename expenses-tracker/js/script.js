// Add Budget

document.getElementById('add-budget-btn').addEventListener('click', function(){

    const budget = getInputFieldValue('budget-input-field')

    setTotal('total-budget',budget)

})

// Add Expenses

document.getElementById('add-expenses-btn').addEventListener('click', function(){

    const expensesName = getInputTitle('expenses-name-input-field')

    const expenses = getInputFieldValue('expenses-input-field')

    setTotal('total-expenses',expenses)

})