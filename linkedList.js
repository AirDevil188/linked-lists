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
      return newNode;
    } else {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      this.lengthOfList++;
      return newNode;
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
        return current;
      } else if (index !== i) {
        i++;
        current = current.nextNode;
        continue;
      }
      return current;
    }
  }

  pop() {
    let current = this.atIndex(this.lengthOfList - 2);
    if (!this.head) return null;
    if (this.head.nextNode === null) {
      this.head === null;
    }

    this.tail = current;
    this.tail.nextNode = null;
    this.lengthOfList--;
    console.log(this.lengthOfList);
  }
}
