const { uuid } = require("uuidv4");
const { produce } = require("immer");
let arr = [
  { title: "1", id: uuid(), subTasks: [{ id: "1" }] },
  { title: "2", id: uuid(), subTasks: [{ id: "2" }] },
  { title: "3", id: uuid(), subTasks: [{ id: "3" }] },
  { title: "4", id: uuid(), subTasks: [{ id: "4" }] },
];
const res = produce(arr, (draft) => {
  draft[0].subTasks = draft[0].subTasks.filter((item) => item.id != "1");
});
arr = res;
console.log(res);
console.log(arr);
// for (const obj in arr) {
//   console.log(obj);
// }
