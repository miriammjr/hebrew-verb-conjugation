const PaalShlemimEfol = require("../paal/paal-shlemim-efol");
const test1 = new PaalShlemimEfol("ר", "ג", "ס");
const test2 = new PaalShlemimEfol("a", "b", "c");

test("tests that a is the first input in a 3-letter root", () => {
  expect(test2.root1).toBe("a");
});
test("tests that b is the second input in a 3-letter root", () => {
  expect(test2.root2).toBe("b");
});

test("tests that c is the third input in a 3-letter root", () => {
  expect(test2.root3).toBe("c");
});

// testing if hebrew letters work lol
test("tests that a is the first input in a 3-letter root", () => {
  expect(test1.root1).toBe("ר");
});
test("tests that b is the second input in a 3-letter root", () => {
  expect(test1.root2).toBe("ג");
});

test("tests that c is the third input in a 3-letter root", () => {
  expect(test1.root3).toBe("ס");
});

// testing verb conjugations
test("tests present maculine single", () => {
  expect(test1.presentMascSing()).toBe("סוֹגֵר");
});

test("tests present feminine singular", () => {
  expect(test1.presetFemSing()).toBe("סוֹגֶרֶת");
});

test("tests present masculine plural", () => {
  expect(test1.presentMascPlural()).toBe("סוֹגְרִים");
});

test("tests present feminine plural", () => {
  expect(test1.presentFemPlural()).toBe("סוֹגְרוֹת");
});
