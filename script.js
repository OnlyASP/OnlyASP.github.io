//Классы DOM эллементов
const classObj = {
	selectUs: 'selectUs__block',
	selectUsText: 'selectUs__block-text',
	serv: 'services',
};

const selectUs = document.getElementsByClassName(`${classObj.selectUs}`);
const selectUsText = document.getElementsByClassName(`${classObj.selectUsText}`);
const serv = document.getElementsByClassName(`${classObj.serv}`);

//Перевод HTML коллекций в массив
const ArrUs = [...selectUs];
const ArrText = [...selectUsText];
const ArrServ = [...serv];


// Очистить все классы кроме класса выбранного эллемента
const removeClass = (arrRemove, classRemove) => {
	for (let i = 0; i < arrRemove.length; i++) {
		arrRemove[i].classList.remove(`${classRemove}`);
	};
}

// Добавить все классы кроме класса выбранного эллемента
const addClass = (arrAdd, classAdd) => {
	for (let i = 0; i < arrAdd.length; i++) {
		arrAdd[i].classList.add(`${classAdd}`);
	};
}


//Сменить класс эллемента с очисткой данного класса с остальных эллементов
const oneClassToggle = (arr, class1) => {
	for (let i = 0; i < arr.length; i++) {

		arr[i].addEventListener('click', () => {

			removeClass(arr, class1);

			arr[i].classList.toggle(`${class1}`);
		})
	};
};

// Сменить два класса двух эллементов с очисткой класса остальных 
// эллементов-1 и добавление класса к эллементам-2 (второму дочернему[1])
const twoClassToggle = (arr, arr2, class1, class2) => {
	for (let i = 0; i < arr.length; i++) {
		arr[i].addEventListener('click', () => {

			removeClass(arr, class1);
			addClass(arr2, class2);

			arr[i].classList.toggle(`${class1}`);
			arr[i].children[1].classList.toggle(`${class2}`);
		})
	};
};


twoClassToggle(ArrUs, ArrText, 'act', 'hidden');
oneClassToggle(ArrServ, 'act', true);


// Упрощенный вариант смены класса, принимает массив и класс
// const oneClassToggle = (arr, classObj) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i].addEventListener('click', () => {
// 			arr[i].classList.toggle(`${classObj}`);
// 		})
// 	};
// };