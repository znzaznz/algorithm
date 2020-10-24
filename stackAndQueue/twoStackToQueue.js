 // 今天要做的是两个栈实现一个堆的push和pop
    // 注意，堆的特点是先进先出，而栈的特点是先进后出，所以此时我想到，如果把第一个栈的顺序和第二个栈反过来，不就达成了目的了吗？
    // 因此，今天的代码很快就能写出来了，请看代码
    let stack1 = new Stack();
    let stack2 = new Stack();
    function push(num){
        stack1.push(num);
        stack2 = new Stack();
        for (let i = 0; i < stack1.length; i++) {
            stack2.push(stack1.value[stack1.length-1-i])
        }
    }
    function pop(){
        const num = stack2.pop();
        stack1 = new Stack();
        for (let i = 0; i < stack2.length; i++) {
            stack1.push(stack2.value[stack2.length-1-i]);
        }
        return num;
    }
function Stack(){
        this.length = 0;
    this.value = [];
    this.push = function (num){
        this.value.push(num);
        this.length++;
    }
    this.pop = function(){
        this.length--;
        return this.value.pop();
    }
}