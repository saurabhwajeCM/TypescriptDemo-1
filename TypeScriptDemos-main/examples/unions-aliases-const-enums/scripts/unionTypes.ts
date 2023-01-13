﻿function showTotal(total: number | number[]) {
    if (typeof total === 'number') {
        console.log('total number union type = ' + total);
    }
    else {
        var sum: number = total.reduce(function (prevVal, currVal, index, array) {
            return prevVal + currVal;
        });
        console.log('total array union type = ' + sum);
    }
}

var values : number[] = [5, 5, 5, 5];
showTotal(values);
showTotal(50);