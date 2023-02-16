// Function for Text Transform
function textTransform(){

    const text = document.getElementById('input-field')
    const change = document.getElementById('text-transformation')

    text.style.textTransform = change.value.toLowerCase()

}