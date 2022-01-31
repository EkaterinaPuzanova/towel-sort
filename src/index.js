
function tSort (m = []) {

  let result = [];
  for (let i = 0; i < m.length; i += 1) {
    (i % 2 === 0) ? result = result.concat(m[i]) : result = result.concat(m[i].reverse()); 
  }
  return result;

}

module.exports = function towelSort (matrix) {
  return tSort (matrix);
}
