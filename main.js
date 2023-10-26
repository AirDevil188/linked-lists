import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.prepend(0);

// list.atIndex(0);
// list.atIndex(1);
// list.atIndex(2);

// list.atIndex(3);
// list.pop();
// // console.log(list.getTail());
// // // list.append(3);
// // console.log(list.atIndex(0));
// list.pop();
// console.log("index", list.atIndex(0));
// console.log("head", list.getHead());
// console.log("tail", list.getTail());
list.pop();
list.pop();
// console.log(list.atIndex(0));
// console.log(list.atIndex(1));
console.log(list.getHead());
console.log(list.getTail());
