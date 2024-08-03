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
import CitiesList from "./components/TravelInfo/CitiesList/CitiesList";
import CountriesList from "./components/TravelInfo/CountriesList/CountriesList";
import CityPreview from "./components/TravelInfo/CitiesList/CityPreview/CityPreview";
import CityForm from "./components/CityForm/CityForm";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product />} />
      <Route id="app" path="app" element={<AppPage />}>
        <Route index element={<Navigate replace to="cities" />} />
        <Route
          path="cities"
          element={<CitiesList />}
          action={async (reqObj) => {
            const data = await reqObj.request.formData();
            console.log(data.get("note"), data.get("date"), data.get("city"));
            return data;
          }}
        />
        <Route path="cities/:id" element={<CityPreview />} />
        <Route path="countries" element={<CountriesList />} />
        <Route path="form" element={<CityForm />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
