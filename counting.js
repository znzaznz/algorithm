function counting(arr){
  var arrNew = [];
  max = arr[0];
  min = arr[0];
  for(var i=1;i <= arr.length;i++){
    if(max < arr[i]) max = arr[i];
    if(min > arr[i]) min = arr[i];
  }
  for(i=min;i <= max;i++){
    arrNew.push(0);
  }
  for(i=0;i < arr.length;i++){
    j = arr[i]-min;
    arrNew[j] = arrNew[j] +1;
  }
  arr = [];
  for(i=0;i < arrNew.length;i++){
    for(;;){
      if(arrNew[i] != 0){
        arr.push(min+i);
        arrNew[i] = arrNew[i]-1;
      }else{
        break;
      }
    }
  }
  return arr;
}