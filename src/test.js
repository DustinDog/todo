const { uuid } = require("uuidv4");

const arr = [
  { title: "1", id: uuid() },
  { title: "2", id: uuid() },
  { title: "3", id: uuid() },
  { title: "4", id: uuid() },
];

const selectedId = arr[2].id;

const foundItem = arr.some((item) => item.id === "gg");

console.log(foundItem);
