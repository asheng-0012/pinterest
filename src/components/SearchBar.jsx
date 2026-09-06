function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search images..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;