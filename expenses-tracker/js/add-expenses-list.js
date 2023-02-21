// Expenses List Creating Function
function addExpensesList(expensesName, expenses){

    const itemContainer = document.getElementById('expenses-list');
    const item = document.createElement('div');

    item.classList.add('bg-teal-50', 'p-4', 'rounded-md', 'flex', 'flex-col', 'gap-2', 'mb-5')

    // Date: dd/mm/year
    const date = new Date();
    const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    // Expense List
    item.innerHTML = `
    
        <h1 class="font-semibold text-teal-600 text-lg ml-3">${dateString}</h1>

        <div class="border-teal-600 border-l-4 flex justify-between items-center">

            <h1 id="expenses-name" class="font-semibold text-teal-600 ml-2">${expensesName}</h1>
            <h1 class="font-semibold text-teal-600">$<span id="expenses">${expenses}</span></h1>
                            
            <div class="flex gap-2 items-center">

                <button id="edit-btn">
                    <i class="fa-solid fa-pen-to-square text-teal-600"></i>
                </button>

                <button id="delete-btn">
                    <i class="fa-solid fa-trash text-teal-600"></i>
               </button>

            </div>

        </div>
    
    `;

    itemContainer.appendChild(item);
    

    // Edit Button's Functionality
    item.querySelector('#edit-btn').addEventListener('click', function() {
    
        const expensesNameInput = document.getElementById('expenses-name-input-field');
        const expensesInput = document.getElementById('expenses-input-field');
    
        expensesNameInput.value = expensesName;
        expensesInput.value = expenses;
        
        addAmount('total-balance',expenses)
        addExpenses('total-expenses',expenses)
        
        item.remove();
    
    });

    // Delete Button's Functionality
    item.querySelector('#delete-btn').addEventListener('click', function(){

        item.remove()

        addAmount('total-balance',expenses)
        addExpenses('total-expenses',expenses)

    })


}

