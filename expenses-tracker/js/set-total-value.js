function setTotal(element, input){

    const totalBalance = document.getElementById('total-balance')

    const previousBalanceString = totalBalance.innerText
    const previousBalance = parseInt(previousBalanceString)

    const setValue = document.getElementById(element)

    const newBalance = previousBalance + parseFloat(setValue.innerText)

    setValue.innerText = input
    totalBalance.innerText = newBalance

}