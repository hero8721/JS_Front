
const form = document.querySelector("header form");
const list = document.querySelector("main .cities");

//API
const apiKey = '4032b7ebf17ff6fb9e8176b102a78e63';

function generate(){
    const inputVal = document.querySelector("input").value;
    document.querySelector("input").value = '';
    document.querySelector("p").textContent = '';
    
    //URL here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const { main, name, sys, weather } = data;

            const div = document.querySelector(".city");
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            
            console.log(`The weather in ${name}, ${sys.country} is ${Math.round(main.temp)}°C, ${weather[0]["description"]}`);
            
            const markup =  `
                <h2 class="city-name" data-name="${name},${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                
                <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                <img class="city-icon" src="${icon}" alt="${
                    weather[0]["description"]
                    }">
                <figcaption>${weather[0]["description"]}</figcaption>

            `;
            div.innerHTML = markup;
            document.querySelector("main .container-city").appendChild(div);
        })
        .catch(() => {
           document.querySelector("p").textContent = "Please search for a valid city 😩";
           document.querySelector(".city").innerHTML = '';
        });
}

