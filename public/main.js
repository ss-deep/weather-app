
const inputCity = document.querySelector("input");
const searchBtn = document.getElementById("search");

const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const baseURL = `http://localhost:5501`

function getWeatherDetails() {
    // city.textContent = inputCity.value
    // console.log(`${baseURL}/city`);

    axios.post(`${baseURL}`, { name: inputCity.value })
        .then((res) => {
            // console.log("inside axios == \n",res.data);
        display(res.data)
    }).catch((err) => console.log("eror == ", err.response.data))
}

function display(data) {
    temp.textContent = data.main.temp
    city.textContent = inputCity.value//.charAt(0).toUpperCase()
    humidity.textContent = data.main.humidity
    wind.textContent = data.wind.speed
}

searchBtn.addEventListener('click',getWeatherDetails)