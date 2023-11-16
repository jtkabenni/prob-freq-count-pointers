// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  let point1 = arr[0];
  let point2 = arr.length - 1;

  while (point1 < point2) {
    const pointsAvg = point1 + point2 / 2;
    if (pointsAvg === avg) {
      return true;
    } else if (pointsAvg < avg) {
      point2--;
    } else {
      point1++;
    }
  }
  return false;
}

module.exports = { averagePair };
