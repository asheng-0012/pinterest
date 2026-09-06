import { useLocation } from "react-router-dom";
import axios from "axios";

function PinDetails() {

    const location = useLocation();
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
                <h3>Image not found</h3>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div className="row">

                <div className="col-md-7">
                    <img
                        src={pin.urls.regular}
                        alt={pin.alt_description}
                        className="img-fluid rounded"
                    />
                </div>

                <div className="col-md-5">

                    <h1 className="mt-3 mt-md-0">
                        {pin.alt_description || "Beautiful Photo"}
                    </h1>

                    <p>
                        Photo by <strong>{pin.user.name}</strong>
                    </p>

                    <button className="btn btn-primary me-2" onClick={handleSave}>
                        Save Image
                    </button>

                    <button className="btn btn-danger" onClick={handleDownload}>
                        Download
                    </button>

                </div>

            </div>

        </div>
    );
}

export default PinDetails;