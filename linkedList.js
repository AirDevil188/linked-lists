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
      if (index === i) return current;
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
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    if (!this.head) return null;
    let current = this.head;
    let i = 0;
    while (current.nextNode !== null && current.value !== value) {
      current = current.nextNode;
      i++;
    }
    if (current.value !== value) return null;
    return i;
  }

  toString() {
    if (!this.head) return "null";
    let string = "";
    let current = this.head;
    while (current.nextNode !== null) {
      string = `${string} (${current.value}) ->`;
      current = current.nextNode;
    }
    return `${string} (${current.value}) -> (null))`;
  }
}
