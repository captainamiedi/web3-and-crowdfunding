import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Exchange from "../Pages/Exchange/Exchange";
import HomePage from "../Pages/HomePage";


  const RouteComponent = () => {
      return (
          <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="exchange" element={<Exchange />} />
            </Routes>
          </BrowserRouter>
      )
  }

export default RouteComponent