const dataFim = new Date('2023-02-28T11:05')
const countDown = document.querySelector('.countdown')
const diasEl = countDown.querySelector('.dias')
const horasEl = countDown.querySelector('.horas')
const minutosEl = countDown.querySelector('.minutos')
const segundosEl = countDown.querySelector('.segundos')

setInterval(contador, 1000)

function zeroEsquerda(num){
    if(Number(num) <= 9){
        return `0${num}`
    }
    return num
}

function contador(){
    const agora = new Date()
    const diff = dataFim - agora
    const restante = new Date(diff)
    const dias = zeroEsquerda(Math.floor(diff / (1000 * 60 * 60 * 24)))
    const horas = zeroEsquerda(restante.getUTCHours())
    const minutos = zeroEsquerda(restante.getUTCMinutes())
    const segundos = zeroEsquerda(restante.getUTCSeconds())
    
    atualizaNum(diasEl, dias)
    atualizaNum(horasEl, horas)
    atualizaNum(minutosEl, minutos)
    atualizaNum(segundosEl, segundos)
    
    atualizaCircle(diasEl, dias, 365)
    atualizaCircle(horasEl, horas, 24)
    atualizaCircle(minutosEl, minutos, 60)
    atualizaCircle(segundosEl, segundos, 60)      
}

function atualizaNum(el, valor){
    el.querySelector('h2').innerHTML = valor
    atualizaCircle(el, valor)
}

function atualizaCircle(el, valor, range){
    const porcentagem = (Number(valor) / range) * 100
    el.querySelector('.circle').setAttribute("stroke-dasharray", `${porcentagem}, 100`)
}