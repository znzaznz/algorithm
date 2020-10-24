function jump(n){
    // 今天要写的内容是青蛙跳，这个算法很有意思
    // 内容如下：一只青蛙，一次可以跳一下，也可以跳两下，问需要跳n下跳出的井有多少种跳出的方法？
    // 我觉得递归是个很不错的方法，于是我先试试递归。
    // 首先我想到，我需要知道一个递推关系是，jump(n) = jump(n-1)+jump(n-2)
    // 所以只需要知道几个初始条件，再根据递推关系式写出代码即可
   if (n === 1){
       return 2
   }
   if(n === 2){
       return 3
    }
    return jump(n-1)+jump(n-2)
}

// 但是这个只是一般的递归，分析来看，此时，我们如果要求的数非常大，此时，每个数都要重新计算，计算量非常大，此时引入记忆化递归的概念

let cacheArr = [0,2,3];
function memoryJump(n){
    if(cacheArr[n] !== undefined) return cacheArr[n];
    return  cacheArr[n] = memoryJump(n-1)+memoryJump(n-2);
}

