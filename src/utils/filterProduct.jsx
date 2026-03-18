export function filterProducts(products, filters) {
  const { categories, rating, priceRange } = filters;

  function matchCategory(product, filters) {
    return (
      filters.categories.length === 0 ||
      filters.categories.includes(product.category)
    );
  }

  function matchRating(product, filters) {
    return (
      filters.rating.length === 0 ||
      filters.rating.some((rate) => {
        if (rate === "4★ & above") return product.rating.rate >= 4;
        if (rate === "3★ & above") return product.rating.rate >= 3;
        if (rate === "2★ & above") return product.rating.rate >= 2;
        if (rate === "1★ & above") return product.rating.rate >= 1;
      })
    );
  }

  function matchPrice(product, filters) {
    return (
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    );
  }

  return products.filter((product) => {
    return (
      matchCategory(product, filters) &&
      matchRating(product, filters) &&
      matchPrice(product, filters)
    );
  });
 
}
