import type { JSX } from "react/jsx-runtime";
import "./App.css";
import "./css/utilities.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./server.js";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans.js";
import VanDetail from "./pages/VanDetail/VanDetail.js";
import HostLayout from "./pages/Host/HostLayout.js";
import HostDashboard from "./pages/Host/Dashboard/HostDashboard.js";
import HostIncome from "./pages/Host/Income/HostIncome.js";
import HostVans from "./pages/Host/Vans/HostVans.js";
import HostReviews from "./pages/Host/Reviews/HostReviews.js";

const queryClient = new QueryClient();

function App(): JSX.Element {
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
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="reviews" element={<HostReviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
