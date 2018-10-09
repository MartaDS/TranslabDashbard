import Dashboard from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import LockScreenPage from "views/Pages/LockScreenPage.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
// import ContentPaste from "@material-ui/icons/ContentPaste";

var pages = [
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  },
  {
    path: "/lock-screen-page",
    name: "Logout",
    mini: "LO",
    component: LockScreenPage
  }
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    collapse: true,
    path: "-page",
    name: "Account",
    state: "openPages",
    icon: Image,
    views: pages
  },
];
export default dashRoutes;
