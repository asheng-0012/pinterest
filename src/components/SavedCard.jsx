import { Link } from "react-router-dom";

function SavedCard({ image, onDelete }) {
  return (
    <Link
      to={`/saved/${image.id}`}
      state={{ image: image }}
      className="text-decoration-none text-dark"
    >
      <div className="pin-card">

        <img
          src={image.image}
          alt={image.title}
        />

        <div className="p-3">

          <h5>{image.title}</h5>

          <p className="text-muted mb-2">
            Photo by {image.photographer}
          </p>

          <button
            className="btn btn-danger"
            onClick={(event) => {
              event.preventDefault();
              onDelete(image.id);
            }}
          >
            Delete
          </button>

        </div>

      </div>
    </Link>
  );
}

export default SavedCard;