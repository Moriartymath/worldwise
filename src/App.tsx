import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AppPage from "./pages/AppPage/AppPage";
import CitiesList, {
  loader as citiesLoader,
} from "./components/TravelInfo/CitiesList/CitiesList";
import CountriesList from "./components/TravelInfo/CountriesList/CountriesList";
import CityPreview, {
  loader as cityPreviewLoader,
} from "./components/TravelInfo/CitiesList/CityPreview/CityPreview";
import CityForm from "./components/CityForm/CityForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product />} />
      <Route id="app" path="app" element={<AppPage />} loader={citiesLoader}>
        <Route index element={<Navigate replace to="cities" />} />
        <Route path="cities" element={<CitiesList />} />
        <Route
          path="cities/:cityId"
          element={<CityPreview />}
          loader={cityPreviewLoader}
        />
        <Route path="countries" element={<CountriesList />} />
        <Route path="form" element={<CityForm />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
