import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const defaultMaterials = [
  {
    name: "Reclaimed Red Bricks",
    category: "Masonry",
    quantity: "1,200 pieces",
    condition: "Good",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=85",
    description:
      "Good-quality reclaimed bricks recovered from a renovation project. The bricks are suitable for landscaping, walls, pathways, garden structures, and other suitable construction applications.",
    weight: "Approx. 2,400 kg",
  },
  {
    name: "Surplus Ceramic Tiles",
    category: "Finishes",
    quantity: "85 boxes",
    condition: "New",
    location: "Denver, CO",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85",
    description:
      "Unused ceramic tiles available from a completed construction project. Suitable for floors, walls, kitchens, bathrooms, and other finishing applications.",
    weight: "Approx. 850 kg",
  },
  {
    name: "Structural Timber Beams",
    category: "Timber",
    quantity: "24 beams",
    condition: "Excellent",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1200&q=85",
    description:
      "Strong structural timber beams recovered from a previous project and suitable for further construction or structural applications.",
    weight: "Approx. 1,800 kg",
  },
  {
    name: "Reclaimed Wooden Doors",
    category: "Doors & Windows",
    quantity: "12 doors",
    condition: "Good",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    description:
      "Reclaimed wooden doors recovered from a renovation project. Suitable for reuse in homes, offices, studios, and other suitable spaces.",
    weight: "Approx. 420 kg",
  },
  {
    name: "Unused Cement Bags",
    category: "Construction",
    quantity: "40 bags",
    condition: "New",
    location: "Phoenix, AZ",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    description:
      "Unused cement bags left over from a construction project and available for another suitable construction application.",
    weight: "Approx. 2,000 kg",
  },
  {
    name: "Salvaged Stone Slabs",
    category: "Stone",
    quantity: "18 slabs",
    condition: "Excellent",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    description:
      "High-quality salvaged stone slabs recovered from a previous project. Suitable for countertops, flooring, landscaping, and other applications.",
    weight: "Approx. 1,500 kg",
  },
];

function MaterialDetails() {
  const [material, setMaterial] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    const queryString = hash.includes("?")
      ? hash.substring(hash.indexOf("?"))
      : "";

    const searchParams = new URLSearchParams(queryString);
    const materialId = searchParams.get("id");

    const savedMaterials =
      JSON.parse(localStorage.getItem("sustainxMaterials")) || [];

    const allMaterials = [...defaultMaterials, ...savedMaterials];

    const foundMaterial = allMaterials.find(
      (item) =>
        String(item.id) === materialId ||
        item.name === materialId
    );

    if (foundMaterial) {
      setMaterial({
        ...foundMaterial,
        description:
          foundMaterial.description ||
          "This surplus construction material is available for reuse and may help another project avoid purchasing new materials.",
        weight:
          foundMaterial.weight || "Weight provided by the lister",
      });
    }
  }, []);

  if (!material) {
    return (
      <div className="material-details-page">
        <section className="material-details-section">
          <div className="container">
            <Link to="/marketplace" className="back-link">
              ← Back to marketplace
            </Link>

            <div className="submission-success">
              <h2>Material not found</h2>

              <p>
                This material listing could not be found. Please return to
                the marketplace and choose another listing.
              </p>

              <Link to="/marketplace" className="button button-primary">
                Browse marketplace
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function handleRequest() {
    const currentRequests =
      Number(localStorage.getItem("sustainxRequests")) || 0;

    localStorage.setItem(
      "sustainxRequests",
      String(currentRequests + 1)
    );

    alert("Material request submitted successfully!");
  }

  return (
    <div className="material-details-page">
      <section className="material-details-section">
        <div className="container">
          <Link to="/marketplace" className="back-link">
            ← Back to marketplace
          </Link>

          <div className="material-details-grid">
            <div className="material-details-image">
              <img src={material.image} alt={material.name} />
            </div>

            <div className="material-details-info">
              <span className="eyebrow">{material.category}</span>

              <h1>{material.name}</h1>

              <span className="availability-badge">
                Available for reuse
              </span>

              <p className="material-description">
                {material.description}
              </p>

              <div className="material-info-grid">
                <div>
                  <span>Quantity</span>
                  <strong>{material.quantity}</strong>
                </div>

                <div>
                  <span>Condition</span>
                  <strong>{material.condition}</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>{material.location}</strong>
                </div>

                <div>
                  <span>Estimated weight</span>
                  <strong>{material.weight}</strong>
                </div>
              </div>

              <div className="reuse-impact">
                <span className="eyebrow">Reuse impact</span>

                <p>
                  Reusing this material can help avoid sending usable
                  construction resources to waste and reduce demand for new
                  materials.
                </p>
              </div>

              <button
                className="button button-primary request-button"
                onClick={handleRequest}
              >
                Request this material
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MaterialDetails;