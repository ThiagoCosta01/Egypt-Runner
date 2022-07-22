const girl = document.querySelector(".girl");
const bat = document.querySelector(".bat");
const cloud = document.querySelector(".clouds");
const canvas = document.querySelector(".container");
const centro = document.querySelector(".centro");
const audio = document.querySelector(".song");
const screen = document.querySelector("body");
let volumeSelector = document.querySelector(".volume");
var batSpeed = 0;
var vivo = true;


audio.volume = 0.1;
volumeSelector.value = 10;
volumeSelector.onclick = vol;

function vol(){
    audio.play();
    volumeSelector.addEventListener("click",()=>{
        audio.volume = volumeSelector.value/100;
    })
}



const jump = () => {
    
    if (vivo){
        girl.classList.add("jump")
        girl.src = "./img/jump1.png"
        setTimeout(() =>{

            girl.classList.remove("jump")
            

        }, 500);
        setTimeout(()=>
        girl.src = "./img/boyAtt.gif",300)
}
}

const loop = setInterval(() => {

    const batPosition = bat.offsetLeft;
    const girlPosition = +window.getComputedStyle(girl).bottom.replace("px","");
    const cloudsPosition = +window.getComputedStyle(cloud).right.replace("px","");

    if (batPosition <= 120 && batPosition > 0 && girlPosition < 95){
        bat.style.animation = "none";
        bat.style.left = `${batPosition}px`;
        girl.style.bottom = `${girlPosition}px`;
        girl.style.animation = "none";

        girl.src="./img/boyLosest.png";
        girl.style.bottom = `${41}px`;

        cloud.style.animation = "none"
        cloud.style.right = `${cloudsPosition}px`;

        centro.innerText = "Aperte Ctrl + R para continuar";
        vivo = false; 


        clearInterval(loop)
    }

}, 20)

const upSpeed = setInterval(()=>{

}, 5000)



document.addEventListener("keydown", jump)