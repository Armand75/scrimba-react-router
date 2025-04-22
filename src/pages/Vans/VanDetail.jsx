import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({params}){
  console.log(params)
  return getVans(params.id)
}

function VanDetail() {
  const location = useLocation();

    const van = useLoaderData()
  console.log(location);
 
 
const search = location.state?.search || ""
const type = location.state?.type || "all"



  return (
    <div className="van-detail">
      <Link to={`../?${search}`} relative="path">
        &larr; <span className="back">Back to {type} vans</span>
      </Link>
      
        <div className="image-description">
          <img src={van.imageUrl} alt={van.name} />
          <div className={`type ${van.type}`}>{van.type}</div>
          <h2>{van.name}</h2>
          <p>
            <span className="van-price">${van.price}</span>

            <span className="day">/day</span>
          </p>
          <p className="description">{van.description}</p>
          <button>Rent this van</button>
        </div>
    
    </div>
  );
}

export default VanDetail;
