import { Link } from "react-router-dom";

function PinCard({ pin }) {
  return (
    <Link
      to={`/pin/${pin.id}`}
      state={{ pin: pin }}
      className="text-decoration-none text-dark"
    >
      <div className="pin-card">

        <img
          src={pin.urls.small}
          alt={pin.alt_description || "Unsplash photo"}
        />

        <div className="p-3">
          <h5>
            {pin.alt_description || "Beautiful Photo"}
          </h5>

          <p className="text-muted mb-2">
            Photo by {pin.user.name}
          </p>

          <span className="badge bg-secondary">
            Unsplash
          </span>
        </div>

      </div>
    </Link>
  );
}

export default PinCard;