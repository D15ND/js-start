// alert(xy) Выводит всплывающее окно в браузере
// console.log(xy) Выводит в консоль
// let, const, var - объявление переменным


function xy(a,b,c) {
    if (a>b && a>c) {
        return('max number is:', a);
    }
    else if (b>a && b>c) {
        return('max number is:', b);
    }
    else if(c>a && c>b)
        return('max number is:', c);
}
const result=xy(10,5,3);
console.log(result);

const j=2;
const i=2.5;
num1=j+i;
var num1;