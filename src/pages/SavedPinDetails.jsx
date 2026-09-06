import { useLocation } from "react-router-dom";

function SavedPinDetails() {

  const location = useLocation();
  const image = location.state?.image;

  if (!image) {
    return (
      <div className="container py-5">
        <h3>Image not found</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="row">

        <div className="col-md-7">
          <img
            src={image.image}
            alt={image.title}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-5">

          <h1 className="mt-3 mt-md-0">
            {image.title}
          </h1>

          <p>
            Photo by <strong>{image.photographer}</strong>
          </p>

          <button
            className="btn btn-danger"
            onClick={() => window.open(image.image, "_blank")}
          >
            Download
          </button>

        </div>

      </div>

    </div>
  );
}

export default SavedPinDetails;