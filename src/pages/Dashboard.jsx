import { useEffect, useState } from "react";

function Dashboard() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const savedMaterials =
      JSON.parse(localStorage.getItem("sustainxMaterials")) || [];

    setMaterials(savedMaterials);
  }, []);

  const totalMaterials = materials.length;

  const totalWeight = materials.reduce((total, material) => {
    const weightNumber = parseFloat(
      String(material.weight || "").replace(/[^0-9.]/g, "")
    );

    return total + (Number.isNaN(weightNumber) ? 0 : weightNumber);
  }, 0);

  const formattedWeight =
    totalWeight > 0
      ? `${totalWeight.toLocaleString()} kg`
      : "0 kg";

  const estimatedDemandAvoided =
    totalWeight > 0
      ? `${(totalWeight * 1.2 / 1000).toFixed(1)} tons`
      : "0 tons";

  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <div className="container">
          <span className="eyebrow">SustainX Impact</span>

          <h1>Track the impact created through material reuse.</h1>

          <p>
            See how surplus construction materials are being redirected from
            waste toward another useful project.
          </p>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="container">
          <div className="dashboard-intro">
            <div>
              <span className="eyebrow">Live prototype metrics</span>
              <h2>Reuse activity at a glance</h2>
            </div>

            <p>
              These metrics update from material listings created through the
              SustainX prototype.
            </p>
          </div>

          <div className="dashboard-metrics">
            <div className="dashboard-metric-card">
              <span className="metric-label">
                Material listed through SustainX
              </span>

              <strong>{formattedWeight}</strong>

              <small>Based on submitted material weight</small>
            </div>

            <div className="dashboard-metric-card">
              <span className="metric-label">
                Materials listed
              </span>

              <strong>{totalMaterials}</strong>

              <small>Submitted through the prototype</small>
            </div>

            <div className="dashboard-metric-card">
              <span className="metric-label">
                Successful reuse requests
              </span>

              <strong>
                {Number(localStorage.getItem("sustainxRequests")) || 0}
              </strong>
              <small>Prototype request activity</small>
            </div>

            <div className="dashboard-metric-card">
              <span className="metric-label">
                Estimated new-material demand avoided
              </span>

              <strong>{estimatedDemandAvoided}</strong>

              <small>Prototype estimate</small>
            </div>
          </div>

          <div className="dashboard-lower-grid">
            <div className="dashboard-panel">
              <span className="eyebrow">How impact is measured</span>

              <h3>From listing to measurable reuse</h3>

              <p>
                The primary impact metric is the estimated weight of usable
                construction material that is kept in circulation instead of
                being sent to waste.
              </p>

              <div className="measurement-row">
                <span>Primary metric</span>
                <strong>Material diverted from waste (kg)</strong>
              </div>

              <div className="measurement-row">
                <span>Activity metric</span>
                <strong>Materials listed</strong>
              </div>

              <div className="measurement-row">
                <span>Connection metric</span>
                <strong>Successful reuse requests</strong>
              </div>

              <div className="measurement-row">
                <span>Estimated metric</span>
                <strong>New-material demand avoided</strong>
              </div>
            </div>

            <div className="dashboard-panel dashboard-highlight">
              <span className="eyebrow">The reuse loop</span>

              <div className="reuse-loop">
                <div>
                  <span>01</span>
                  <strong>Surplus listed</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Material discovered</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Reuse request</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Material reused</strong>
                </div>
              </div>

              <p>
                Every listing creates an opportunity to connect surplus
                resources with another project and keep materials in use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;