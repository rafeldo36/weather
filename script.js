const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00af0390b2mshba13b381a262395p1947bajsne99840195496',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response =>{
        console.log(response)
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        // cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like 
        humidity.innerHTML = response.humidity 
        humidity2.innerHTML = response.humidity 
        min_temp.innerHTML = response.min_temp 
        max_temp.innerHTML = response.max_temp 
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees 
        sunrise.innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Bhiwandi")

const getCWeather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then(response =>{
            console.log(response)
            temp3.innerHTML = response.temp
            cloud_pct3.innerHTML = response.cloud_pct
            feels_like3.innerHTML = response.feels_like 
            humidity3.innerHTML = response.humidity 
            min_temp3.innerHTML = response.min_temp 
            max_temp3.innerHTML = response.max_temp 
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees 
            sunrise3.innerHTML = response.sunrise 
            sunset3.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
    }

getCWeather()
  


