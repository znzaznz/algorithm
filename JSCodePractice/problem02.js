// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
    const length = arr.length;
    let positive = 0,nagative = 0,zero = 0;
    arr.forEach(value => {
        value > 0 ? positive++:value < 0 ? nagative++ : zero++;
    })
    console.log(positive = (positive / length).toFixed(6));;
    console.log(nagative = (nagative / length).toFixed(6));;
    console.log(zero = (zero / length).toFixed(6));;
}
