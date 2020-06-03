// Write your solution in this file!
const driver = {}

function udateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}