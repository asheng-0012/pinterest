import { useLocation, useNavigate } from "react-router-dom";

function SavedPinDetails() {

  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  if (!image) {
    return (
      <div className="container py-5">
        <div className="pb-empty">
          <div className="pb-empty-icon">🖼️</div>
          <h3>Image not found</h3>
          <p>This pin may have been removed or the link is invalid.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container pb-detail-page py-4">

      <button
        className="pb-btn-outline mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row pb-detail-row g-4">

        <div className="col-md-7 pb-detail-img-col">
          <img
            src={image.image}
            alt={image.title}
            className="pb-detail-img"
          />
        </div>

        <div className="col-md-5 pb-detail-info-col">

          <h1 className="mb-2">
            {image.title}
          </h1>

          <p className="pb-detail-meta">
            Photo by <strong>{image.photographer}</strong>
          </p>

          <hr className="pb-divider" />

          <div className="pb-detail-actions">
            <button
              className="pb-btn-download"
              onClick={() => window.open(image.image, "_blank")}
            >
              ↓ Download
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default SavedPinDetails;