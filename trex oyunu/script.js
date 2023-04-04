const trex = document.querySelector("#trex");
const cactus = document.querySelector("#cactus");



function zipla(){
    if(cactus.classList != "cactus-animate"){
        cactus.classList.add("cactus-animate");
    }

    if(trex.classList != "trex-animate"){

        trex.classList.add("trex-animate");
        setTimeout(function(){
            trex.classList.remove("trex-animate");
    
        },500)
    }


}

