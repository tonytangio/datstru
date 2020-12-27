import { LinkedList } from "../src";

describe("LinkedList", () => {
  let emptyList: LinkedList<any>;
  let someList: LinkedList<number>;
  const someListValues = [
    1,
    5,
    3,
    8,
    0,
    -23,
    Number.MAX_VALUE,
    Number.MIN_VALUE,
  ];

  beforeEach(() => {
    emptyList = new LinkedList();
    someList = new LinkedList(someListValues);
  });

  describe("constructor", () => {
    it("constructs an empty LinkedList", () => {
      const list = new LinkedList();

      expect(list.size).toBe(0);
      expect(list.front).toBe(undefined);
      expect(list.back).toBe(undefined);
    });

    it("constructs with initialised values", () => {
      const values = [1, 5, 3, 8, 0, -23, Number.MAX_VALUE, Number.MIN_VALUE];
      const list = new LinkedList(values);

      expect(list.size).toBe(values.length);
      expect(list.front).toBe(values[0]);
      expect(list.back).toBe(values[values.length - 1]);
      values.forEach((value, index) => expect(list.at(index)).toBe(value));
    });
  });

  describe("getters", () => {
    it("front", () => {
      expect(emptyList.front).toBe(undefined);
      expect(someList.front).toBe(1);
    });

    it("back", () => {
      expect(emptyList.back).toBe(undefined);
      expect(someList.back).toBe(Number.MIN_VALUE);
    });

    it("size", () => {
      expect(emptyList.size).toBe(0);
      expect(someList.size).toBe(someListValues.length);
    });
  });

  describe("methods", () => {
    describe("pushFront", () => {
      it("pushes a new value to the front", () => {
        const someObject = { push: "front" };

        emptyList.pushFront(someObject);
        someList.pushFront(2);

        expect(emptyList.front).toBe(someObject);
        expect(someList.front).toBe(2);
        expect(emptyList.size).toBe(1);
        expect(someList.size).toBe(someListValues.length + 1);
      });
    });

    describe("pushFront", () => {
      it("pushes a new value to the back", () => {
        const someObject = { push: "back" };

        emptyList.pushFront(someObject);
        someList.pushFront(6);

        expect(emptyList.front).toBe(someObject);
        expect(someList.front).toBe(6);
        expect(emptyList.size).toBe(1);
        expect(someList.size).toBe(someListValues.length + 1);
      });
    });

    describe("popFront", () => {
      it("returns undefined if empty", () => {
        const result = emptyList.popFront();

        expect(result).toBe(undefined);
      });

      it("removes and returns the front value", () => {
        const someObject = { pop: "front" };
        emptyList.pushFront(someObject);

        const emptyFront = emptyList.popFront();
        const someFront = someList.popFront();

        expect(emptyFront).toBe(someObject);
        expect(someFront).toBe(someListValues[0]);
        expect(emptyList.front).toBe(undefined);
        expect(someList.front).toBe(someListValues[1]);
        expect(emptyList.size).toBe(0);
        expect(someList.size).toBe(someListValues.length - 1);
      });
    });

    describe("popBack", () => {
      it("returns undefined if empty", () => {
        const result = emptyList.popBack();

        expect(result).toBe(undefined);
      });

      it("removes and returns the back value", () => {
        const someObject = { pop: "back" };
        emptyList.pushBack(someObject);

        const emptyBack = emptyList.popBack();
        const someBack = someList.popBack();

        expect(emptyBack).toBe(someObject);
        expect(someBack).toBe(someListValues[someListValues.length - 1]);
        expect(emptyList.back).toBe(undefined);
        expect(someList.back).toBe(someListValues[someListValues.length - 2]);
        expect(emptyList.size).toBe(0);
        expect(someList.size).toBe(someListValues.length - 1);
      });
    });

    describe("at", () => {
      it("returns undefined when given an out of bounds index", () => {
        expect(emptyList.at(0)).toBe(undefined);
        expect(someList.at(someListValues.length)).toBe(undefined);
        expect(someList.at(-1)).toBe(undefined);
      });

      it("returns the value at the index from the head", () => {
        someListValues.forEach((value, index) =>
          expect(someList.at(index)).toBe(value)
        );
      });
    });
  });
});
