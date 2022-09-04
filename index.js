const keyApi = `4fb1e0595f912d3c77727a4c81c4e78f`;

const weatherApi = city =>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`;
     fetch(api)
    .then(reqs => reqs.json())
    .then(data => recive(data))
}

document.getElementById('searchId').addEventListener('click', function(){
    const searchInput = document.getElementById('search').value;
    console.log(searchInput);
    if(searchInput !==''){
        weatherApi(searchInput);
    }else{
        weatherApi('dhaka');
    }
});

const recive = data =>{
    console.log(data);
    // set temperature
    const setTemp = document.getElementById('temperature');
    setTemp.innerText= data?.main?.temp;

    // set city
    const setCityName = document.getElementById('setCity');
    setCityName.innerText = data?.name;

    // set weather
    const setWeather = document.getElementById('weather');
    setWeather.innerText = data?.weather[0].main;
}

weatherApi('dhaka');