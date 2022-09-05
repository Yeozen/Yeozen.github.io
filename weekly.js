window.addEventListener('load', ()=> {

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position);

            fetch(`https://www.meteosource.com/api/v1/free/point?place_id=kuching&sections=all&language=en&units=metric&key=hurd84ykqvo7x4s1nfvavux7lgitve9she8frarz`, {
            }).then((response) => response.json()).then((jsonData) => {
            // Do something with response data.
                console.log(jsonData);
                //weekly forecast table
                var weathertable = document.getElementById("tb");
                for (let i = 0; i < 6; i++) {
                var row = weathertable.insertRow(-1);
                
                var daycell = row.insertCell(0);
                var datecell = row.insertCell(1);
                var summarycell = row.insertCell(2);
                
                const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

                const d = new Date(jsonData.daily.data[i].day);
                let day = weekday[d.getDay()];

                daycell.innerHTML = day;
                datecell.innerHTML = jsonData.daily.data[i].day;
                summarycell.innerHTML = jsonData.daily.data[i].summary
                }
            });
        });
            
    }else{

    }
});