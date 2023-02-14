function addItems(){

    const inputValue = document.getElementById('input-field');
    const container = document.getElementById('list-item');

    const item = inputValue.value;

    const list = document.createElement('li');
    const p = document.createElement('p');
    const button = document.createElement('button');

    p.innerText = item;
    button.innerText = "Delete";

    list.classList.add("bg-white", "rounded-md", "px-4", "py-2", "list-none", "flex", "justify-between", "items-center", "mb-5");
    p.classList.add("text-slate-500");
    button.classList.add("bg-red-500", "px-4", "py-2", "rounded-md", "text-white");

    list.appendChild(p)
    list.append(button)

    container.appendChild(list);

    button.addEventListener('click', function(){
        container.removeChild(list)
    })

    inputValue.value = '';

}