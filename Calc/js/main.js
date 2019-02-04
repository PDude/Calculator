let select = document.getElementById('select');
let firstValue = document.getElementById('first_value');
let secondValue = document.getElementById('second_value');
let formFirst = document.getElementById('form_first');
let formSecond = document.getElementById('form_second'); let resultString = document.getElementById('result_string'); let result = document.getElementById('result');
let btn = document.getElementById('btn');
let reset = document.getElementById('reset');
let option = select.options[select.selectedIndex].value;
let ua = document.getElementById('ua');
let en = document.getElementById('en');
let nightMode = document.getElementById('night_mode');
let is = ' дорівнює ';

countFunc = () => {
	switch (select.options[select.selectedIndex].value){
		case '+':
		return function(a, b) {return a + b;};

		case '-':
		return function(a, b) {return a - b;};

		case '*':
		return function(a, b) {return a * b;};

		case '/':
		return function(a, b) {return a / b;};

		case '%':
		return function(a, b) {return a % b;};

		case '^':
		return function(a, b){return Math.pow(a, b);};

		case 'cos':
		return function(a, b) {return Math.cos(a);};

		case 'sin':
		return function(a, b) {return Math.sin(a);};

		case '√':
		return function(a, b) {return Math.sqrt(a);};

		case 'tan':
		return function(a, b){return Math.tan(a);};
	}
}

function update() {
	let signName = select.options[select.selectedIndex].getAttribute('data-name');
	let temp = countFunc();
	let num1 = parseFloat(firstValue.value);
	let num2 = parseFloat(secondValue.value);

	if ((temp(num1, num2)) % 1 == 0 ) result.innerHTML = temp(num1, num2);
	else result.innerHTML = (temp(num1, num2)).toFixed(3);

	if (!isNaN((temp(num1, num2)))) {
		if (select.value == 'cos' || select.value == 'sin' || select.value == 'tan' || select.value == '√') {
			resultString.innerHTML = (signName + ' ' + num1 + ' ' + is + temp(num1, num2));
		} else {
			resultString.innerHTML = (num1 + ' ' + signName + ' ' + num2 + is + temp(num1, num2));
		}
	} else {
		if (isNaN(num2)) result.innerHTML = num1;
		else if (isNaN(num1)) result.innerHTML = num2;
		
		if (isNaN(result.innerHTML)) result.innerHTML = 0;

		if (isNaN(num2)) resultString.innerHTML = num1;
		else if (isNaN(num1)) resultString.innerHTML = num2;

		if (isNaN(resultString.innerHTML)) resultString.innerHTML = 0;
	}

}

select.onchange = () => {
	update();
	if (select.value == 'cos' || select.value == 'sin' || select.value == 'tan'|| select.value == '√') {
		secondValue.setAttribute('disabled', 'disabled')
		secondValue.classList.add('disabled');
		form_second.reset();
	} else {
		secondValue.removeAttribute('disabled');
		secondValue.classList.remove('disabled');
	}
}

firstValue.oninput = () => {
	update();
	firstValue.value = firstValue.value.replace(/[^0-9\.]/, '');
}

secondValue.oninput = () => {
	update();
	secondValue.value = secondValue.value.replace(/[^0-9\.]/, '');
}

reset.onclick = () => {
	formFirst.reset();
	formSecond.reset();
	result.innerHTML = 0;
	resultString.innerHTML = 0;
}

let dataReload = document.querySelectorAll('[data-reload]');

let language = {
	ua: {
		a: 'Автор',
		t: 'Технології'
	},
	en: {
		a: 'Author',
		t: 'Technologies'
	}
};

let ReserveerButton1 = document.getElementById('ReserveerButton1');


if (window.location.hash) {
	if (window.location.hash === '#en') {
		author.textContent = language.en.a;
		technologies.textContent = language.en.t;
		firstValue.placeholder = 'Enter the first value';
		secondValue.placeholder = 'Enter the second value';
		is = ' is ';

		let multiply = document.getElementById('multiply').setAttribute('data-name', 'times');
		let divide = document.getElementById('divide').setAttribute('data-name', 'divided by');
		let add = document.getElementById('add').setAttribute('data-name', 'add');
		let minus = document.getElementById('minus').setAttribute('data-name', 'minus');
		let percent = document.getElementById('percent').setAttribute('data-name', 'percent');
		let power = document.getElementById('power').setAttribute('data-name', 'power of');
		let cosine = document.getElementById('cosine').setAttribute('data-name', 'cosine');
		let sine = document.getElementById('sine').setAttribute('data-name', 'sine');
		let tangent = document.getElementById('tangent').setAttribute('data-name', 'tangent');
		let root = document.getElementById('root').setAttribute('data-name', 'root of');
	} 
}

nightMode.onclick = () => {
	if (nightMode.checked == true) {
		ua.classList.add('light_green');
		ua.classList.remove('dark_green');
		console.log('ua & night');
	} else if (nightMode.checked == false) {
		ua.classList.add('dark_green');
		ua.classList.remove('light_green');
		console.log('ua & day');
	}
}

if (window.location.hash) {
	if (window.location.hash === '#en') {
		//ua.classList.remove('light_green');
		nightMode.onclick = () => {
			if (nightMode.checked == true) {
				en.classList.add('light_green');
				en.classList.remove('dark_green');
				console.log('en & night');
			} else if (nightMode.checked == false) {
				en.classList.add('dark_green');
				en.classList.remove('light_green');
				console.log('en & day');
			}
		}
	} 
}

if (window.location.hash) {
	if (window.location.hash !== '#en') {
		nightMode.onclick = () => {
			if (nightMode.checked == true) {
				ua.classList.add('light_green');
				ua.classList.remove('dark_green');
				console.log('ua & night');
			} else if (nightMode.checked == false) {
				ua.classList.add('dark_green');
				ua.classList.remove('light_green');
				console.log('ua & day');
			}
		}
	} 
}

for (let i = 0; i < dataReload.length; i++) {
	dataReload[i].onclick = () => {
		location.reload(true);
	}
}

nightMode.onchange = () => {
	ReserveerButton1.click();
	let body = document.getElementById('body').classList.toggle('white_bg');
	let header = document.getElementById('header').classList.toggle('white_bg');
	let footer = document.getElementById('footer').classList.toggle('white_bg');
	header = document.getElementById('header').classList.toggle('day_border');
	footer = document.getElementById('footer').classList.toggle('day_border');
	let h1 = document.getElementById('h1').classList.toggle('gray_color');
	let author = document.getElementById('author').classList.toggle('gray_color');
	let technologies = document.getElementById('technologies').classList.toggle('gray_color');
	author = document.getElementById('author').classList.toggle('font_700');
	technologies = document.getElementById('technologies').classList.toggle('font_700');
	let links = document.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++) {
		links[i].classList.toggle('day_links');
	}
	let commas = document.getElementsByClassName('comma');
	for (let i = 0; i < commas.length; i++) {
		commas[i].classList.toggle('day_links');
	}
	let offer_content = document.getElementById('offer_content').classList.toggle('offer_day');
	resultString.classList.toggle('gray_color');
	result.classList.toggle('gray_color');
	firstValue.classList.toggle('gray_color');
	secondValue.classList.toggle('gray_color');
	firstValue.classList.toggle('day_border');
	secondValue.classList.toggle('day_border');
	reset.classList.toggle('reset_day');
	select.classList.toggle('select_day');
}

window.onload = () => {
	if (nightMode.checked == false ) {
		let body = document.getElementById('body').classList.add('white_bg');
		let header = document.getElementById('header').classList.add('white_bg');
		let footer = document.getElementById('footer').classList.add('white_bg');
		header = document.getElementById('header').classList.add('day_border');
		footer = document.getElementById('footer').classList.add('day_border');
		let h1 = document.getElementById('h1').classList.add('gray_color');
		let author = document.getElementById('author').classList.add('gray_color');
		let technologies = document.getElementById('technologies').classList.add('gray_color');
		author = document.getElementById('author').classList.add('font_700');
		technologies = document.getElementById('technologies').classList.add('font_700');
		let links = document.getElementsByTagName('a');
		for (let i = 0; i < links.length; i++) {
			links[i].classList.add('day_links');
		}
		let commas = document.getElementsByClassName('comma');
		for (let i = 0; i < commas.length; i++) {
			commas[i].classList.add('day_links');
		}
		let offer_content = document.getElementById('offer_content').classList.add('offer_day');
		resultString.classList.add('gray_color');
		result .classList.add('gray_color');
		firstValue.classList.add('gray_color');
		secondValue.classList.add('gray_color');
		firstValue.classList.add('day_border');
		secondValue.classList.add('day_border');
		reset.classList.add('reset_day');
		select.classList.add('select_day');
		ua.classList.remove('light_green');
		ua.classList.add('dark_green');

		if (window.location.hash) {
			if (window.location.hash === '#en') {
				ua.classList.remove('dark_green');
				en.classList.add('dark_green');
				console.log('en & day');
			} 
		} 
		if (window.location.hash) {
			if (window.location.hash !== '#en') {
				ua.classList.add('dark_green');
				console.log('ua & day');
			} 
		}
	} else {	
		if (window.location.hash) {
			if (window.location.hash === '#en') {
				ua.classList.remove('light_green');
				en.classList.add('light_green');
				console.log('en & night');
			} 
		} 
		if (window.location.hash) {
			if (window.location.hash !== '#en') {
				ua.classList.add('light_green');
				console.log('ua & night');
			} 
		}
	}
}

function save(){
	localStorage.setItem('nightMode', nightMode.checked);
}

function load(){    
	let checked = JSON.parse(localStorage.getItem('nightMode'));
	nightMode.checked = checked;
}

load();