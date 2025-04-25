const inputBox = document.querySelector('.input_box');
const searchBtn = document.getElementById('search_btn');
const weather_image = document.querySelector('.weather_image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather_body');



async function checkWeather(city){
    const api_key = "db328e7beeff72c71a327fe2d9c7c96f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
  

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    
   temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
   
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_image.src = "/cloud.png";
            break;
        case 'Clear':
            weather_image.src = "/clear.png";
             break;
        case 'Rain':
            weather_image.src = "/rain.png";
             break;
        case 'Mist':
            weather_image.src = "/mist.png";
             break;
        case 'Snow':
            weather_image.src = "/snow.png";
             break;
    }


}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});
