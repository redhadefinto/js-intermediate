const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (input, limit, callback) => {
  const result = names
        .filter((name) => name.toLowerCase().includes(input.toLowerCase()))
        .slice(0, limit)
  return callback(result)
}

const newResult = (result) => {
  console.log(result)
  return result;
}

searchName('an', 3, newResult)