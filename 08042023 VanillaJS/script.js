const course = [
  {
    id: 1,
    title: "HTML dasar",
  },
  {
    id: 2,
    title: "CSS dasar",
  },
  {
    id: 3,
    title: "ALgorithm",
  },
  {
    id: 4,
    title: "Python",
  },
  {
    id: 5,
    title: "K-MEANS algorithm",
  },
];

const container = document.getElementById("course");

// while
// do while
// forEach
// map
// for in
// recursive
for (let i = 0; i < course.length; i++) {
  container.innerHTML += `
    <li>
    <p>Title: ${course[i].title}</p>
    <p>No: ${course[i].id}</p>
    </li>
    `;
}
