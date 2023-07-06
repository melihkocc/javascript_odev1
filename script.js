let isim = prompt("Adınız: ")
let title = document.querySelector("#title")
title.innerHTML = `${title.innerHTML} ${isim}! Hoş geldin!`

let zaman = document.querySelector("#zaman>h1")

function tarihsaat(){
    zaman.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    switch (new Date().getDay()) {
        case 1:
            zaman.innerHTML += ` Pazartesi`  
            break; 
        case 2:
            zaman.innerHTML += ` Salı`  
            break;
        case 3:
            zaman.innerHTML += ` Çarşamba`  
            break;
        case 4:
            zaman.innerHTML += ` Perşembe`  
            break;
        case 5:
            zaman.innerHTML += ` Cuma`  
            break;   
        case 6:
            zaman.innerHTML += ` Cumartesi`  
            break; 
        case 7:
            zaman.innerHTML += ` Pazar`  
            break;        
        default:
            break;
    }
}
setInterval(tarihsaat,1000);
