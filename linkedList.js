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
    if (!this.head) return null;
    return this.head;
  }

  getTail() {
    if (!this.head) return null;
    return this.tail;
  }

  atIndex(index) {
    let current = this.head;
    let i = 0;
    while (current !== null && i <= index) {
      // if this condition is true, the function will end
      if (index === i) return current;

      // if it's not true, then we'll just continue looping to the next node
      i++;
      current = current.nextNode;
    }
  }

  pop() {
    if (!this.head) return null;
    if (this.size() === 1) {
      this.lengthOfList--;
      this.head = null;
      this.tail = null;
    } else {
      let secondToTheLastNode = this.atIndex(this.lengthOfList - 2);
      this.tail = secondToTheLastNode;
      this.tail.nextNode = null;
      this.lengthOfList--;
    }
  }
}
