function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="pb-search-wrapper mb-5">
      <input
        type="text"
        id="pb-search-input"
        className="pb-search-input"
        placeholder="Search for images, ideas…"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        autoComplete="off"
      />
      <button className="pb-search-btn" type="submit" aria-label="Search">
        Search
      </button>
    </form>
  );
}

export default SearchBar;