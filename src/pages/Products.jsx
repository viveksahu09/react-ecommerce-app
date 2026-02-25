import ProductCard from "../components/product/ProductCard";

function Products(product) {
  const products = [
    { id: 1, title: "Shoes" },
    { id: 2, title: "T-Shirt" },
  ];

  return (
    <>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </>
  );
}

export default Products;

