class LinkedListNode<T> {
  constructor(
    readonly value?: T,
    public prev?: LinkedListNode<T>,
    public next?: LinkedListNode<T>
  ) {}
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
    return this.frontNode.value;
  }

  get back(): T | undefined {
    return this.backNode.value;
  }

  get size(): number {
    return this.#size;
  }

  pushFront(val: T): void {
    this.frontNode = new LinkedListNode<T>(val, this.#head, this.frontNode);
    ++this.#size;
  }

  pushBack(val: T): void {
    this.backNode = new LinkedListNode<T>(val, this.backNode, this.#tail);
    ++this.#size;
  }

  popFront(): T | undefined {
    if (this.size === 0) return undefined;
    const front = this.front;
    LinkedList.splice(this.frontNode);
    --this.#size;
    return front;
  }

  popBack(): T | undefined {
    if (this.size === 0) return undefined;
    const back = this.back;
    LinkedList.splice(this.backNode);
    --this.#size;
    return back;
  }

  at(index: number): T | undefined {
    if (index < 0 || index >= this.size) return undefined;
    return LinkedList.atRecursive(this.frontNode, index);
  }

  private get frontNode(): LinkedListNode<T> {
    return this.#head.next!;
  }

  private set frontNode(node: LinkedListNode<T>) {
    this.frontNode.prev = node;
    this.#head.next = node;
  }

  private get backNode(): LinkedListNode<T> {
    return this.#tail.prev!;
  }

  private set backNode(node: LinkedListNode<T>) {
    this.backNode.next = node;
    this.#tail.prev = node;
  }

  private static splice<T>(node: LinkedListNode<T>): void {
    const { prev, next } = node;
    next!.prev = prev;
    prev!.next = next;
  }

  private static atRecursive<T>(node: LinkedListNode<T>, index: number): T {
    return index === 0
      ? node.value!
      : LinkedList.atRecursive(node.next!, index - 1);
  }
}
