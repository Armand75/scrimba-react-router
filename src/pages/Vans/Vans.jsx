import {
  Link,
  useSearchParams,
  useLoaderData,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";
import { Suspense } from "react";

export function loader() {
  return { vans: getVans() };
}

export default function Vans() {
  const vansPromiseObj = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

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
            key={van.id}
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
      <Suspense fallback={<div className="loader"></div>}>
        <Await resolve={vansPromiseObj.vans}>
          {(vans) => {
            const filterdVans = vans.filter((van) => van.type === typeFilter);
            const types = vans.map((van) => van.type);

            //remove types that appear more than once 
            const vanTypes = [...new Set(types)];

            return (
              <>
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
                {filterdVans.length > 0
                  ? vansElement(filterdVans)
                  : vansElement(vans)}
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}

// console
