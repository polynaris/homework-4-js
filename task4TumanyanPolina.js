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
    let result = 0;
    if (arr.length === 1) {
        result += arr[0];
    } else {
        result = arr.shift() + sum(...arr)
    }
    return result;
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


// #### 5) Write a polyfill for a .bind() function 

Function.prototype.myBind = function(context) {
    var self = this;
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
        var thisArgs = [].slice.call(arguments);
        return self.apply(context, bindArgs.concat(thisArgs));
    }
};

function addPropToNumber(number) {
    return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10