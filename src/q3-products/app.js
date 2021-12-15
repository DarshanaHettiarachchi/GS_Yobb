export const sortByPriceAscending = (productListJsonString) => {
  const parsedProductArray = JSON.parse(productListJsonString);
  const sortedProductArray = [...parsedProductArray].sort(
    (productOne, productTwo) => {
      if (productOne.price !== productTwo.price) {
        return +productOne.price - +productTwo.price;
      }
      return productOne.name.trim().localeCompare(productTwo.name.trim());
    }
  );

  return JSON.stringify(sortedProductArray);
};

const runSorting = () => {
  console.info(
    "without same price - Before sort =>",
    '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
  );
  console.info(
    "sorted => ",
    sortByPriceAscending(
      '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
    )
  );

  console.info(
    "with same price - Before sort =>",
    '[{"name":"eggs","price": 1},{"name":"apple","price":1},{"name":"rice","price":4.04}]'
  );
  console.info(
    "sorted => ",
    sortByPriceAscending(
      '[{"name":"eggs","price": 1},{"name":"apple","price":1},{"name":"rice","price":4.04}]'
    )
  );
};

runSorting();
