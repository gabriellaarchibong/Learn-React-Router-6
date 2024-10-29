import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import VanDetails from "./Components/VanDetails";
import Layout from "./Components/Layout";
import HostNav from "./Components/Host/HostNav";
import DashBoard from "./Components/Host/DashBoard";
import Income from "./Components/Host/Income";
import Review from "./Components/Host/Review";
import ListedVans from "./Components/Host/ListedVans";
import HostVanDetails from "./Components/Host/HostVanDetails";
import VanPricing from "./Components/Host/VanPricing";
import VanPhoto from "./Components/Host/VanPhoto";
import Detail from "./Components/Host/Detail";
function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element = {<About />} />
        <Route path = "vans" element = {<Vans />} />
        <Route path = "vans/:id" element = {<VanDetails />} />
        <Route path="host" element = {<HostNav />}>
          <Route index element = {<DashBoard />} />
          <Route path = "income" element = {<Income />} />
          <Route path = "review" element = {<Review />} />
          <Route path = "vans" element = {<ListedVans />} />
          <Route path="vans/:id" element = {<HostVanDetails />}>
            <Route index element = {<Detail />}/>
            <Route path="pricing" element = {<VanPricing />}/>
            <Route path="photo" element = {<VanPhoto />}/>
          </Route>
          
        </Route>
      </Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
