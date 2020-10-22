//注意，此方法只适用于数字没有重复的情况，如果有重复的地方我们需要重新进行代码的编写
function restoreTreeMySelf(NLRArr, LNRArr){
    //第一步，找到树的根节点，因为有中序遍历，所以中序遍历的第一个值就是根节点
    const node = LNRArr[0];
    //然后根据找到的根节点，我们需要找到对应根节点的左子树和右子树，注意，左右子树的值应该用两个数组包起来，而且应该从先序遍历去分配
    const index = NLRArr.indexOf(node);
    let NleftTree = [],NrightTree = [];
    for (let i = 0; i < NLRArr.length; i++) {
        if (i > index){
            NrightTree.push(NLRArr[i])
        }else if (i < index){
            NleftTree.push(NLRArr[i])
        }
    }
    //根据已经从先序遍历找到左右子树，我们反过来找中序遍历中跟已经找到左右子树内容一样顺序不同的数列段
    //灵机一动，此时左右子树的个数其实是一样的，所以其实数列的长度也是一样的，对此，我们只需要截取等长的数列段就行了
    let LleftTree = [],LrightTree = [];
    for (let i = 1; i < LNRArr.length; i++) {
        if (i <= NleftTree.length){
            LleftTree.push(LNRArr[i])
        }else{
            LrightTree.push(LNRArr[i])
        }
    }
    //此时截得的新的先序遍历的左右子树，中序遍历的左右子树，只需要进行再一轮的还原操作就好了，我们需要一个判断
    //如果此时给的数组长度大于1，则进行如下代码，如果小于，我们直接返回
    if(NleftTree.length > 1){restoreTreeMySelf(NleftTree,LleftTree)}
    if (NrightTree.length > 1){restoreTreeMySelf(NrightTree,LrightTree)}

    let tNode = new TreeNode(node);
    tNode.left = NleftTree;
    tNode.right = NrightTree;

    return tNode;
}

function TreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
//思路正确，但是很麻烦，而且出了bug