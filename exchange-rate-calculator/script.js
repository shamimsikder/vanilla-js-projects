const currency_one = document.getElementById('currency-one')
const amount_one = document.getElementById('amount-one')
const currency_two = document.getElementById('currency-two')
const amount_two = document.getElementById('amount-two')

const rate = document.getElementById('rate')
const swap = document.getElementById('swap')



function calculate() {

    const URL = `https://api.exchangerate-api.com/v4/latest/${currency_one.value}`
    
    fetch(URL)
        .then(res => res.json())
        .then(data => {

            const rates = data.rates[currency_two.value]

            rate.innerText = `1 ${currency_one.value} = ${rates} ${currency_two.value}`
            amount_two.value = (amount_one.value * rates).toFixed(2)


        })
    
}

currency_one.addEventListener('change', calculate)
amount_one.addEventListener('input', calculate)
currency_two.addEventListener('change', calculate)
amount_two.addEventListener('input', calculate)

swap.addEventListener('click', () => {

    const temp = currency_one.value
    currency_one.value = currency_two.value
    currency_two.value = temp

    calculate()

})

calculate()