// promise example with car brand
function myPromiseFunction(brand: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (brand === "Toyota") {
        resolve("Toyota is a great brand!");
      } else {
        reject("Brand not found!");
      }
    }, 1000);
  });
}

myPromiseFunction("Toyota")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
