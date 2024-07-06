import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default"; // available: default, navbar, sidebar
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Products",
    to: "/products",
    icon: <ProductsIcon className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "/about-us",
    icon: <AboutUsIcon className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <ContactIcon className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="products" element={<Products />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
