import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AppPage from "./pages/AppPage/AppPage";
import CitiesList from "./components/TravelInfo/CitiesList/CitiesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppPage />}>
            <Route index element={<CitiesList />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="countries" element={<h1>Countries route</h1>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
