const girl = document.querySelector(".girl")
const bat = document.querySelector(".bat")

const jump = () => {
    girl.classList.add("jump")

    setTimeout(() =>{

        girl.classList.remove("jump")

    }, 500);
}

const loop = setInterval(() => {

    const batPosition = bat.offsetLeft;
    const girlPosition = +window.getComputedStyle(girl).bottom.replace("px","");

    console.log(batPosition)
    if (batPosition <= 120 && batPosition > 0 && girlPosition < 95){
        bat.style.animation = "none";
        bat.style.left = `${batPosition}px`;
        girl.style.bottom = `${girlPosition}px`;
        girl.style.animation = "none"; 


    }

}, 20)

document.addEventListener("keydown", jump)

