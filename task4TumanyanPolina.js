// 1) Write `largest` and `smallest` functions that returns the largest and smallest number passed like a argument.

function largest(...numArray) {
    return Math.max(...numArray);
}

function smallest(...numArray) {
    return Math.min(...numArray);
}
largest(2, 0.1, -5, 100, 3);
smallest(2, 0.1, -5, 100, 3);

// #### 2) Write function `transform` that will transform array of numbers to array of functions 
// that will return value from a base array.

// ##### Example:
// `const baseArray = [10, 20, 30, 40, 50];`  
// `const newArray = transform(baseArray);`  
// `newArray[3](); // should return 40`  
// `newArray[4](); // should return 50`  

function transform(arr) {

}




// 3) Write function `sum`. 

function sum(...arr) {
    let summ = 0;
    if (arr.length === 1) {
        summ += arr[0];
    } else {
        summ = arr.shift() + sum(...arr)
    }
    return summ;
}

sum(1, 3, 5, 7);

// 4) Write function `countDown`. 

function countDown(num) {
    let arr = [];
    let max = num;
    for (let i = 0; i <= max; i++) {
        arr[i] = num;
        num--;
    }
    return arr;

}
countDown(3);