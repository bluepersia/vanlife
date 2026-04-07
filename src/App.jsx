import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans.jsx";
import "./server.js";
import VanDetail from "./pages/VanDetail/VanDetail.jsx";
import HostLayout from "./pages/Host/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard/Dashboard.jsx";
import Income from "./pages/Host/Income/Income.jsx";
import HostVans from "./pages/Host/Vans/Vans.jsx";
import Reviews from "./pages/Host/Reviews/Reviews.jsx";
import HostVanDetail from "./pages/Host/VanDetail/VanDetail.jsx";
import HostVanDetails from "./pages/Host/VanDetail/Details/HostVanDetails.jsx";
import HostVanPricing from "./pages/Host/VanDetail/Pricing/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/VanDetail/Photos/HostVanPhotos.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanDetails />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
