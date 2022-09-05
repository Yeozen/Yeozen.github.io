window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let weathersummary = document.querySelector('.temperature-description');
    let locationTimezone = document.querySelector('.location-timezone');
    let weathericon = document.querySelector('.weather-icon');
    console.log(weathericon);
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position);

            fetch(`https://www.meteosource.com/api/v1/free/point?place_id=kuching&sections=all&language=en&units=metric&key=hurd84ykqvo7x4s1nfvavux7lgitve9she8frarz`, {
            }).then((response) => response.json()).then((jsonData) => {
            // Do something with response data.
                console.log(jsonData);
                const{temperature, summary} = jsonData.current
                temperatureDegree.textContent = temperature;
                weathersummary.textContent = summary;
                locationTimezone.textContent = jsonData.timezone;
                const iconnum=jsonData.current.icon_num;
                weathericon.src.textContent = "big/" + iconnum + ".png";
                console.log(weathericon.src);
                console.log(iconnum);
            });
        });
            
    }else{

    }
});