import { Link } from "react-router-dom";

const featuredMaterials = [
  {
    name: "Reclaimed Red Bricks",
    category: "Masonry",
    quantity: "1,200 pieces",
    condition: "Good",
    location: "Austin, TX",
    availability: "Available",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Surplus Ceramic Tiles",
    category: "Finishes",
    quantity: "85 boxes",
    condition: "New",
    location: "Denver, CO",
    availability: "Available",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Structural Timber Beams",
    category: "Timber",
    quantity: "24 beams",
    condition: "Excellent",
    location: "Portland, OR",
    availability: "Available",
    image:
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=900&q=80",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "List",
    description:
      "Add surplus construction materials from a project, renovation, or demolition.",
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Browse available materials and find useful resources near your next project.",
  },
  {
    number: "03",
    title: "Reuse",
    description:
      "Connect materials with another project instead of sending them to waste.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <span className="eyebrow">Construction materials, reused</span>

            <h1>Give surplus materials another useful life.</h1>

            <p className="hero-description">
              SustainX helps people and projects list, discover, and reuse
              surplus construction materials before they become waste.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/marketplace">
                Browse materials
              </Link>

              <Link className="button button-outline" to="/post-material">
                List surplus material
              </Link>
            </div>

            <div className="hero-platform-note">
              <span className="status-dot"></span>
              <span>Prototype marketplace for practical material reuse</span>
            </div>
          </div>

          <div className="home-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1503387762-592f51f7e7d1?auto=format&fit=crop&w=1200&q=85"
              alt="Construction materials and building supplies"
            />

            <div className="hero-image-card">
              <span className="hero-image-card-label">
                Reuse opportunity
              </span>

              <strong>Materials ready for a second project</strong>

              <span className="hero-image-card-location">
                Browse by material, condition, and location
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section problem-section">
        <div className="container problem-grid">
          <div>
            <span className="eyebrow">The problem</span>

            <h2>Good materials are often lost between projects.</h2>
          </div>

          <div className="problem-copy">
            <p>
              Construction, renovation, and demolition projects regularly
              leave behind usable materials. At the same time, finding small
              quantities of affordable, reusable materials can be difficult.
            </p>

            <p>
              SustainX creates a simple connection between surplus materials
              and the people who can use them next.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section works-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">How SustainX works</span>

              <h2>A practical path from surplus to reuse.</h2>
            </div>

            <p>
              The platform makes it easier to make surplus materials visible
              and easier for others to find them.
            </p>
          </div>

          <div className="works-grid">
            {howItWorks.map((step) => (
              <article className="work-card" key={step.number}>
                <span className="work-number">{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section materials-section">
        <div className="container">
          <div className="section-heading materials-heading">
            <div>
              <span className="eyebrow">Available now</span>

              <h2>Materials looking for their next project.</h2>
            </div>

            <Link className="text-link" to="/marketplace">
              View marketplace <span>→</span>
            </Link>
          </div>

          <div className="featured-materials-grid">
            {featuredMaterials.map((material) => (
              <article
                className="featured-material-card"
                key={material.name}
              >
                <img src={material.image} alt={material.name} />

                <div className="featured-material-content">
                  <div className="material-card-topline">
                    <span className="eyebrow">
                      {material.category}
                    </span>

                    <span className="availability-badge">
                      {material.availability}
                    </span>
                  </div>

                  <h3>{material.name}</h3>

                  <div className="featured-material-details">
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

                  <Link
                    className="material-detail-link"
                    to="/marketplace"
                  >
                    View material <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section impact-section">
        <div className="container impact-panel">
          <div className="impact-introduction">
            <span className="eyebrow">
              Prototype impact dashboard
            </span>

            <h2>Make reuse visible and measurable.</h2>

            <p>
              SustainX is designed to track the value created when usable
              materials are redirected toward another project.
            </p>
          </div>

          <div className="impact-metrics">
            <div className="impact-metric">
              <strong>1,250 kg</strong>

              <span>Material diverted from waste</span>

              <small>Prototype value</small>
            </div>

            <div className="impact-metric">
              <strong>24</strong>

              <span>Successful reuse matches</span>

              <small>Prototype value</small>
            </div>

            <div className="impact-metric">
              <strong>3.2 tons</strong>

              <span>Estimated new-material demand avoided</span>

              <small>Prototype value</small>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section final-cta-section">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">Take part in the reuse loop</span>

            <h2>Have materials left over? Give them another use.</h2>
          </div>

          <div className="final-cta-actions">
            <Link className="button button-primary" to="/post-material">
              List surplus material
            </Link>

            <Link className="button button-outline" to="/marketplace">
              Browse materials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
