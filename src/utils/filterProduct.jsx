export function filterProducts(products, filters) {
  const { categories, rating, price } = filters;

  return products.filter((product) => {
    const matchCategory =
      categories.length === 0 || categories.includes(product.category);

    const matchRating =
      rating.length === 0 ||
      rating.some((rate) => {
        if (rate === "4★ & above") return product.rating.rate >= 4;
        if (rate === "3★ & above") return product.rating.rate >= 3;
        if (rate === "2★ & above") return product.rating.rate >= 2;
        if (rate === "1★ & above") return product.rating.rate >= 1;
        return true;
      });

    const matchPrice =
      !price || price.length === 0 ||
      priceRange.some((range) => {
        if (range === "Under $50") return product.price < 50;
        if (range === "$50 - $100") return product.price >= 50 && product.price <= 100;
        return true;
      });

    return matchCategory && matchRating && matchPrice;
  });
}