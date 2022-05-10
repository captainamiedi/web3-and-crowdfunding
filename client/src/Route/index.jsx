import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import CrowdFunding from "../Pages/CrowdFunding";
import Exchange from "../Pages/Exchange/Exchange";
import HomePage from "../Pages/HomePage";


  const RouteComponent = () => {
      return (
          <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="exchange" element={<Exchange />} />
                <Route path="crowdfunding" element={<CrowdFunding />} />
            </Routes>
          </BrowserRouter>
      )
  }

export default RouteComponent