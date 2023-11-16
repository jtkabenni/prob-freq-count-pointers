// add whatever parameters you deem necessary
function countPairs(arr, val) {
  let newSet = new Set();
  let pairs = 0;
  for (let n of arr) {
    if (newSet.has(val - n)) {
      pairs++;
    }
    newSet.add(n);
  }
  return pairs;
}

module.exports = { countPairs };
