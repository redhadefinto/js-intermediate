fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((datas) => {
    datas.map((data) => {
      console.log(`name: ${data.name}`);
    });
  })
  .catch((error) => console.error(error));
