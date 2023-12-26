const ApiKey = "408aed4869c918b592e15e72538432c8";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weatherIcon= document.querySelector(".weather-icon")
const searchbox= document.querySelector(".search Input")
const searchbtn= document.querySelector(".search Button")
async function CheckWeather(CityName) {
    const response = await fetch(ApiUrl + CityName + `&appid=${ApiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.CityName').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.Humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.speed').innerHTML = data.wind.speed+"km/hr";
    if(data.weather[0].main =="Clouds"){
    weatherIcon.src="cloud and wind.png";
    }
    else if (data.weather[0].main =="Clear"){
        weatherIcon.src="clear.png";
    }
    else if (data.weather[0].main =="Rain"){
        weatherIcon.src="rain.png";
    }
    else if (data.weather[0].main =="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if (data.weather[0].main =="Mist"){
        weatherIcon.src="mist.png";
    }
}
searchbtn.addEventListener('click',()=>{
    CheckWeather(searchbox.value);
})
 // Display weather for a default city on page load
 document.addEventListener('DOMContentLoaded', () => {
    CheckWeather('Mumbai'); // Change this to your desired default city
});
