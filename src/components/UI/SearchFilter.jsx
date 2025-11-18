export const SearchFilter = ({ search, setSearch, filter, setFilter}) => {

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    return (
    <section className="section-searchFilter
    container">
        <input 
        type="text" 
        placeholder="search" 
        value={search}
        onChange={handleInputChange}
        />

        <div>
            <select className="select-section">
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
    );
}