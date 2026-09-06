import { useEffect, useState } from "react";
import axios from "axios";
import PinCard from "./PinCard";
import SearchBar from "./SearchBar";

function Mgallery() {

  const [pins, setPins] = useState([]);
  const [search, setSearch] = useState("");

  function fetchPins(query = "") {

    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      },
      params: {
        query: query || "art",
        per_page: 30
      }
    })
    .then((response) => {
      setPins(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchPins();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    fetchPins(search);
  }

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div className="masonry">
        {pins.map((pin) => (
          <PinCard key={pin.id} pin={pin} />
        ))}
      </div>
    </>
  );
}

export default Mgallery;