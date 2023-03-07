const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let farenheit;
let celsius;

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F';
		two.textContent = '°C';
		result.textContent = '';
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
		result.textContent = '';
	}
};
const fahrToCel = () => {
	farenheit = converter.value * 1.8 + 32;
	result.textContent = `${converter.value} ℃ to ${farenheit.toFixed(1)} ℉`;
	converter.value = '';
};

const celToFahr = () => {
	celsius = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value} ℉ to ${celsius.toFixed(1)} ℃`;
	converter.value = '';
};

const conversion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			fahrToCel();
		} else {
			celToFahr();
		}
	} else {
		result.textContent = 'You must enter some value!';
	}
};

const reset = () => {
	converter.value = '';
	result.textContent = '';
};

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);
