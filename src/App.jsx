import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/home"));
const OurInspiration = lazy(() => import("./pages/our-inspiration"));
const AboutUs = lazy(() => import("./pages/about-us"));
const Careers = lazy(() => import("./pages/careers"));
const WasteManagement = lazy(() => import("./pages/waste-management"));
const HealthCare = lazy(() => import("./pages/HealthCare"));
const StartUpProject = lazy(() => import("./pages/StartupProject"));
const StartUpProjectAbout = lazy(() => import("./pages/StartUpProjectAbout"));
const HealthCareAbout = lazy(() => import("./pages/HealthCareAbout"));
const AssetManagment = lazy(() => import("./pages/Hospitality/AssetManagment"));
const HotelManagment = lazy(() =>
  import("./pages/Hospitality/HotelManagement")
);
const SportsManagment = lazy(() =>
  import("./pages/Hospitality/SportsManagement")
);

export default function App() {
  return (
    
      <Layout>
        <Suspense fallback={<p> Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-inspiration" element={<OurInspiration />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />

            <Route path="/waste-management" element={<WasteManagement />} />
            <Route path="/health-care" element={<HealthCare />} />
            <Route
              path="/health-care/about/:equipmentname"
              element={<HealthCareAbout />}
            />
            <Route path="/startup-project" element={<StartUpProject />} />
            <Route
              path="/startup-project/about/:equipmentname"
              element={<StartUpProjectAbout />}
            />
            <Route
              path="/hospitality/assetManagement"
              element={<AssetManagment />}
            />
            <Route
              path="/hospitality/hotelManagement"
              element={<HotelManagment />}
            />
            <Route
              path="/hospitality/sportsManagement"
              element={<SportsManagment />}
            />
          </Routes>
        </Suspense>
      </Layout>
    
  );
}
