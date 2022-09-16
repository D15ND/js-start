// Типы данных
// Infinity == бесконечность
a=1/0;
console.log(a);
console.log('text'**0);
console.log(NaN**0); //Любое значение(текст, NaN, другое число) - возведение в степень будет 0 - гениус математика
console.log(100/0); //JS delit na nuli

// Строки
// Записываются в кавычках(три вида "text", 'text', `text`) - лучше одиночные
console.log('text');

let nameFirst='Ivan Interneshnl';
console.log(`Привет, ${nameFirst}`); // `text` - позволяет выводить в одну строку

let numberOne=15;
console.log(`Привет, твое число: ${numberOne}`);
console.log(`ur number is :${2+5}`);

// Boolean - true/false:
let trueVar= 4>1;
console.log(trueVar);
let falseVar=4<1;
console.log(falseVar);

//null == пусто
let nullVar;
console.log(nullVar);

// undifiend === вообще пусто
let undifVar;
console.log(undifVar); //ничего не задано => undefined 

let firstNumberVar=15;
firstNumberVar=undefined;
console.log(firstNumberVar, 'add undefined'); //Обычно null используется для присвоения
// переменной «пустого» или «неизвестного» значения, 
//а undefined – для проверок, была ли переменная назначена.

// Объекты и символы
