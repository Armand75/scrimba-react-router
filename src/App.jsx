import "./styles/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/Vans/About";
import Home from "./pages/Vans/Home";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";

import Host from "./pages/Host/Host";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import HostVans from "./pages/Host/HostVans";
import HostVan from "./pages/Host/HostVan";

import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"

import HostLayout from "./components/HostLayout";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route path="" element={<Host />} />
            <Route path="income" element={<HostIncome />} />

            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVan />}>
              <Route path="" element={<HostVanDetail />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>

            <Route path="reviews" element={<HostReviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
