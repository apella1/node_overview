const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetchData has finally finished running!");
    }, 2000);
  });
  // this is synchronous and is return immediately before the code is run
  return promise;
};

setTimeout(() => {
  for (let i = 0; i < 7; i++) {
    console.log(i);
  }
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    }) // chaining then()
    .then((text) => console.log(text));
  console.log("Timer is done!");
}, 5000);

console.log("Normal synchronous code.");
