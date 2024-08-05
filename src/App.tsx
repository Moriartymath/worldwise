import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginProvider } from "./contexts/LoginContext";
import Auth from "./auth/Auth";
import { Suspense, lazy } from "react";
//import CitiesList from "./components/TravelInfo/CitiesList/CitiesList";
//import CountriesList from "./components/TravelInfo/CountriesList/CountriesList";
//import CityPreview from "./components/TravelInfo/CitiesList/CityPreview/CityPreview";
const AppPage = lazy(() => import("./pages/AppPage/AppPage"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const CityForm = lazy(() => import("./components/CityForm/CityForm"));
const queryClient = new QueryClient();
const CitiesList = lazy(
  () => import("./components/TravelInfo/CitiesList/CitiesList")
);
const CountriesList = lazy(
  () => import("./components/TravelInfo/CountriesList/CountriesList")
);
const CityPreview = lazy(
  () => import("./components/TravelInfo/CitiesList/CityPreview/CityPreview")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route
        path="pricing"
        element={
          <Suspense fallback={<h1>loading</h1>}>
            <Pricing />
          </Suspense>
        }
      />
      <Route path="product" element={<Product />} />
      <Route element={<Auth />}>
        <Route
          id="app"
          path="app"
          element={
            <Suspense
              fallback={
                <div
                  style={{ height: "100%", width: "100%", background: "gray" }}
                ></div>
              }
            >
              <AppPage />
            </Suspense>
          }
        >
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CitiesList />} />
          <Route path="cities/:id" element={<CityPreview />} />
          <Route path="countries" element={<CountriesList />} />
          <Route path="form" element={<CityForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </QueryClientProvider>
  );
}

export default App;
