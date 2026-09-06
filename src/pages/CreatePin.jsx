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

            <h1 className="mb-4">Create a Pin</h1>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">
                        Title
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Enter pin title"
                        required
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">
                        Image URL
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                        placeholder="Paste image URL"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Create Pin
                </button>

            </form>

        </div>
    );
}

export default CreatePin;