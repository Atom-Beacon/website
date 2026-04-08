import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index.tsx";
import News from "./pages/News.tsx";
import Learn from "./pages/Learn.tsx";
import Blog from "./pages/Blog.tsx";
import Business from "./pages/Business.tsx";
import Kids from "./pages/Kids.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Cookies from "./pages/Cookies.tsx";
import Accessibility from "./pages/Accessibility.tsx";
import NotFound from "./pages/NotFound.tsx";

// Learn sub-pages
import WhatIsNuclearEnergy from "./pages/learn/WhatIsNuclearEnergy.tsx";
import HowPlantsWork from "./pages/learn/HowPlantsWork.tsx";
import Safety from "./pages/learn/Safety.tsx";
import Environment from "./pages/learn/Environment.tsx";
import ReactorTypes from "./pages/learn/ReactorTypes.tsx";
import FuelAndWaste from "./pages/learn/FuelAndWaste.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/what-is-nuclear-energy" element={<WhatIsNuclearEnergy />} />
            <Route path="/learn/how-plants-work" element={<HowPlantsWork />} />
            <Route path="/learn/safety" element={<Safety />} />
            <Route path="/learn/environment" element={<Environment />} />
            <Route path="/learn/reactor-types" element={<ReactorTypes />} />
            <Route path="/learn/fuel-and-waste" element={<FuelAndWaste />} />
            <Route path="/business" element={<Business />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
