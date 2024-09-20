const SearchInput = ({searchQuery,setSearchQuery})=>{
    return(
        <div>
         <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
    )
}
export default SearchInput;