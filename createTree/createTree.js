//首先要进行树节点的编写
function TreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function createTree(arr){
    if (arr[0] !== undefined){
        // 首先创建根节点
        const root = new TreeNode(arr.shift());
        let queue = [];
        queue.push(root);
        //遍历给的二叉树遍历结果，将结果按照一定的顺序进行树的创建
        while (queue.length){
            //队列的处理思路：
            //1.将队列的首个元素出列
            //2.将和队列相关的元素入列
            // 针对这次的需求，我们做以下改变
            // debugger
            //1.将根节点加入到队列中
            //接下来的步骤跟之前相同
            // debugger
            let node = queue.shift();
            let leftValue = arr.shift();
            if (leftValue !== "#"){
                const leftNode = new TreeNode(leftValue);
                node.left = leftNode;
                queue.push(leftNode)
            }
            let rightValue = arr.shift();
            if (rightValue !== "#"){
                const rightNode = new TreeNode(rightValue);
                node.right = rightNode;
                queue.push(rightNode)
            }
        }
        return root
    }else {
        return "找不到根节点"
    }

}