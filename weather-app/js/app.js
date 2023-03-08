const API_KEY = 'db8e45b7ea4d867aea193ac7b43d7b04';

const loadWeatherData = async(cityName) => {

    try{

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

        const res = await fetch(URL);
        const data = await res.json();

        showWeatherData(data)

    }

    catch(error){
        console.log(error.message)
    }

}

const showWeatherData = (data) => {

    console.log(data)
    const image = document.getElementById('img')
    const city = document.getElementById('city-name').innerText = data.name
    const temp = document.getElementById('temp').innerText = (data.main.temp).toFixed(1)
    const weather = document.getElementById('weather').innerText = data.weather[0].main

    if(weather === "Haze"){

        image.setAttribute("src","./images/haze.png")

    }
    if(weather === "Clouds"){

        image.setAttribute("src","./images/Clouds.png")

    }
    if(weather === "Rain"){

        image.setAttribute("src","./images/Rain.png")

    }
    if(weather === "Clear"){

        image.setAttribute("src","./images/sun.png")

    }
    if(weather === "Snow"){

        image.setAttribute("src","./images/snow.png")

    }
    

}

document.getElementById('city-btn').addEventListener('click', function(){

    const city = document.getElementById('city-field');

    loadWeatherData(city.value);
    city.value = '';

})

loadWeatherData('Dhaka')