import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function PinDetails() {

    const location = useLocation();
    const navigate = useNavigate();
    const pin = location.state?.pin;

    function handleSave() {
        axios.post("http://localhost:10000/savedImages", {
            image: pin.urls.regular,
            title: pin.alt_description || "Beautiful Photo",
            photographer: pin.user.name
        })
            .then((response) => {
                console.log(response.data);
                alert("Image saved!");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function handleDownload() {
        try {
            await axios.get(pin.links.download_location, {
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
                }
            });

            window.open(pin.urls.full, "_blank");
        } catch (error) {
            console.log(error);
        }
    }

    if (!pin) {
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
                        src={pin.urls.regular}
                        alt={pin.alt_description}
                        className="pb-detail-img"
                    />
                </div>

                <div className="col-md-5 pb-detail-info-col">

                    <h1 className="mb-2">
                        {pin.alt_description || "Beautiful Photo"}
                    </h1>

                    <p className="pb-detail-meta">
                        Photo by <strong>{pin.user.name}</strong>
                    </p>

                    <hr className="pb-divider" />

                    <div className="pb-detail-actions">
                        <button className="pb-btn-accent" onClick={handleSave}>
                            ♡ Save Pin
                        </button>

                        <button className="pb-btn-download" onClick={handleDownload}>
                            ↓ Download
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default PinDetails;