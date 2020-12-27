class LinkedListNode<T> {
  readonly val?: T;
  prev?: LinkedListNode<T>;
  next?: LinkedListNode<T>;

  constructor(val?: T) {
    this.val = val;
  }
}

export default class LinkedList<T> {
  #size = 0;
  readonly #head = new LinkedListNode<T>();
  readonly #tail = new LinkedListNode<T>();

  constructor(values?: T[]) {
    this.#head.next = this.#tail;
    this.#tail.prev = this.#head;
    values?.forEach((value) => this.pushBack(value));
  }

  get front(): T | undefined {
    return this.#head.next?.val;
  }

  get back(): T | undefined {
    return this.#tail.prev?.val;
  }

  get size(): number {
    return this.#size;
  }

  pushFront(val: T): void {
    const newNode = new LinkedListNode<T>(val);
    newNode.next = this.#head.next;
    newNode.prev = this.#head;
    this.#head.next!.prev = newNode;
    this.#head.next = newNode;
    ++this.#size;
  }

  pushBack(val: T): void {
    const newNode = new LinkedListNode<T>(val);
    newNode.next = this.#tail;
    newNode.prev = this.#tail.prev;
    this.#tail.prev!.next = newNode;
    this.#tail.prev = newNode;
    ++this.#size;
  }

  popFront(): T | undefined {
    if (this.size === 0) return undefined;
    const front = this.front;
    this.#head.next = this.#head.next?.next;
    --this.#size;
    return front;
  }

  popBack(): T | undefined {
    if (this.size === 0) return undefined;
    const back = this.back;
    this.#tail.prev = this.#tail.prev?.prev;
    --this.#size;
    return back;
  }

  static atRecursive<T>(node: LinkedListNode<T>, index: number): T {
    return index === 0
      ? node.val!
      : LinkedList.atRecursive(node.next!, index - 1);
  }

  at(index: number): T | undefined {
    if (index < 0 || index >= this.size) return undefined;
    return LinkedList.atRecursive(this.#head.next!, index);
  }
}
