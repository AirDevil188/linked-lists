import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lengthOfList = 0;
  }

  append(value) {
    if (this.head === null) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.lengthOfList++;
    } else {
      const newNode = new Node(value);
      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.lengthOfList++;
    }
  }
  prepend(value) {
    if (this.head === null) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.lengthOfList++;
    } else {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      this.lengthOfList++;
    }
  }

  size() {
    if (this.head !== null) return this.lengthOfList;
    else return;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  atIndex(index) {
    let current = this.head;
    let i = 0;
    while (current !== null && i <= index) {
      if (index === i) {
        console.log(current);
        return current;
      } else if (index !== i) {
        i++;
        current = current.nextNode;
        continue;
      }
    }
  }
}

//   atIndex(index) {
//     let tmp = this.head;
//     let i = 0;
//     while (tmp !== null && i <= index) {
//       if (index === 0 && index == i) {
//         console.log(tmp);
//         return tmp;
//       }
//       i++;
//       tmp = tmp.nextNode;
//       if (i === index) {
//         console.log(tmp);
//         return tmp;
//       }
//     }
//   }
