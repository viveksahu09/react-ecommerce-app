import { Badge } from "react-bootstrap";

function ActiveFilters({ filters, setFilters }) {
  const removeCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== cat),
    }));
  };

  const removeRating = (rate) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating.filter((r) => r !== rate),
    }));
  };

  const removePrice = () => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [0, 5000], // reset to default
    }));
  };
  return (
    <div className="mb-3 d-flex flex-wrap gap-2">
      {/* Categories */}
      {filters.categories.map((cat) => (
        <Badge
          bg="primary"
          key={cat}
          style={{ cursor: "pointer" }}
          onClick={() => removeCategory(cat)}
        >
          {cat} ✕
        </Badge>
      ))}

      {/* Ratings */}
      {filters.rating.map((rate) => (
        <Badge
          bg="success"
          key={rate}
          style={{ cursor: "pointer" }}
          onClick={() => removeRating(rate)}
        >
          {rate} ✕
        </Badge>
      ))}

      {/* Price */}
      {filters.priceRange[1] !== 5000 && (
        <Badge
          bg="warning"
          text="dark"
          style={{ cursor: "pointer" }}
          onClick={removePrice}
        >
          Up to ${filters.priceRange[1]} ✕
        </Badge>
      )}
    </div>
  );
}

export default ActiveFilters;
