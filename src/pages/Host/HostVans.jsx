import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [hostsVans, setHostsVans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostsVans(data.vans));
    setLoading(false);
  }, []);

  return (
    <div className="host-vans">
      <h1>Your listed vans</h1>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div className="host-vans-list">
          {hostsVans.map((host) => (
            <div className="host-van-element" key={host.id}>
              <Link to={host.id}>
                <img src={host.imageUrl} alt={host.name} />
                <div className="details">
                  <h2>{host.name}</h2>
                  <p>${host.price}/day</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
