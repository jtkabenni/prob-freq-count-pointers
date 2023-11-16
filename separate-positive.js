// add whatever parameters you deem necessary
function separatePositive(arr) {
  let point1 = 0;
  let point2 = arr.length - 1;

  while (point1 < point2) {
    if (arr[point2] < 0) {
      point2--;
    } else if (arr[point1] < 0) {
      [arr[point1], arr[point2]] = [arr[point2], arr[point1]];
      point1++;
      point2--;
    } else {
      point1++;
    }
  }
  console.log(arr);
  return arr;
}
module.exports = { separatePositive };
