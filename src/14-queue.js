// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    throw new Error('Not implemented');
    /* console.log(this.length);
    return this.length; */
  }

  enqueue(/* element */) {
    throw new Error('Not implemented');
    /* const node = new ListNode(element);
    node.value = element;
    node.next = null;
    let current;
    if (!this.size) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } */
  }

  dequeue() {
    throw new Error('Not implemented');
    /* if (!this.size) {
      return null;
    }
    const node = this.head;
    this.head = node.next;
    node.next = null;
    return node; */
  }
}

module.exports = Queue;
