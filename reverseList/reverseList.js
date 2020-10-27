function reverseList(head){
    //这个算法，我一开始想到的是，我针对链表里面的指针做文章，然后弄一个节点，像是头插法一样不断的将链表倒转过来不就好了
    //但是现在发现这个想法是很不现实的，很多逻辑有问题，首先我想不到怎么写。。。于是参考了一下别人的答案，我终于知道了解法
    //（1）我弄一个数组,把链表的数据存储下来
    //（2）然后拿着数据，对链表做一次遍历，用数组的数据对链表进行重新赋值
    let arr = [];
    let temp = head.next;
    while (temp){
        arr.push(temp.value)
        temp = temp.next;
    }
    console.log(arr);
    temp = head.next
    while (temp){
        temp.value = arr.pop()
        temp = temp.next;
    }
    console.log(head);
}

//定义一个节点
function ListNode(value){
    this.value = value;
    this.next = null;
}

//这里是建一个链表
function createList(arr){
    let head = new ListNode(null);
    let node = head;
    for (let i = 0; i < arr.length; i++) {
        node.next = new ListNode(arr[i])
        node = node.next
    }
    return head;
}