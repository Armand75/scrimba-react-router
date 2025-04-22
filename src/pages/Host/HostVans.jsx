import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";


export function loader(){
  return getHostVans();
}

export default function HostVans() {
  const hostsVans = useLoaderData();



  return (
    <div className="host-vans">
      <h1>Your listed vans</h1>

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

    </div>
  );
}
