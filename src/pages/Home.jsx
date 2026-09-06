import Mgallery from "../components/Mgallery";

function Home() {
  return (
    <div className="container py-4">

      {/* Broadsheet Masthead Hero */}
      <div className="pb-hero">
        <span className="pb-hero-kicker">Est. 2024 &nbsp;·&nbsp; Visual Discovery &nbsp;·&nbsp; Daily Edition</span>

        <h1 className="pb-hero-display">
          Discover
          <span className="pb-hero-rule" />
          Amazing Ideas
        </h1>

        <p className="pb-hero-sub">
          A curated collection of the world's most beautiful imagery,
          creative concepts, and visual inspiration — composed daily.
        </p>
      </div>

      <Mgallery />

    </div>
  );
}

export default Home;