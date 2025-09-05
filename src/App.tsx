import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/hooks/useAuth";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import ImagePreloader from "@/components/ImagePreloader";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Daikin from "./pages/brands/Daikin";
import MitsubishiHeavy from "./pages/brands/MitsubishiHeavy";
import Carrier from "./pages/brands/Carrier";
import Voltas from "./pages/brands/Voltas";
import Amstrad from "./pages/brands/Amstrad";
import Midea from "./pages/brands/Midea";
import Godrej from "./pages/brands/Godrej";
import Cruise from "./pages/brands/Cruise";
import InverterSplitAC from "./pages/products/InverterSplitAC";
import WindowAC from "./pages/products/WindowAC";
import CassetteAC from "./pages/products/CassetteAC";
import VRVSystem from "./pages/products/VRVSystem";
import WaterCooler from "./pages/products/WaterCooler";
import PortableAC from "./pages/products/PortableAC";
import SolarWaterHeater from "./pages/products/SolarWaterHeater";
import AlkalineRO from "./pages/products/AlkalineRO";
import ChillerSystem from "./pages/products/ChillerSystem";
import NonInverterSplitAC from "./pages/products/NonInverterSplitAC";
import FloorStandingAC from "./pages/products/FloorStandingAC";
import HeatPump from "./pages/products/HeatPump";
import AirPurifier from "./pages/products/AirPurifier";
import VentilationHRV from "./pages/products/VentilationHRV";
import DuctableAC from "./pages/products/DuctableAC";
import ColdRoom from "./pages/products/ColdRoom";
import AHUSystem from "./pages/products/AHUSystem";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

const queryClient = new QueryClient();

const App = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    // Check if this is the first load of the session
    return !sessionStorage.getItem('hasLoaded');
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    setIsFirstLoad(false);
  };

  if (isFirstLoad) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HelmetProvider>
          <AuthProvider>
            <BrowserRouter>
            <ScrollToTop />
            <ImagePreloader />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/products" element={<Products />} />
              <Route path="/brands/daikin" element={<Daikin />} />
              <Route path="/brands/mitsubishi-heavy" element={<MitsubishiHeavy />} />
              <Route path="/brands/carrier" element={<Carrier />} />
              <Route path="/brands/voltas" element={<Voltas />} />
              <Route path="/brands/amstrad" element={<Amstrad />} />
              <Route path="/brands/midea" element={<Midea />} />
              <Route path="/brands/godrej" element={<Godrej />} />
              <Route path="/brands/cruise" element={<Cruise />} />
              <Route path="/products/inverter-split-ac" element={<InverterSplitAC />} />
              <Route path="/products/window-ac" element={<WindowAC />} />
              <Route path="/products/cassette-ac" element={<CassetteAC />} />
              <Route path="/products/vrv-system" element={<VRVSystem />} />
              <Route path="/products/water-cooler" element={<WaterCooler />} />
              <Route path="/products/portable-ac" element={<PortableAC />} />
              <Route path="/products/solar-water-heater" element={<SolarWaterHeater />} />
              <Route path="/products/alkaline-ro" element={<AlkalineRO />} />
              <Route path="/products/chiller-system" element={<ChillerSystem />} />
              <Route path="/products/non-inverter-split-ac" element={<NonInverterSplitAC />} />
              <Route path="/products/floor-standing-ac" element={<FloorStandingAC />} />
              <Route path="/products/heat-pump" element={<HeatPump />} />
              <Route path="/products/air-purifier" element={<AirPurifier />} />
              <Route path="/products/ventilation-hrv" element={<VentilationHRV />} />
              <Route path="/products/ductable-ac" element={<DuctableAC />} />
              <Route path="/products/cold-room" element={<ColdRoom />} />
              <Route path="/products/ahu-system" element={<AHUSystem />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </BrowserRouter>
          </AuthProvider>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
