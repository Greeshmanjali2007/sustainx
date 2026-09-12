import { useState } from "react";

function PostMaterial() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    condition: "",
    quantity: "",
    weight: "",
    location: "",
    description: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const existingMaterials =
      JSON.parse(localStorage.getItem("sustainxMaterials")) || [];

    const newMaterial = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      condition: formData.condition,
      quantity: formData.quantity,
      weight: formData.weight,
      location: formData.location,
      description: formData.description,
      image:
        "https://images.unsplash.com/photo-1503387762-592f51f7e7d1?auto=format&fit=crop&w=900&q=80",
    };

    localStorage.setItem(
      "sustainxMaterials",
      JSON.stringify([...existingMaterials, newMaterial])
    );

    setSubmitted(true);

    setFormData({
      name: "",
      category: "",
      condition: "",
      quantity: "",
      weight: "",
      location: "",
      description: "",
    });
  }

  function addAnotherMaterial() {
    setSubmitted(false);
  }

  return (
    <div className="post-material-page">
      <section className="post-material-header">
        <div className="container">
          <span className="eyebrow">List surplus material</span>

          <h1>Give your unused materials another useful life.</h1>

          <p>
            Add details about surplus construction materials so they can be
            discovered and reused by another project.
          </p>
        </div>
      </section>

      <section className="post-material-content">
        <div className="container">
          <div className="post-material-card">
            {submitted ? (
              <div className="submission-success">
                <span className="eyebrow">Listing submitted</span>

                <h2>Your material has been added successfully.</h2>

                <p>
                  The listing is now saved and will be available in the
                  SustainX Marketplace.
                </p>

                <button
                  className="button button-primary"
                  onClick={addAnotherMaterial}
                >
                  Add another material
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span className="eyebrow">Material information</span>

                  <h2>Create a material listing</h2>

                  <p>
                    Provide enough information for others to understand what
                    is available.
                  </p>
                </div>

                <form className="material-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Material name</label>

                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Reclaimed red bricks"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="category">Category</label>

                      <select
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select category</option>
                        <option>Masonry</option>
                        <option>Finishes</option>
                        <option>Timber</option>
                        <option>Doors & Windows</option>
                        <option>Construction</option>
                        <option>Stone</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="condition">Condition</label>

                      <select
                        id="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select condition</option>
                        <option>New</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>

                      <input
                        id="quantity"
                        type="text"
                        placeholder="e.g. 1,200 pieces"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="weight">Estimated weight</label>

                      <input
                        id="weight"
                        type="text"
                        placeholder="e.g. 2,400 kg"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>

                    <input
                      id="location"
                      type="text"
                      placeholder="City or area"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>

                    <textarea
                      id="description"
                      rows="5"
                      placeholder="Describe the material, its condition, and possible reuse..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="image">Material image</label>

                    <input id="image" type="file" accept="image/*" />
                  </div>

                  <div className="form-submit-area">
                    <button type="submit" className="button button-primary">
                      Publish material listing
                    </button>

                    <p>
                      Your listing will help connect surplus material with
                      another potential project.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostMaterial;