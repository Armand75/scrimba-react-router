import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function VanDetail() {
  const params = useParams();
  console.log(params);
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params]);
  console.log(van);
  return (
    <div className="van-detail">
      <Link to="/vans" >
        &larr; <span className="back">Back to all vans</span>
      </Link>
      {!van && <div className="loader"></div>}
      {van && (
        <div className="image-description">
          <img src={van.imageUrl} alt={van.name} />
          <div className={`type ${van.type}`}>{van.type}</div>
          <h2>{van.name}</h2>
          <p >
            <span className="van-price">${van.price}</span>
            
            <span className="day">/day</span>
          </p>
          <p className="description">{van.description}</p>
          <button>Rent this van</button>
        </div>
      )}
    </div>
  );
}

export default VanDetail;
