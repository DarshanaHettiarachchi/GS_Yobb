import { sortByPriceAscending } from "./app";

describe("sort products", () => {
  test("it can sort products with variable prices", () => {
    const productsJson =
      '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]';

    const sortedJson =
      '[{"name":"eggs","price":1},{"name":"rice","price":4.04},{"name":"coffee","price":9.99}]';

    expect(sortByPriceAscending(productsJson)).toBe(sortedJson);
  });

  test("it can sort products with same prices", () => {
    const productsJson =
      '[{"name":"eggs","price": 1},{"name":"apple","price":1},{"name":"rice","price":4.04}]';

    const sortedJson =
      '[{"name":"apple","price":1},{"name":"eggs","price":1},{"name":"rice","price":4.04}]';

    expect(sortByPriceAscending(productsJson)).toBe(sortedJson);
  });
});
