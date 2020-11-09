/* 1. In utils.js write a function matrixProduct(mat1, mat2) that returns a new matrix that is
the product of mat1 and mat2 matrices. */
/**********************************************************************************************/

/* mat1: [a1 a2    mat2: [b1 b2 
          a3 a4]          b3 b4] 

 Result: [(a1*b1 + a2*b3) (a1*b2 + a2*b4)
          (a3*b1 + a4*b3) (a3*b2 + a4*b4)] */


          function matrixProduct(mat1, mat2) {
            let result = [];
            for (let i = 0; i < mat1.length; i++) {                      // loop through array
                result[i] = [];
                for (let j = 0; j < mat2[0].length; j++) {               // iterate over each element of matrix 2
                    let sum = 0;
                    for (let k = 0; k < mat1[0].length; k++) {           // iterate over each element of matrix 1
                        sum += mat1[i][k] * mat2[k][j];
                    }
                    result[i][j] = sum;
                }
            }
            return result;
        }
        
        // let mat1 = [
        //     [1, 2],
        //     [3, 4],
        // ];
        // let mat2 = [
        //     [5, 6],
        //     [7, 8],
        // ];
        
        // console.log(matrixProduct(mat1, mat2));
        
        
        
        /* 2. In utils.js write a function sumOfMatrices(mat1, mat2) that accepts two matrices and
        returns the sum of those matrices in a new matrix. */
        /*****************************************************************************************/
        
        function sumOfMatrices(mat1, mat2){
            if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length){
                console.log("error");
                return;
            }
            for(let row = 0; row < mat1.length; ++row){
                for(let col = 0; col < mat1[0].length; ++col){
                    mat1[row][col] += mat2[row][col]
                }
            }
            return mat1;
        }
        
        // let mat1 = [
        //     [1, 2],
        //     [3, 4],
        // ];
        // let mat2 = [
        //     [5, 6],
        //     [7, 8],
        // ];
        
        // console.log(sumOfMatrices(mat1, mat2));
        
        
        
        
        
        /* 3. In utils.js write a function sumOfEachRow(mat) that accepts a matrix and returns an
        array that contains sum of every row of the matrix for its elements. */
        /****************************************************************************************/
        
        
        // let mat = [ [1,2,4],
        //             [3,5,1] ];
        
        let result = [];
        
        function sumOfArray(arr){
          let sum = 0;
          for(i =0; i < arr.length; i++){           // iterate over each element of the array
            sum += arr[i];
          }
          return sum;
        }
        
        function sumOfEachRow(mat){
          for(j = 0; j < mat.length; j++){           // iterate over each row of the matrix
            result.push(sumOfArray(mat[j]));         // pushing the value returned by sumOfArray(arr) into result
          }
          return result;
        }
        
        // console.log(sumOfEachRow(mat));
        
        
        
        module.exports = {
            matrixProduct,
            sumOfMatrices,
            sumOfEachRow
        }
        
        