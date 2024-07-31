import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";
import Product from "./pages/Product/Product";
import { useState } from "react";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AppPage from "./pages/AppPage/AppPage";

function App() {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <Login isLogined={isLogined} setIsLogined={setIsLogined} />
            }
          />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
