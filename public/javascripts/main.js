const cityName= document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn');
const city_name= document.getElementById('city_name');
const temp_real_value= document.getElementById('temp_real_value');
const temp_status= document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    
    let cityVal = cityName.value;
    if (cityVal === " ") {

        city_name.innerText=`plz write proper name`;
        datahide.classList.add('data_hide');
        
        
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9b100a3421c5c5f1f77e3d2213bf8828`;
            const response = await fetch (url);
            const data = await response.json();
            const arrData=[data];

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText=arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            // // condition to check 
            // if (tempMood === "clear") {
            //     temp_status.innerHTML="<i class= 'fas fa-sun' style = 'color: #eccc68;'></i> ";
            // } else if (tempMood === "clouds") {
            //     temp_status.innerHTML="<i class= 'fas fa-sun' style = 'color: #f1f2f6;'></i> ";
            //  }else if (tempMood === "rain") {
            //     temp_status.innerHTML="<i class= 'fas fa-sun' style = 'color: #a4b0ve;'></i> ";
            //  } else {
            //         temp_status.innerHTML="<i class= 'fas fa-sun' style = 'color: #eccc68;'></i> ";
            //  }
             datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText=`plz enter the proper city name`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);
