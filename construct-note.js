// add whatever parameters you deem necessary
function constructNote(message, letters) {
  const msg = createFrequencyCounter(message);
  const lets = createFrequencyCounter(letters);
  console.log(msg, lets);
  for (let l of message) {
    if (msg[l] > lets[l] || !lets[l]) return false;
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

module.exports = { constructNote };
