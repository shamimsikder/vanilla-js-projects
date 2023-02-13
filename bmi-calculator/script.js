function getInputFieldValue(input){

    const inputFieldData = document.getElementById(input)
    const inputFieldDataString = inputFieldData.value;
    const inputData = parseFloat(inputFieldDataString);

    inputFieldData.value ='';

    return inputData;

}

function bmiCategories(input){

    let categories;

    if(input < 18.5){
        categories = "Underweight"
    }
    else if(input >= 18.5 && input <= 24.9){
        categories = "Normal Weight"
    }
    else if(input >= 25 && input <= 29.9){
        categories = "Overweight"
    }
    else{
        categories = "Obese"
    }

    return categories;

}

function setResult(input, elementId){

    const result = document.getElementById(elementId)

    result.innerText = input;

}

function setCategoriesCol(input, elementId){

    const result = document.getElementById(elementId)
    
    if(input === "Underweight"){
        result.style.color = "red";
    }
    else if (input === "Normal Weight"){
        result.style.color = "green";
    }
    else if(input === "Overweight"){
        result.style.color = "yellow";
    }
    else{
        result.style.color = "red";
    }

}

document.getElementById('cal-btn').addEventListener('click', function(){

    const weight = getInputFieldValue('weight-input-field')
    const height = getInputFieldValue('height-input-field')

    const bmi = ((weight/height)/height).toFixed(2);

    const categories = bmiCategories(bmi);

    setResult(bmi, 'result');
    setResult(categories, 'categories');
    setCategoriesCol(categories, 'categories');

})