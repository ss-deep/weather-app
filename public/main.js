
const inputCity = document.querySelector("input");
const searchBtn = document.getElementById("search");

const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const baseURL = `http://localhost:5501`

function getWeatherDetails() {
    
    axios.post(`${baseURL}/city`, { name: inputCity.value })
        .then((res) => {
        city.textContent=res.data
        // display(res.data)
    }).catch((err) => console.log("errrooooorrr"))
}

function display() {
    temp.textContent = temp
    city.textContent = city
    humidity.textContent = humidity
    wind.textContent = wind
}

searchBtn.addEventListener('click',getWeatherDetails)