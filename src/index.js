/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  // preferences = [2, 3, 1]
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    let x = preferences[i] - 1; // x = 1
    let y = preferences[x] - 1; // y = 2
    let z = preferences[y] - 1; // z = 0 
    if (x !== i && z === i) {
      count++;
    }
  }
  return count / 3;
};
