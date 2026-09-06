import { Link } from "react-router-dom";

function PinCard({ pin }) {
  return (
    <Link
      to={`/pin/${pin.id}`}
      state={{ pin: pin }}
      className="text-decoration-none"
    >
      <div className="pin-card">

        <div className="pin-card-overlay" />

        <img
          src={pin.urls.small}
          alt={pin.alt_description || "Unsplash photo"}
          loading="lazy"
        />

        <div className="pin-card-body">
          <h5>
            {pin.alt_description || "Beautiful Photo"}
          </h5>

          <p className="pin-meta">
            By {pin.user.name}
          </p>

          <span className="pin-badge">Unsplash</span>
        </div>

      </div>
    </Link>
  );
}

export default PinCard;