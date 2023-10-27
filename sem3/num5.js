// Задание 5:
//
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
//     Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 100));
// }
//
// for (const arrElement of arr) {
//     if (arrElement % 6 === 0) {
//         console.log(arrElement);
//     }
// }

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.

const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;

console.log(arr.reduce((acc , num) => {
    if(num === 3){
        return acc + 1
    }
    return acc
}, 0
))
//
// for (const number of arr) {
//     if (number === 3)
//         count++
// }
// console.log(count)

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
//     С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr)
