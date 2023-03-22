const searchBar =document.querySelector("#searchBar");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const minmax = document.querySelector(".minmax");
const havaIcon = document.querySelector(".havaIcon");
const setQuery = (e) =>{
    if(e.keyCode =='13'){
        bilgiGetir(searchBar.value)
        searchBar.value = "";
    }
}


searchBar.addEventListener("keypress",setQuery);




function bilgiGetir(sehir){
    
    const request = new XMLHttpRequest();
    let key = '1e7fe8e384532b86908eb35d3894c3c1';
    let url ='https://api.openweathermap.org/data/2.5/';


    request.open('GET',`${url}weather?q=${sehir}&appid=${key}&lang=tr&units=metric`);
    request.send();
    
    request.addEventListener("load",function(){
        const data = JSON.parse(this.responseText);
        console.log(typeof(data));
        console.log(data);
        weather(data);
    });
    
    
}




bilgiGetir(sehir);


function weather(data){
    
    if(data.cod === '404'){
        alert("City Not Found!!");
    }else{
        if(data.weather[0].description =="açık"){
            havaIcon.querySelector("i").classList= "fa-solid fa-sun";
            havaIcon.style.color = "#ff7e00";
        }else if(data.weather[0].description =="hafif yağmur" ||data.weather[0].description =="yağmur" ||data.weather[0].description =="şiddetli yağmur"){
            havaIcon.querySelector("i").classList= "fa-solid fa-cloud-showers-heavy";
            havaIcon.style.color = "rgb(220, 216, 216)";
        }
        else{
            havaIcon.querySelector("i").classList = "fa-solid fa-cloud";
            havaIcon.style.color = "rgb(220, 216, 216)";
        }   
        html=`
            <div class="city">${data.name} ${data.sys.country}</div>
            <div class="temp">${Math.floor(data.main.temp)}°C</div>
            <div class="desc">${data.weather[0].description}</div>
            <div class="minmax">${Math.floor(data.main.temp_min)}°C/${Math.floor(data.main.temp_max)}°C</div>
            
        
        `;
        document.querySelector(".content").innerHTML = html;
    }
    }
  







