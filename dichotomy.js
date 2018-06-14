//接下来我要写一个二分法文件

function dichotomy(arr){
  var a = arr.length;
  arr = dichotomyBasic(arr);
  for(var i=0;i < a;i++){
      for(;;){
        if(arr[i].length == 1) {
          break;
        }
        else{
         for(var j=0;j < arr.length;j++){
           arr[j].q = j;
         }
         var shan = arr[i];
         var Arr = dichotomyBasic(shan);
         var Q = shan.q;
         arr.splice(i,1);

         for(var m=0;m < Arr.length;m++){
          arr.splice(Q,0,Arr[m]);
          Q++;
         }
         
        }
      }
  }

  function dichotomyBasic(arr){
    var m = parseInt(arr.length/2);
    var middle = arr[m];
    var arrNew = [[],[middle],[]];
    arr.splice(middle,1);
    for(var i=0;i < arr.length;i++){
      if(arr[i] < middle){
        arrNew[0].push(arr[i]);
      }else if(arr[i] > middle){
        arrNew[2].push(arr[i]);
      }
    }
    arr.length = 0;
    for(i=0;i < arrNew.length;i++){
      if(arrNew[i].length != 0){
        arr.push(arrNew[i]);
      }
    }
    return arr;
  }

  var arrNew = [];
  for(var j=0;j < arr.length;j++){
    arrNew.push(arr[j][0]);
  }
  return arrNew;
}