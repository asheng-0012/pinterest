import { useState } from "react";
import axios from "axios";

function CreatePin() {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        axios.post("http://localhost:10000/pins", {
            title: title,
            image: image,
            description: description
        })
            .then((response) => {
                console.log(response.data);
                alert("Pin created!");

                setTitle("");
                setImage("");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container py-5">

            <div className="pb-hero mb-4">
                <h1>Create a Pin</h1>
                <p>Share something beautiful with the world.</p>
            </div>

            <div className="pb-form-card">
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="pb-form-label" htmlFor="pin-title">
                            Title
                        </label>
                        <input
                            id="pin-title"
                            type="text"
                            className="pb-form-control"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Give your pin a title…"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label className="pb-form-label" htmlFor="pin-image-url">
                            Image URL
                        </label>
                        <input
                            id="pin-image-url"
                            type="text"
                            className="pb-form-control"
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                            placeholder="Paste an image URL…"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="pb-btn-accent w-100"
                        style={{ justifyContent: "center" }}
                    >
                        Publish Pin
                    </button>

                </form>
            </div>

        </div>
    );
}

export default CreatePin;