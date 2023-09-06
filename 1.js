class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  deleteByIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  deleteByValue(val) {
    let data;
    if (this.isEmpty()) {
      console.log("Empty List");
      return;
    } else if (this.head.value === val) {
      data = this.head.value;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      let curr = this.head.next;
      while (curr !== null && curr.value !== val) {
        prev = prev.next;
        curr = curr.next;
      }
      if (curr !== null) {
        data = curr.value;
        prev.next = curr.next;
      } else {
        console.log("Value not found in the list");
        return;
      }
    }
    this.size--;
    return data;
  }

  search(value) {
    let i = 0;
    let curr = this.head;
    if (this.isEmpty()) {
      return -1;
    }
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    let next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  recReverse(prev = this.head) {
    if (prev.next == null) {
      this.head = prev;
      return;
    }
    this.recReverse(prev.next);
    let curr = prev.next;
    curr.next = prev;
    prev.next = null;
  }

  display() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      list += "null";
      console.log(list);
    }
  }
}

const list = new LinkedList();

list.append(1);
list.prepend(0);
list.append(2);
list.append(4);
list.insertAtIndex(3, 3);
console.log(list.deleteByIndex(3));
console.log(list.deleteByValue(2));
list.prepend(10);
list.append(21);
list.append(41);
console.log(list.search(10));
list.display();
list.recReverse();
list.display();
