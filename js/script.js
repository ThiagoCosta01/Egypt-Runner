const girl = document.querySelector(".girl")
const bat = document.querySelector(".bat")
const cloud = document.querySelector(".clouds") 
const canvas = document.querySelector(".container")
const centro = document.querySelector(".centro")


const jump = () => {
    girl.classList.add("jump")

    setTimeout(() =>{

        girl.classList.remove("jump")

    }, 500);
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
        

        clearInterval(loop)
    }

}, 20)

const upSpeed = setInterval(()=>{



}, 5000)

document.addEventListener("keydown", jump)

