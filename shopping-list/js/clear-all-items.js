function clearAllItems(){

    const listItems = document.getElementById('list-item')

    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }

}