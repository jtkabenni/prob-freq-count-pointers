// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let first = 0;
  let second = 0;

  while (second < str2.length && first < str1.length) {
    console.log(str1[first], str2[second]);
    if (str1[first] === str2[second]) {
      first++;
      second++;
    } else {
      second++;
    }
  }

  return first === str1.length;
}

module.exports = { isSubsequence };
