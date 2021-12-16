import { sortByPriceAscending } from "./q3-products/app";

const runSorting = () => {
  const beforeSortStyles =
    "display: inline-block ; border: 3px solid red ; border-radius: 7px ; " +
    "padding: 10px ; margin: 20px ;";

  const sortedStyles =
    "display: inline-block ; border: 3px solid green ; border-radius: 7px ; " +
    "padding: 10px ; margin: 20px ;";

  console.info(
    "%cwithout same price - Before sort =>",
    beforeSortStyles,
    '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
  );
  console.info(
    "%csorted => ",
    sortedStyles,
    sortByPriceAscending(
      '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
    )
  );

  console.info(
    "%cwith same price - Before sort =>",
    beforeSortStyles,
    '[{"name":"eggs","price": 1},{"name":"apple","price":1},{"name":"rice","price":4.04}]'
  );
  console.info(
    "%csorted => ",
    sortedStyles,
    sortByPriceAscending(
      '[{"name":"eggs","price": 1},{"name":"apple","price":1},{"name":"rice","price":4.04}]'
    )
  );
};

runSorting();
