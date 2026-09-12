import { useEffect, useState } from "react";

const defaultMaterials = [
  {
    name: "Reclaimed Red Bricks",
    category: "Masonry",
    quantity: "1,200 pieces",
    condition: "Good",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Surplus Ceramic Tiles",
    category: "Finishes",
    quantity: "85 boxes",
    condition: "New",
    location: "Denver, CO",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Structural Timber Beams",
    category: "Timber",
    quantity: "24 beams",
    condition: "Excellent",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Reclaimed Wooden Doors",
    category: "Doors & Windows",
    quantity: "12 doors",
    condition: "Good",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Unused Cement Bags",
    category: "Construction",
    quantity: "40 bags",
    condition: "New",
    location: "Phoenix, AZ",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Salvaged Stone Slabs",
    category: "Stone",
    quantity: "18 slabs",
    condition: "Excellent",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
];

function Marketplace() {
  const [materials, setMaterials] = useState(defaultMaterials);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [conditionFilter, setConditionFilter] = useState("Any condition");

  useEffect(() => {
    const savedMaterials =
      JSON.parse(localStorage.getItem("sustainxMaterials")) || [];

    setMaterials([...defaultMaterials, ...savedMaterials]);
  }, []);

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All categories" ||
      material.category === categoryFilter;

    const matchesCondition =
      conditionFilter === "Any condition" ||
      material.condition === conditionFilter;

    return matchesSearch && matchesCategory && matchesCondition;
  });

  return (
    <div className="marketplace-page">
      <section className="marketplace-header">
        <div className="container">
          <span className="eyebrow">SustainX Marketplace</span>

          <h1>Find materials ready for another project.</h1>

          <p>
            Browse surplus construction materials listed for reuse. Search by
            material, category, condition, or location.
          </p>

          <div className="marketplace-search">
            <input
              type="text"
              placeholder="Search materials..."
              aria-label="Search materials"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <select
              aria-label="Filter by category"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              <option>All categories</option>
              <option>Masonry</option>
              <option>Finishes</option>
              <option>Timber</option>
              <option>Doors & Windows</option>
              <option>Construction</option>
              <option>Stone</option>
              <option>Other</option>
            </select>

            <select
              aria-label="Filter by condition"
              value={conditionFilter}
              onChange={(event) => setConditionFilter(event.target.value)}
            >
              <option>Any condition</option>
              <option>New</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
        </div>
      </section>

      <section className="marketplace-content">
        <div className="container">
          <div className="marketplace-topline">
            <div>
              <span className="eyebrow">Available materials</span>
              <h2>Browse listings</h2>
            </div>

            <a href="/post-material" className="button button-primary">
              List a material
            </a>
          </div>

          {filteredMaterials.length > 0 ? (
            <div className="marketplace-grid">
              {filteredMaterials.map((material, index) => (
                <article
                  className="material-card"
                  key={material.id || `${material.name}-${index}`}
                >
                  <img
                    className="material-card-image"
                    src={material.image}
                    alt={material.name}
                  />

                  <div className="material-card-content">
                    <div className="material-card-topline">
                      <span className="eyebrow">{material.category}</span>

                      <span className="availability-badge">
                        Available
                      </span>
                    </div>

                    <h3>{material.name}</h3>

                    <div className="material-card-details">
                      <span>
                        <strong>Quantity</strong>
                        {material.quantity}
                      </span>

                      <span>
                        <strong>Condition</strong>
                        {material.condition}
                      </span>

                      <span>
                        <strong>Location</strong>
                        {material.location}
                      </span>
                    </div>

                    <a
                      href={`/material-details?id=${material.id || material.name}`}
                      className="button button-secondary"
                    >
                      View details
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-marketplace">
              <h3>No materials found</h3>
              <p>
                Try changing your search or filters to find available
                materials.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Marketplace;