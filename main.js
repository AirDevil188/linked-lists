import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.contains(2));
console.log(list.contains(1));

console.log(list.atIndex(0));
console.log(list.atIndex(3));
console.log("head", list.getHead());
console.log("tail", list.getTail());
console.log(list.find(0)); // index 0
console.log(list.find(3)); // index 3
console.log(list.contains("car")); // false;
console.log(list.contains(1)); // true
list.pop();
console.log(list.atIndex(3)); // after POP method undefined
console.log(list.size()); // 3
console.log(list.toString()); // (0) > (1) > (2) > null
list.append(4);
list.prepend(15);
console.log(list.getHead()); // NODE 15
console.log(list.getTail()); // NODE 4
console.log(list.toString()); // (15) > (0) > (1) > (2) > (4) > null
console.log(list.contains(2)); // true
console.log(list.contains(0)); //true
console.log(list.contains(4)); // true
console.log(list.contains(1)); // true
console.log(list.contains(15)); // true
console.log(list.find(15)); // 0
console.log(list.contains("car")); // false
