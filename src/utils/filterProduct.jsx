export function filterProducts(products, filters) {
  const { categories, rating, priceRange } = filters;

  return products.filter((product) => {
    const categoryMatch =
      categories.length === 0 || categories.includes(product.category);

    const ratingMatch =
      rating.length === 0 ||
      rating.some((rate) => {
        if (rate === "4★ & above") return product.rating.rate >= 4;
        if (rate === "3★ & above") return product.rating.rate >= 3;
        if (rate === "2★ & above") return product.rating.rate >= 2;
        if (rate === "1★ & above") return product.rating.rate >= 1;
        return true;
      });

    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return categoryMatch && ratingMatch && priceMatch;
  });
}
