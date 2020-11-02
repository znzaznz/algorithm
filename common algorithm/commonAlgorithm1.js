// 最近搞得算法越来越难，越来越玄乎了，现在写一些面试的算法

// 首先是斐波那契数列，这是数列的规则：
// F(0) = 0;
// F(1) = 1;
// F(n) = F(n-1) + F(n-2)(n >= 2)
function commonAlgorithm1(num){
    // 因为有前面那些记忆化递归等算法的铺垫，现在看来斐波那契数列是很简单的了，请看代码
    if (num === 1){
        return 1
    }else if (num === 0){
        return 0
    } else {
        return commonAlgorithm1(num-1)+commonAlgorithm1(num-2);
    }
}
//这是代码1,这个样子是纯粹的递归算法，现在用记忆化递归算法

function fibonacci1(num){
    let cache = [0,1]
    if (cache[num] !== undefined) return cache[num];
    return cache[num] = commonAlgorithm1(num-1) + commonAlgorithm1(num-2);
}

//判断一个数是否是质数

function isPrime(num){
    //1不是质数
    if (num === 1){
        return false;
    }
    //循环去判断比他小的数有没有能整除的
    for (let i = 2; i < num-1; i++) {
        if (num % 2 === 0)return false
    }
    return true
}

//求最大公约数
// 最大公约数就是两个数中能整除他们的最大的数
function greatestCommonDivisor(a,b){
    // 这里的用的方法是辗转相除法，这是高代的内容
    if (a % b === 0){
        return b
    }
    return greatestCommonDivisor(b,a % b);
}

//最小公倍数
// 最小公倍数是能被两个数整除的最小的数
// 有公式如下：(a,b)*[a,b] = a*b
function leastCommonMultiple(a,b){
    return a*b/greatestCommonDivisor(a,b);
}

//数组去重

// ES6
function unique(arr){
    return Array.from(new Set(arr))
}

//原生js
function unique1(arr){
    if (!Array.isArray(arr)){
        return "type error"
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}