import { Suspense } from "react";
import { Link, useLoaderData, Await } from "react-router-dom";

import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return { hostVans: getHostVans() };
}

export default function HostVans() {
  const hostsVansPromiseObj = useLoaderData();

  return (
    <div className="host-vans">
      <h1>Your listed vans</h1>
      <Suspense fallback={<div className="loader"></div>}>
        <Await resolve={hostsVansPromiseObj.hostVans}>
          {(hostsVans) => {
            return (
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
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
