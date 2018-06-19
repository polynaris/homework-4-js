// 1) Write `largest` and `smallest` functions that returns the largest and smallest number passed like a argument.

function largest(...numArray) {
    return Math.max(...numArray);
}

function smallest(...numArray) {
    return Math.min(...numArray);
}
largest(2, 0.1, -5, 100, 3);
smallest(2, 0.1, -5, 100, 3);

// #### 2) Write function `transform` 

function transform(arr) {

    if (Array.isArray(arr)) {
        return arr.map(num =>
            function() {
                return num;
            }
        );
    }
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());


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
    var intId = setInterval(function() {
        console.log(num);
        if (--num < 0) {
            clearInterval(intId);
        }
    }, 1000);


}
countDown(3); // 3 2 1 0


// #### 5) Write a polyfill for a .bind() function and save it in `Function.prototype.myBind()`. `myBind()` should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.   
// Hint: play with the function in Function.prototype and see what this points to inside it.
// Your code should look like:
// `Function.prototype.myBind = function () { `  
// `  // your code here `  
// `}`  

// ### Example:
// `function addPropToNumber(number) { return this.prop + number; }`  
// `var bound = addPropToNumber.myBind({ prop: 9 });`  
// `bound(1)  // 10`