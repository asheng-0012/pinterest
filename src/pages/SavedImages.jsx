import { useEffect, useState } from "react";
import axios from "axios";
import SavedCard from "../components/SavedCard";

function SavedImages() {

    const [savedImages, setSavedImages] = useState([]);
    const [myPins, setMyPins] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:10000/savedImages")
            .then((response) => {
                setSavedImages(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get("http://localhost:10000/pins")
            .then((response) => {
                setMyPins(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    function deleteSavedImage(id) {
        axios.delete(`http://localhost:10000/savedImages/${id}`)
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
        axios.delete(`http://localhost:10000/pins/${id}`)
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
        <div className="container py-4">

            <h1 className="mb-5">My Pins</h1>

            <h2 className="mb-4">Saved Images</h2>

            <div className="masonry mb-5">
                {savedImages.map((image) => (
                    <SavedCard
                        key={image.id}
                        image={image}
                        onDelete={deleteSavedImage}
                    />
                ))}
            </div>

            <h2 className="mb-4">My Uploaded Pins</h2>

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

        </div>
    );
}

export default SavedImages;