function node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function restoreTree(NLRArr,LNRArr){
    //第一步，找到根元素
    if (NLRArr[0]){
        const basenode = NLRArr[0];
        //接着我们根据获得根元素，我们找到它在中序遍历中的位置
        const nodeIndex = LNRArr.indexOf(basenode);
        //然后根据得到的index得出它们对应得左右子树，并且将得到的新的左右子树当做参数进行递归，重复前面步骤
        let leftArr = restoreTree(NLRArr.slice(1,nodeIndex+1),LNRArr.slice(0,nodeIndex))
        let rightArr = restoreTree(NLRArr.slice(nodeIndex+1),LNRArr.slice(nodeIndex+1))


        let Node = new node(basenode);
        Node.left = leftArr;
        Node.right = rightArr;

        return Node
    }
}