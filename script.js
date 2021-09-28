// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 0f3dc22706da6db208da80314ea08a46

const input = document.querySelector("input");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h4 = document.querySelector("h4");
const div = document.querySelector("div");


if (h1.textContent == "" || h2.textContent == "" || h4.textContent == "") {
    div.classList.add("hide");
}

btn.addEventListener('click', (e) => {

    e.preventDefault();
    if (input.value == "") {
        alert("Enter city name");
    } else {
        getWeather(input.value);
    }
    input.value = '';
});


async function getWeather(cityName) {
    try {
        const apikey = "0f3dc22706da6db208da80314ea08a46";
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`);
        const data = await res.json();
        // console.log(data);
        div.classList.remove("hide");
        h1.textContent = data.name + ", " + data.sys.country;
        let celcius = Math.round(parseFloat(data.main.temp) - 273.15);
        h2.innerHTML = celcius + '&deg;';
        h4.textContent = data.weather[0].description;
    } catch (error) {
        alert('Oops!Entered city not found');
    }
}