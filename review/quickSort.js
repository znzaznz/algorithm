function quickSort(arr){
    //找到基准数
    const baseNum = arr[0];
    //根据基准数分成左右数组
    let leftArr = [],rightArr = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > baseNum){
            rightArr.push(arr[i])
        }else {
            leftArr.push(arr[i])
        }
    }
    //根据分成的左右数列再次进行快排，结束条件为arr.length =1
    if (leftArr.length > 1) leftArr = quickSort(leftArr)
    if (rightArr.length > 1)rightArr = quickSort(rightArr)

    //返回左右数组和基准数的拼接
    return leftArr.concat(baseNum,rightArr)
}
