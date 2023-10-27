import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.prepend(0);
list.append("red");
list.append("blue");
list.append("green");
list.append("yellow");
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();

// list.contains(1111); // true
// list.contains(22); // false
// // console.log(list.atIndex(2));
// // // list.pop();
// // console.log(list.atIndex(2));
// list.contains(0); // true / after pop() method - false
// list.contains(0); // true

// list.contains(1);
// console.log(list.getHead()); // NODE 0
// console.log(list.getTail()); // NODE 1
// console.log(list.atIndex(1));
list.find("red");
list.find("yellow");
list.find(0);
list.find("green");
list.find("blue");
list.find("car");
list.find("blue");
