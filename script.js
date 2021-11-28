const Img = document.querySelector('.img')
const Intro = document.querySelector('.intro')
const Description = document.querySelector('.description')
const Repick = document.querySelector('.repick')

var lock = 0

Img.addEventListener('click', () => {
    if(lock == 0){
        lock = 1
        changeImg()
    }
})

Repick.addEventListener('click', () => {
    lock = 0
    Img.src = "/img/Box.png"
    Intro.innerHTML = "Schrodinger's Cat inside the box"
    Description.innerHTML = "Click on the box to look inside. Examine whether the cat is alive or dead"
})

var imgSrcs = ['../img/Alive.png', '../img/Dead.png']
var result

function changeImg(){
    let i = 0
    let timerID = setInterval(() => {
        Img.src = imgSrcs[i % 2]
        i++
    }, 10);

    setTimeout(() => {
        clearInterval(timerID)
        result = Math.floor(Math.random() * 2)
        render(result)
    }, 2000);
}

function render(result){
    Img.src = imgSrcs[result]
    if(result == 0){
        Intro.innerHTML = "Schrodinger's Cat - Alive state"
        Description.innerHTML = "The white cat represents the alive state. He's very curious, holding the poison vial"
    }
    if(result == 1){
        Intro.innerHTML = "Schrodinger's Cat - Dead state"
        Description.innerHTML = "The black cat represents the dead state. He looks a little bit creepy with 3 eyes, 2 tails"
    }
}

function bigImg(x){
    x.style.height = "70%"
    x.style.width = "auto"
    x.style.transition = ".5s"
}

function normalImg(x){
    x.style.height = "60%"
    x.style.width = "auto"
    x.style.transition = ".5s"
}