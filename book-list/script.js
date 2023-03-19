document.getElementById('btn').addEventListener('click', function(){

    const name = document.getElementById('name')
    const author = document.getElementById('author')
    const publisher = document.getElementById('publisher')
    const isbn = document.getElementById('isbn')
    const price = document.getElementById('price')

    const tableData = document.getElementById('tdata')
    const tr = document.createElement('tr')

   if(validation(name.value, author.value, publisher.value, isbn.value, price.value)){

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
        $${price.value}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        <i onclick="removeData(this)" class="fa-solid fa-trash cursor-pointer"></i>
        </td>

        `

        tableData.appendChild(tr)

        saveToLocalStorage(name.value, author.value, publisher.value, isbn.value, price.value)

   }

   else{

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please, complete all the fields',
      })

   }

   name.value = ''
   author.value = ''
   publisher.value = ''
   isbn.value = ''
   price.value = ''

})

function validation(name, author, publisher, isbn, price){

    if(name === '' || author === '' || publisher === '' || isbn === '' || price === ''){

        return false

    }

    return true

}

const removeData = (element) => {

    const remove = element.parentNode.parentNode
    remove.parentNode.removeChild(remove)

}

const saveToLocalStorage = (name, author, publisher, isbn, price) => {

    const previousData = JSON.parse(localStorage.getItem('books'))

    let books = []
    let data = {name, author, publisher, isbn, price}

    if(previousData){

        const isThisBookListed = previousData.find(bk => bk.isbn === isbn)

        if(isThisBookListed){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This book already listed',
            })

        }

        else{

            books.push(...previousData, data)
            localStorage.setItem("books", JSON.stringify(books))

        }

    }

    else{

        books.push(data)
        localStorage.setItem("books", JSON.stringify(books))

    }

}

const showPreviousData = () => {

    const previousData = JSON.parse(localStorage.getItem('books'))

    console.log(previousData)

    


    previousData.forEach(data => {

        const tableData = document.getElementById('tdata')
    const tr = document.createElement('tr')

        tr.innerHTML = `
        
        <td class="px-3 py-1 text-center  text-orange-500">
        ${data.name}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        ${data.author}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        ${data.publisher}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        ${data.isbn}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        $${data.price}
        </td>
        <td class="px-3 py-1 text-center  text-orange-500">
        <i onclick="removeData(this)" class="fa-solid fa-trash cursor-pointer"></i>
        </td>

        `

        tableData.appendChild(tr)

    })

}

showPreviousData()
               
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    

