import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import {getVan} from "../../api"
import { requireAuth } from "../../utils";


export async function loader({request, params}){
  await requireAuth(request)
  return getVan(params.id)
}


export default function HostVan() {
  const hostsVan = useLoaderData();
  console.log(hostsVan)

 
  return (
    <div className="host-van">
      <Link to=".." relative="path">
        &larr; <span className="back">Back to all vans</span>
      </Link>
      <div className="host-van-details-container">
        
          
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
          
      </div>
    </div>
  );
}
