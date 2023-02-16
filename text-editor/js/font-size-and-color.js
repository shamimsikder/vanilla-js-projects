// Function for Text Color Change
function colorChange(){

    const text = document.getElementById('input-field')
    const change = document.getElementById('color')

    text.style.color = change.value

}

// Function for Font Size Change
function fontSizeChange(){

    const text = document.getElementById('input-field')
    const change = document.getElementById('font-size-input')

    text.style.fontSize = change.value+"px"

}

