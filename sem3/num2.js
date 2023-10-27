// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.

// const arr = [1, 2, 3];
// for( let i=0; i< arr.length; i++)
// {
//     arr[i]++;
// }

// console.log(arr);


// 2. Узнайте длину следующего массива и объясните почему такое значение:
// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr.length);
// console.log(arr);
// ```
// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);
// arr.unshift(4, 5);
// console.log(arr);
// const firstEl = arr.shift();
// console.log(firstEl);
// console.log(arr);

// const lastEl = arr.pop();
// console.log(lastEl, arr);

// arr.splice(2,2,100,200,300);
// console.log(arr);




// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.

// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.length, arr);
// delete arr[2]; //так не делать
// console.log(arr.length, arr);
