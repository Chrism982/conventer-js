const conventer = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')


let farenheit
let celcius

const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ''
    }
}

const fahrToCel = () => {
    farenheit = converter.value * 1.8 + 32
    result.textContent = `${conventer.value} °C to ${farenheit.toFixed(1)} °F`
    converter.value = '' 
}

const celToFar = () => {
    celcius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value} °F to ${celcius.toFixed(1)} °C`
    converter.value = ''
}  

const conversion = () => {
    if (conventer.value !== ''){
        if (one.textContent === '°C') {
            fahrToCel()
        } else {
            celToFar()
        }
    } else {
        result.textContent = 'Musisz podać jakąś wartość'
    }
}

const reset = () => {
    conventer.value = ''
    result.textContent = ''
}


changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
