// Get Expenses & Budget Amount
function getInputFieldValue(element){

    const input= document.getElementById(element)

    const inputString = input.value

    const value = parseFloat(inputString).toFixed(2)

    input.value = ''

    return parseFloat(value)

}

// Get Expenses Title
function getInputTitle(element){

    const input= document.getElementById(element)

    const inputString = input.value

    input.value = ''

    return inputString

}