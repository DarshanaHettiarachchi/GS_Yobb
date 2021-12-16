export const sortByPriceAscending = (productListJsonString) => {
  const sortedProductArray = [...JSON.parse(productListJsonString)].sort(
    (productOne, productTwo) =>
      productOne.price !== productTwo.price
        ? +productOne.price - +productTwo.price
        : productOne.name.trim().localeCompare(productTwo.name.trim())
  );

  return JSON.stringify(sortedProductArray);
};
