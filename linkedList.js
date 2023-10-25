import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail;
  }

  append(value) {
    if (this.head === null) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      console.log(newNode);
    } else {
      const newNode = new Node(value);
      this.tail.nextNode = newNode;
      this.tail = newNode;
      console.log(newNode);
    }
  }
}

/// [ 1 NODE (head) ] > [ 2  NODE ] > [ 3 NODE  (tail) > null]

/// so if I have  [ 1 NODE (head) ] > [ 2  NODE ] > [ 3 NODE  (tail) > null]

/// how can i keep the connection with [1 NODE] and [2 NODE]
