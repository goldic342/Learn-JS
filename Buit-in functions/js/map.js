console.log("MAP");
const requests = ["Jonh users", "Alex data", "Alice import", "CEO all"];
const mapRequests = requests.map((request) => {
  if (request.includes("CEO")) {
    return (request += " !!accepted");
  } else if (request.includes("data")) {
    return (request += " !accepted");
  } else {
    return (request += " ?denied");
  }
});
console.log(mapRequests); // another simple example