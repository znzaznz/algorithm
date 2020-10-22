function qucikSort(arr){
    // 首先按照算法思路，我们要先创立一个基准数，和两个空的左右数组,这里我们选择用数列第一个数作为基准数
    const baseNum = arr[0];
    let leftArr = [],rightArr = [];

    //我们现在要进行比较，比基准数大的放在右数组，比基准数小的放在左数组
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < baseNum){
            leftArr.push(arr[i])
        }else {
            rightArr.push(arr[i])
        }
    }
    //接着按照快排的条件，我们需要对生成的左右数组符合数组长度大于1的再次进行快排，并且返回排序的结果
    if (leftArr.length > 1) leftArr = qucikSort(leftArr);
    if (rightArr.length > 1)rightArr = qucikSort(rightArr);

    //最后将得到的快排结果进行合并
    return  leftArr.concat(baseNum,rightArr);
}