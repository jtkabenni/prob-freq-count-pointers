// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const freq1 = createFrequencyCounter(num1.toString().split(""));
  const freq2 = createFrequencyCounter(num2.toString().split(""));
  console.log(freq1, freq2);
  for (let n in freq1) {
    if (freq1[n] !== freq2[n]) return false;
  }
  return true;
}

function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}
module.exports = { sameFrequency };
