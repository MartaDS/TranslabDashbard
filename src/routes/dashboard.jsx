import Dashboard from "views/Dashboard/Dashboard.jsx";
import Tracking from "views/Tracking/Tracking.jsx";

// @material-ui/icons
import Assessment from "@material-ui/icons/Assessment";
import Timeline from "@material-ui/icons/Timeline";
// import ContentPaste from "@material-ui/icons/ContentPaste";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Performance",
    icon: Assessment,
    component: Dashboard
  },
   {
    path: "/tracking",
    name: "Tracking",
    icon: Timeline,
    component: Tracking
  }
];
export default dashRoutes;
