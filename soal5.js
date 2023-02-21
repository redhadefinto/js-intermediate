let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const newData = {...data, name: "Redha Definto", email: "redhadefinto28@gmail.com", hobbies: "Ngoding"}

console.log(newData)

const result = newData.address;
// console.log(result)

const {street, city} = result;
console.log(street)
console.log(city)