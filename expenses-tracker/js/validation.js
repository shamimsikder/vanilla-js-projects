// Data Validation
function validation(input){

    if(input === '' || isNaN(input) || input <= 0){
        return false;
    }

    return true;

}