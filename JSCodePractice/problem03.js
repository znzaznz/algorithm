//这次是写出一个三角形，输入一个数字，输出一个图形

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n; j++) {
            if (i > n-j){
                str += "#";
            }else{
                str += " ";
            }
        }
        console.log(str);
    }
}