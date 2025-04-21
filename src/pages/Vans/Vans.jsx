import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [loading, setLoading] = useState(true);
  const [vans, setVans] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filterdVans, setFilteredVans] = useState([]);

  const types = vans.map((van) => van.type);
  const vanTypes = [...new Set(types)];

  function addFilter(type) {
    if(filters.includes(type)){
        const removedType = filters.filter((filter => filter !== type))
        setFilters(removedType);
        setFilteredVans(vans.filter((van) => removedType.includes(van.type)));
    }else{
        const addedFilter = [...filters, type]
    setFilters(addedFilter);
    setFilteredVans(vans.filter((van) => addedFilter.includes(van.type)));
    }
  }

  function vansElement(vans) {
    console.log(vans);
    return (
      <div className="vans-list">
        {vans.map((van) => (
            <Link to={`/vans/${van.id}`}>
                <div key={van.id} className="van">
            <img src={van.imageUrl} alt={van.name} />
            <div className="name-type">
              <p className="name">{van.name}</p>
              <div className={`type ${van.type}`}>{van.type}</div>
            </div>
            <p className="price">
              <span>
                ${van.price}
                <br />
                <span className="day">/day</span>
              </span>
            </p>
            
          </div>
            </Link>
          
        ))}
      </div>
    );
  }

  function clearFilters() {
    setFilters([]);
    setFilteredVans([]);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/vans");
        const result = await response.json();

        const { vans } = result;
        console.log(vans);
        setVans(vans);
      } catch (error) {
        console.log(error);
        throw new Error("Network response invalid", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="vans">
      <h1>Explore our van options</h1>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div className="types">
          {vanTypes.map((type) => (
            <div className={`van-type ${filters.includes(type) && "selected"}`} onClick={() => addFilter(type)}>
              {type}
            </div>
          ))}
          <div className="clear-filters" onClick={clearFilters}>
            Clear filters
          </div>
        </div>
      )}
      {!loading &&
        (filterdVans.length > 0 ? vansElement(filterdVans) : vansElement(vans))}
    </div>
  );
}

export default Vans;
