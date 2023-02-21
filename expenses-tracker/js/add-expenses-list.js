function addExpensesList(expensesName, expenses){

    const itemContainer = document.getElementById('expenses-list');
   const item = document.createElement('div');

    item.classList.add('bg-teal-50', 'p-4', 'rounded-md', 'flex', 'flex-col', 'gap-2', 'mb-5')

    item.innerHTML = `
    
    

        <h1 class="font-semibold text-teal-600 text-lg ml-3"></h1>

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

}