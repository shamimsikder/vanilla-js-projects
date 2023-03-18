document.getElementById('btn').addEventListener('click', function(){

    const name = document.getElementById('name')
    const author = document.getElementById('author')
    const publisher = document.getElementById('publisher')
    const isbn = document.getElementById('isbn')
    const price = document.getElementById('price')

    const tableData = document.getElementById('tdata')
    const tr = document.createElement('tr')

    tr.innerHTML = `
    
        <td class="px-3 py-1 text-center  text-orange-500">
        ${name.value}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        ${author.value}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        ${publisher.value}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        ${isbn.value}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        ${price.value}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        <i class="fa-solid fa-trash"></i>
        </td>
    
    `

    tableData.appendChild(tr)

})

               
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    

