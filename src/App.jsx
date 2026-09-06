import { Routes, Route } from "react-router-dom";
import SavedImages from "./pages/SavedImages";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PinDetails from "./pages/PinDetails";
import CreatePin from "./pages/CreatePin";
import SavedPinDetails from "./pages/SavedPinDetails";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pin/:id" element={<PinDetails />} />
        <Route path="/create" element={<CreatePin />} />
        <Route path="/saved" element={<SavedImages />} />
        <Route path="/saved/:id" element={<SavedPinDetails />} />
      </Routes>
    </>
  );
}

export default App;
