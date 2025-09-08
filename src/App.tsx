import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";

// Import individual product category pages
import InverterSplitAC from "./pages/products/InverterSplitAC";
import NonInverterSplitAC from "./pages/products/NonInverterSplitAC";
import CassetteAC from "./pages/products/CassetteAC";
import FloorStandingAC from "./pages/products/FloorStandingAC";
import WindowAC from "./pages/products/WindowAC";
import PortableAC from "./pages/products/PortableAC";
import WaterCooler from "./pages/products/WaterCooler";
import AlkalineRO from "./pages/products/AlkalineRO";
import SolarWaterHeater from "./pages/products/SolarWaterHeater";
import VentilationHRV from "./pages/products/VentilationHRV";
import AirPurifier from "./pages/products/AirPurifier";
import VRVSystem from "./pages/products/VRVSystem";
import ChillerSystem from "./pages/products/ChillerSystem";
import HeatPump from "./pages/products/HeatPump";
import DuctableAC from "./pages/products/DuctableAC";
import ColdRoom from "./pages/products/ColdRoom";
import AHUSystem from "./pages/products/AHUSystem";
import DeepFreezers from "./pages/products/DeepFreezers";

// Import brand pages
import Voltas from "./pages/brands/Voltas";
import Carrier from "./pages/brands/Carrier";
import Daikin from "./pages/brands/Daikin";
import Midea from "./pages/brands/Midea";
import Amstrad from "./pages/brands/Amstrad";
import Godrej from "./pages/brands/Godrej";
import Cruise from "./pages/brands/Cruise";
import MitsubishiHeavy from "./pages/brands/MitsubishiHeavy";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HelmetProvider>
            <BrowserRouter>
              <ScrollToTop />
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:slug" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/projects" element={<Projects />} />
                  
                  {/* Individual product category routes */}
                  <Route path="/products/inverter-split-ac" element={<InverterSplitAC />} />
                  <Route path="/products/non-inverter-split-ac" element={<NonInverterSplitAC />} />
                  <Route path="/products/cassette-ac" element={<CassetteAC />} />
                  <Route path="/products/floor-standing-ac" element={<FloorStandingAC />} />
                  <Route path="/products/window-ac" element={<WindowAC />} />
                  <Route path="/products/portable-ac" element={<PortableAC />} />
                  <Route path="/products/water-cooler" element={<WaterCooler />} />
                  <Route path="/products/alkaline-ro" element={<AlkalineRO />} />
                  <Route path="/products/solar-water-heater" element={<SolarWaterHeater />} />
                  <Route path="/products/ventilation-hrv" element={<VentilationHRV />} />
                  <Route path="/products/air-purifier" element={<AirPurifier />} />
                  <Route path="/products/vrv-system" element={<VRVSystem />} />
                  <Route path="/products/chiller-system" element={<ChillerSystem />} />
                  <Route path="/products/heat-pump" element={<HeatPump />} />
                  <Route path="/products/ductable-ac" element={<DuctableAC />} />
                  <Route path="/products/cold-room" element={<ColdRoom />} />
                  <Route path="/products/ahu-system" element={<AHUSystem />} />
                  <Route path="/products/deep-freezers" element={<DeepFreezers />} />
                  
                  {/* Brand pages routes */}
                  <Route path="/brands/voltas" element={<Voltas />} />
                  <Route path="/brands/carrier" element={<Carrier />} />
                  <Route path="/brands/daikin" element={<Daikin />} />
                  <Route path="/brands/midea" element={<Midea />} />
                  <Route path="/brands/amstrad" element={<Amstrad />} />
                  <Route path="/brands/godrej" element={<Godrej />} />
                  <Route path="/brands/cruise" element={<Cruise />} />
                  <Route path="/brands/mitsubishi-heavy" element={<MitsubishiHeavy />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </BrowserRouter>
          </HelmetProvider>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
