console.log("SOME");
const securedData = [
  {
    id: 1,
    important: 2,
    status: "secured",
  },
  {
    id: 2,
    important: 4,
    status: "secured",
  },
  {
    id: 3,
    important: 1,
    status: "secured",
  },
  {
    id: 4,
    important: 5,
    status: "secured",
  },
  {
    id: 5,
    important: 4,
    status: "secured",
  },
];
if (
  securedData.some((data) => {
    return data.status === "hacked";
  })
) {
  console.log("FIND SOME HACKED DATA");
} else {
  console.log("NO SUCH HACKED DATA");
}
