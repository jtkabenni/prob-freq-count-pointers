// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  const newObj = {};

  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = values[i] || null;
  }
  console.log(newObj);
  return newObj;
}
module.exports = { twoArrayObject };
