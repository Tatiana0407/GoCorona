// Меню-бургер//
const iconMenu = document.querySelector('.menu__icon'); // Ищем класс .menu__icon//
//выносим константу menuBody за пределы блока, чтобы она стала видимой для кода прокрутки
const menuBody = document.querySelector('.menu__body');

// Проверяем есть ли такой класс //
if (iconMenu) {
	//Создаем событие клик по иконке//
	iconMenu.addEventListener("click", function (e) {
		//Убираем скролл сайта при открытом бургере, обращаемся к Body//
		document.body.classList.toggle('_lock');
		//Для самой иконки добавляется или убирается класс active//
		iconMenu.classList.toggle('_active'); //active нужен для анимации иконки//
		menuBody.classList.toggle('_active'); //active нужен для выезжания меню бургера//
	});
}

// Меню-бургер//