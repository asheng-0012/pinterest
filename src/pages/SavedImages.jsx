import { useEffect, useState } from "react";
import axios from "axios";
import SavedCard from "../components/SavedCard";

function SavedImages() {

    const [savedImages, setSavedImages] = useState([]);
    const [myPins, setMyPins] = useState([]);

    useEffect(() => {

        axios.get("https://pinterest-api-nw5v.onrender.com/savedImages")
            .then((response) => {
                setSavedImages(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get("https://pinterest-api-nw5v.onrender.com/pins")
            .then((response) => {
                setMyPins(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    function deleteSavedImage(id) {
        axios.delete(`https://pinterest-api-nw5v.onrender.com/savedImages/${id}`)
            .then(() => {
                setSavedImages(
                    savedImages.filter((image) => image.id !== id)
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function deleteMyPin(id) {
        axios.delete(`https://pinterest-api-nw5v.onrender.com/pins/${id}`)
            .then(() => {
                setMyPins(
                    myPins.filter((pin) => pin.id !== id)
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container py-5">

            <div className="pb-hero mb-2">
                <h1>My Pins</h1>
                <p>Your saved images and uploaded pins, all in one place.</p>
            </div>

            <hr className="pb-divider" />

            <p className="pb-section-title">Saved Images</p>

            {savedImages.length === 0 ? (
                <div className="pb-empty">
                    <div className="pb-empty-icon">📌</div>
                    <p>No saved images yet. Explore and save pins you love!</p>
                </div>
            ) : (
                <div className="masonry mb-5">
                    {savedImages.map((image) => (
                        <SavedCard
                            key={image.id}
                            image={image}
                            onDelete={deleteSavedImage}
                        />
                    ))}
                </div>
            )}

            <hr className="pb-divider" />

            <p className="pb-section-title">My Uploaded Pins</p>

            {myPins.length === 0 ? (
                <div className="pb-empty">
                    <div className="pb-empty-icon">🖼️</div>
                    <p>
                        You haven't created any pins yet.{" "}
                        <a href="/create">Create one now!</a>
                    </p>
                </div>
            ) : (
                <div className="masonry">
                    {myPins.map((pin) => (
                        <SavedCard
                            key={pin.id}
                            image={{
                                id: pin.id,
                                image: pin.image,
                                title: pin.title,
                                photographer: "You"
                            }}
                            onDelete={deleteMyPin}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default SavedImages;