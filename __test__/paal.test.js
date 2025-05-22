const Paal = require("../paal");

test("tests that a is the first input in a 3-letter root", () => {
  const test1 = new Paal("a", "b", "c");
  expect(test1.root1).toBe("a");
});
test("tests that b is the second input in a 3-letter root", () => {
  const test1 = new Paal("a", "b", "c");
  expect(test1.root2).toBe("b");
});

test("tests that c is the third input in a 3-letter root", () => {
  const test1 = new Paal("a", "b", "c");
  expect(test1.root3).toBe("c");
});

// testing if hebrew letters work lol
test("tests that a is the first input in a 3-letter root", () => {
  const test1 = new Paal("ר", "ג", "ס");
  expect(test1.root1).toBe("ר");
});
test("tests that b is the second input in a 3-letter root", () => {
  const test1 = new Paal("ר", "ג", "ס");
  expect(test1.root2).toBe("ג");
});

test("tests that c is the third input in a 3-letter root", () => {
  const test1 = new Paal("ר", "ג", "ס");
  expect(test1.root3).toBe("ס");
});
