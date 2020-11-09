const matUtil = require('./utils');



let mat1 = [
    [1, 2],
    [3, 4],
];

let mat2 = [
    [5, 6],
    [7, 8],
];

let mat = [ [1,2,7],
            [6,5,8] ];


console.log(matUtil.matrixProduct(mat1, mat2));
console.log(matUtil.sumOfMatrices(mat1, mat2));
console.log(matUtil.sumOfEachRow(mat));
