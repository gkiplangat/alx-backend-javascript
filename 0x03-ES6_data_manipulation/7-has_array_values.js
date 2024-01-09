export default function hasValuesFromArray(setX, xArray) {
  return xArray.every((ele) => setX.has(ele));
}
