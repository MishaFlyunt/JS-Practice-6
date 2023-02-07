//JS-Functions

//1 Реалізувати функцію яка буде виводити привітальне повідомлення в діалогове вікно
function hello() {
    return 'Hello Misha'
}
alert(hello());


//2 Реалізувати функцію яка прийме як аргумент ім’я користувача та виведе привітальне повідомлення в консоль.
function name(a) {
    return a;
}
let result = name('Hello Misha')
alert(result);


//3 Реалізувати функцію для додавання двох чисел
function sumTwo(a, b) {
    return a + b;
}
let result2 = sumTwo(45, 67);
console.log(`Сума двох чисел - ${result2}`);


//4 Реалізувати функцію для обрахунку заданого виразу(a+b*c)
function number(a, b, c) {
    return (a + b * c);
}
let sum = number(3, 44, 12);
console.log(`Сума - ${sum}`);


//5 Реалізувати математичну функцію піднесення до степеня
let numb = parseInt(prompt('Введіть число а я його пінесу до степеня'));

function stepin(numb) {
    return (numb * numb);
}
console.log(`Cтепінь - ${stepin(numb)}`);


//6 Реалізувати функцію для перевірки на парність числа яке введено з клавіатури.
let a = parseInt(prompt('Введіть число'));
let pair = `Парна ${a}`;
let notpair = `Непарна ${a}`;

function pairNumber(a) {
    if (a % 2 == 0) {
        return pair
    } else if (a % 2 != 0) {
        return notpair
    }
}
console.log(pairNumber(a));


//7 Реалізувати математичну функцію random, параметром приймати діапазон a, b.
function rand(min, max) {
    return min + (Math.floor(Math.random() * (max - min)));
}
console.log(`Рандомне значення в інтервалі 5-12: ${rand(5, 12)}`);


//8 Реалізувати програму заповнення масиву рандомними значеннями в діапазоні a, b (з допомогою попередньої функції).
let arr = [];

function rand2(min, max) {
    for (i = 0; i < 10; i++) {
        arr.push(min + (Math.floor(Math.random() * (max - min))));
    }
}
let result5 = rand2(2, 124)
console.log(arr);


//9 Реалізувати функцію для зміни фону сторінки через prompt

let bg_color = prompt('Enter a color');

function changeColor(bg_color) {
    return document.body.style.backgroundColor = `${bg_color}`;
}
changeColor(bg_color);


//10 Реалізувати функцію для зміни стилю шрифту через prompt

let font_style = prompt('Enter a font');

function changeFont(font_style) {
    return document.getElementById('text').style.fontStyle = `${font_style}`;
}
changeFont(font_style);


//11 Реалізувати функцію для зміни розміру шрифту через prompt

let font_size = prompt('Enter a size');

function changeSize(font_size) {
    return document.getElementById('text').style.fontSize = `${font_size}px`;
}
changeSize(font_size);


//12 Реалізувати функцію для перевірки простого числа

let num = prompt('Enter a number')

function primeNumber(num) {
    if (num == 1 || num == 0) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
};
let result_num = primeNumber(num);
console.log(`Prime number - ${result_num}`);