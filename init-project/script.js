// localStorage.setItem(
//   "course",
//   JSON.stringify([
//     {
//       id: 1,
//       title: "Graph",
//     },
//     {
//       id: 2,
//       title: "JS",
//     },
//   ])
// );

import { getAPI } from "./fetcher";

// localStorage.getItem("course");

const userData = [
  {
    id: 1,
    nama: "john",
  },
  {
    id: 1,
    nama: "doe",
  },
];

localStorage.setItem("user-data", JSON.stringify(userData));

function register(user) {
  userData.push(user);
  localStorage.setItem("user-data", JSON.stringify(userData));
}

function login(user) {
  // user === userData[user] ? 'data already exist' : { nama: ... }
  //   filter, find
}

// LOGIN
// input -> input === data[input] ?  'data not found' : { nama: ... }

// REGISTER
// input -> data.push(input)

getAPI("course");
getAPI("users");
