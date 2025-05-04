import "./styles/App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import About from "./pages/Vans/About";
import Home from "./pages/Vans/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";

import Host, { loader as hostLoader} from "./pages/Host/Host";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVan, { loader as hostVanLoader } from "./pages/Host/HostVan";

import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

import HostLayout from "./components/HostLayout";

import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

import { requireAuth } from "./utils";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import "./server";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route
          path="login"
          loader={loginLoader}
          action={loginAction}
          element={<Login />}
        />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
          errorElement={<Error />}
        />

        <Route path="host" element={<HostLayout />}>
          <Route
            path=""
            element={<Host />}
            loader={hostLoader}
          />
          <Route
            path="income"
            element={<HostIncome />}
            loader={async ({ request }) => await requireAuth(request)}
          />

          <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
          <Route path="vans/:id" element={<HostVan />} loader={hostVanLoader} errorElement={<Error />}>
            <Route
              path=""
              element={<HostVanDetail />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async ({ request }) => await requireAuth(request)}
            />
          </Route>

          <Route
            path="reviews"
            element={<HostReviews />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}


