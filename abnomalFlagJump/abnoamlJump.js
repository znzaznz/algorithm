function abnoamlJump(n){
    //在上次的基础上，这是青蛙变厉害了，它可以一次跳一节，也可以一次跳两节，也可以一次跳n级，这次的算法又是啥呢？
    //还是按照之前的思路，我们根据记忆化递归的方法，针对表达式做一个改变即可
    let cache = [0,1,2];
    if (cache[n] != undefined) {return cache[n]}
    //此时的表达式为f(n) = f(n-1)+f(n-2)+...+f(1)+1;
    cache[n] = 1;
    for (let i = n-1; i >= 1; i--) {
        cache[n] += abnoamlJump(i);
    }
    return cache[n];
}

//上次的代码如下：
function fragJump(n){
    //f(1)=1;f(2)=2;f(n)=f(n-1)+f(n-2)
    let cache = [,1,2];
    if (cache[n] !== undefined){ return cache[n]}
    return cache[n] = fragJump(n-1)+fragJump(n-2);
}