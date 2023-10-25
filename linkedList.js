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
}
