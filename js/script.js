const target = document.querySelector('#target')

const lightOn = document.querySelector('#on')
const lightOff = document.querySelector('#off')

target.addEventListener('dblclick', showBroken)
lightOn.addEventListener('click', showOn)
lightOff.addEventListener('click', showOff)

function showBroken(){
    target.src = /images/quebrada.jpg
}

function showOn(){
    target.src = /images/acesa.gif
}

function showOff(){
    target.src = /images/apagada.gif
}
