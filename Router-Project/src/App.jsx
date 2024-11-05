import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans, { loader as vansPageLoader } from "./Components/Vans";
import VanDetails, { loader as vanDetailLoader } from "./Components/VanDetails";
import Layout from "./Components/Layout";
import HostNav from "./Components/Host/HostNav";
import DashBoard, {loader as dashboardloader} from "./Components/Host/DashBoard";
import Income from "./Components/Host/Income";
import Review from "./Components/Host/Review";
import ListedVans, {
  loader as listedVansLoader,
} from "./Components/Host/ListedVans";
import HostVanDetails, {
  loader as hostvanLoader,
} from "./Components/Host/HostVanDetails";
import VanPricing from "./Components/Host/VanPricing";
import VanPhoto from "./Components/Host/VanPhoto";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./Components/Login";
import Detail from "./Components/Host/Detail";
import NotFoundPage from "./Components/404";
import Error from "./Components/Error";
import { authenticate } from "./Components/auth";

const newRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansPageLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailLoader}
      />
      <Route path="host" errorElement={<Error />} element={<HostNav />}>
        <Route
          index
          element={<DashBoard />}
          loader= {dashboardloader}
        />
        <Route
          path="income"
          element={<Income />}
          loader= {async ({request}) => await authenticate(request)}
        />
        <Route
          path="review"
          element={<Review />}
          loader={async ({request}) => await authenticate(request)}
        />
        <Route path="vans" element={<ListedVans />}
         loader={listedVansLoader}
         errorElement={<Error />}
         
         />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          errorElement={<Error />}
          loader={hostvanLoader}
        >
          <Route index element={<Detail />} />
          <Route path="pricing" element={<VanPricing />} />
          <Route path="photo" element={<VanPhoto />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={newRouter} />
    </>
  );
}

export default App;
