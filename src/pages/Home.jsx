import Mgallery from "../components/Mgallery";

function Home() {
  return (
    <div className="container py-4">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Discover Amazing Ideas</h1>
        <p className="text-muted">
          Find inspiration and discover beautiful things.
        </p>
      </div>

      <Mgallery />

    </div>
  );
}

export default Home;