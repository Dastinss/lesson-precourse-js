// Создание элемента заголовка (h1) и добавление текста к этому элементу
const titleElement = document.createElement( 'h1' );
titleElement.append( 'Hello from it-incubator' );

// Добавление элемента заголовка в тело документа
document.body.append( titleElement );

// Создание выпадающего списка (select)
const techSelectElement = document.createElement( 'select' );

// Создание первого варианта (option) для выпадающего списка
const techSelectOption0Element = document.createElement( 'option' );
techSelectOption0Element.value = 1;
techSelectOption0Element.append( 'JS' ); // Добавление текста 'JS' к первому варианту
techSelectElement.append( techSelectOption0Element ); // Добавление первого варианта в выпадающий список

// Создание второго варианта (option) для выпадающего списка
const techSelectOption1Element = document.createElement( 'option' );
techSelectOption1Element.value = 2;
techSelectOption1Element.append( 'HTML' ); // Добавление текста 'HTML' ко второму варианту
techSelectElement.append( techSelectOption1Element ); // Добавление второго варианта в выпадающий список

const elThird = document.createElement( 'option' );
// elThird.value = 3;
elThird.append( 'React' );
techSelectElement.append( elThird );

// Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список)
document.body.append( techSelectElement );

//=============================================================================================

// // data
// const title = 'it-incubator';
// const graduatesCount = 2000;
// const areYouChampion = true;
//
// // render
// let pageTitleElement = document.createElement('h1');
// pageTitleElement.innerText = title;
// document.body.append(pageTitleElement);
// let graduatesCountElement = document.createElement('input');
// graduatesCountElement.type = 'number';
// graduatesCountElement.value = graduatesCount;
// document.body.append(graduatesCountElement);
// let areYouChampionElement = document.createElement('input');
// areYouChampionElement.type = 'checkbox';
// areYouChampionElement.checked = areYouChampion;
// document.body.append(areYouChampionElement);

//=============================================================================================

// data
const info = {
	title: 'it-incubator',
	graduatesCount: 2000,
	areYouChampion: true,
	technologies: [
		{
			title: 'Front',
			id: 1
		},
		{
			title: 'Back',
			id: 2
		},
		{
			title: 'DevOps',
			id: 3
		}
	]
}

// render
let pageTitleElement = document.createElement( 'h1' );
pageTitleElement.innerText = info.title;
document.body.append( pageTitleElement );

let graduatesCountElement = document.createElement( 'input' );
graduatesCountElement.type = 'number';
graduatesCountElement.value = info.graduatesCount;
document.body.append( graduatesCountElement );

let areYouChampionElement = document.createElement( 'input' );
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append( areYouChampionElement );

const listTechnoElement = document.createElement( 'select' );

const listTechnoOption1Element = document.createElement( 'option' );
listTechnoOption1Element.value = 1;
listTechnoOption1Element.innerText = info.technologies[ 0 ].title;
listTechnoElement.append( listTechnoOption1Element );

const listTechnoOption2Element = document.createElement( 'option' );
listTechnoOption2Element.value = 2;
listTechnoOption2Element.innerText = info.technologies[ 1 ].title;
listTechnoElement.append( listTechnoOption2Element );

const listTechnoOption3Element = document.createElement( 'option' );
listTechnoOption3Element.value = 3;
listTechnoOption3Element.innerText = info.technologies[ 2 ].title;
listTechnoElement.append( listTechnoOption3Element );

document.body.append( listTechnoElement )