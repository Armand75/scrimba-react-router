import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import {getVans} from "../../api"

function Vans() {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const filterdVans = vans.filter((van) => van.type === typeFilter);

  
  console.log(vans);

  const types = vans.map((van) => van.type);
  const vanTypes = [...new Set(types)];


  


  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function vansElement(vans) {
    return (
      <div className="vans-list">
        {vans.map((van) => (
          <Link
            to={`${van.id}`}
            state={{ search: searchParams.toString(), type: typeFilter }}
          >
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

  return (
    <div className="vans">
      <h1>Explore our van options</h1>
      
      
        <div className="types">
          {vanTypes.map((type) => (
            <div
              className={`van-type ${typeFilter === type && `${type}`}`}
              onClick={() => handleFilterChange("type", type)}
            >
              {type}
            </div>
          ))}
          {typeFilter && (
            <div
              className="clear-filters"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear filters
            </div>
          )}
        </div>
      
      
        {filterdVans.length > 0 ? vansElement(filterdVans) : vansElement(vans)}
    </div>
  );
}

export default Vans;

export function loader() {
  return getVans();
}
