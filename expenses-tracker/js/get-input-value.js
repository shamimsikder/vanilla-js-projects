function getInputFieldValue(element){

    const input= document.getElementById(element)

    const inputString = input.value

    const value = parseFloat(inputString).toFixed(2)

    input.value = ''

    return parseFloat(value)

}