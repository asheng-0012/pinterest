import { Link } from "react-router-dom";

function SavedCard({ image, onDelete }) {
  return (
    <Link
      to={`/saved/${image.id}`}
      state={{ image: image }}
      className="text-decoration-none"
    >
      <div className="pin-card">

        <div className="pin-card-overlay" />

        <img
          src={image.image}
          alt={image.title}
          loading="lazy"
        />

        <div className="pin-card-body">

          <h5>{image.title}</h5>

          <p className="pin-meta">
            By {image.photographer}
          </p>

          <button
            className="pb-btn-danger"
            onClick={(event) => {
              event.preventDefault();
              onDelete(image.id);
            }}
          >
            Remove
          </button>

        </div>

      </div>
    </Link>
  );
}

export default SavedCard;