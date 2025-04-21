import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";


export default function HostVan() {
  const [hostsVan, setHostsVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostsVan(data.vans[0]));
    setLoading(false);
  }, [params]);
  console.log(hostsVan);
  return (
    <div className="host-van">
      <Link to=".." relative="path">
        &larr; <span className="back">Back to all vans</span>
      </Link>
      <div className="host-van-details-container">
        {loading && <div className="loader"></div>}
        {hostsVan && (
          <>
            <div className="host-van-details">
            <img src={hostsVan.imageUrl} alt={hostsVan.name} />
            <div className="host-van-name-type">
              <div className={`type ${hostsVan.type}`}>{hostsVan.type}</div>
              <h2>{hostsVan.name}</h2>
              <p>
                <span className="van-price">${hostsVan.price}</span>
                <span className="day">/day</span>
              </p>
            </div>
          </div>
          <div className="host-van-detail-layout">
              <ul>
                <li>
                  <NavLink
                    to=""
                    end={true}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="pricing"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="Photos"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Photos
                  </NavLink>
                </li>
              </ul>
            </div>
            <Outlet context={{hostsVan}} />
          </>
          
          
        )}
      </div>
    </div>
  );
}
