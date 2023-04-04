const icon = document.querySelector("#icon");
const container = document.querySelector(".container");
const navigationBar = document.querySelector(".navigationBar");

icon.addEventListener("click",function(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        icon.classList = "fa-solid fa-sun fa-2x"
        
    }else{
        
        icon.classList = "fa-solid fa-moon fa-2x"
    }
    
    
});

window.addEventListener("scroll",function(){
    
    navigationBar.classList.toggle("sticky",window.scrollY>0)})
