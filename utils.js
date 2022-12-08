function multiplyMatrices(mat1, mat2) {
    const res = [];
    let N = mat1.length;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        res[i][j] = 0;
        for (let k = 0; k < N; k++) {
          res[i][j] += mat1[i][k] * mat2[k][j];
        }
      }
    }
  
    return res;
  }
  
  function addMatrices(mat1, mat2) {
    const res = [];
    for (let i = 0; i < mat1.length; i++) {
      for (let j = 0; j < mat1[0].length; i++) {
        res[i][j] = mat1[i][j] + mat2[i][j];
      }
    }
  
    return res;
  }
  
  function sumOfArr(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  function sumOfRows(mat) {
    let sum = [];
    for (let i = 0; i < mat.length; i++) {
      sum[i] = sumOfArr(mat[i]);
    }
  
    return sum;
  }
  
  function trim(s) {
    return s.replace(/^\s+|\s+$/g, "");
  }
  
  function countWords(s) {
    return trim(s).split(/\s+/).length;
  }

module.exports = {
    countWords,
    trim,
    sumOfRows,
    sumOfArr,
    addMatrices,
    multiplyMatrices
}