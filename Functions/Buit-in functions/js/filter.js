console.log("FILTER:");
const temp = [20, 32, -21, 32, 21, 13, 32, 6, 0, 8];
const coldTemp = temp.filter((temp) => temp < 15); // function returned true or false
console.log(coldTemp);

const userRequests = [
  "GET array",
  "POST array",
  "DELETE submisions",
  "",
  "jidsof",
];
// operators :)
const filtredUserRequests = userRequests.filter((request) => {
  if (
    request.includes("GET") || // cool method
    request.includes("POST") ||
    request.includes("DELETE")
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(filtredUserRequests);
