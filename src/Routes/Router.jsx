import { createBrowserRouter } from "react-router-dom";
import From from "../Home/From/From";
import ErrorPage from "../Layouts/Error/ErrorPage";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Home/Home/Home";
import AboutUs from "../Home/AboutUs/AboutUs";
import OurProjects from "../Home/OurProjects/OurProjects";
import ContactUs from "../Home/ContactUs/ContactUs";
import Donation from "../Home/Donation/Donation";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      errorElement: <ErrorPage/>,
        children: [
            {
              path: "/",
              element: <From/>,
            },
            {
              path: "/home",
              element: <Home/>,
            },
            {
              path: "/aboutUs",
              element: <AboutUs/>,
            },
            {
              path: "/ourProjects",
              element: <OurProjects/>,
            },
            {
              path: "/donation",
              element: <Donation/>,
            },
            {
              path: "/contactUs",
              element: <ContactUs/>,
            },

          ],
    },
  ]);

  
  export default Routes;