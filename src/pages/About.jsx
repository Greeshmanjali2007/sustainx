function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="container">
          <span className="eyebrow">About SustainX</span>

          <h1>Keeping useful construction materials in circulation.</h1>

          <p>
            SustainX is a digital reuse platform designed to connect surplus
            construction materials with people and projects that can use them.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-story">
            <div>
              <span className="eyebrow">Why SustainX exists</span>

              <h2>
                Surplus does not always mean waste.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Construction, renovation, and demolition projects can leave
                behind materials that are still usable. At the same time,
                another project may need exactly those materials.
              </p>

              <p>
                SustainX creates a simple digital connection between the two:
                people can list surplus materials, others can discover them,
                and usable resources can stay in circulation for longer.
              </p>
            </div>
          </div>

          <div className="about-principles">
            <div className="about-principle">
              <span>01</span>

              <h3>Reuse first</h3>

              <p>
                We make existing materials easier to discover before new
                materials are purchased.
              </p>
            </div>

            <div className="about-principle">
              <span>02</span>

              <h3>Make impact measurable</h3>

              <p>
                Material reuse can be tracked through quantities, weight,
                successful matches, and estimated demand avoided.
              </p>
            </div>

            <div className="about-principle">
              <span>03</span>

              <h3>Connect real needs</h3>

              <p>
                The platform focuses on creating useful connections between
                surplus materials and potential users.
              </p>
            </div>
          </div>

          <div className="about-flow">
            <div className="about-flow-heading">
              <span className="eyebrow">The SustainX approach</span>

              <h2>From surplus to another useful project.</h2>
            </div>

            <div className="about-flow-steps">
              <div>
                <span>List</span>
                <p>Share available surplus materials.</p>
              </div>

              <div>
                <span>Discover</span>
                <p>Find materials by type, condition, and location.</p>
              </div>

              <div>
                <span>Connect</span>
                <p>Request materials for another suitable project.</p>
              </div>

              <div>
                <span>Measure</span>
                <p>Track the material kept in circulation.</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <div>
              <span className="eyebrow">Start reusing</span>

              <h2>Give surplus materials another useful life.</h2>
            </div>

            <div className="about-cta-actions">
              <a href="/marketplace" className="button button-primary">
                Browse marketplace
              </a>

              <a href="/post-material" className="button button-outline">
                List material
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;