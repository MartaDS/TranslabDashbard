import Dashboard from "views/Dashboard/Dashboard.jsx";
import Tracking from "views/Tracking/Tracking.jsx";
import Dashboard1 from "views/Dashboard/Dashboard1.jsx";
import Tracking1 from "views/Tracking/Tracking1.jsx";
import Dashboard2 from "views/Dashboard/Dashboard2.jsx";
import Tracking2 from "views/Tracking/Tracking2.jsx";
import Dashboard3 from "views/Dashboard/Dashboard3.jsx";
import Tracking3 from "views/Tracking/Tracking3.jsx";
import Dashboard4 from "views/Dashboard/Dashboard4.jsx";
import Tracking4 from "views/Tracking/Tracking4.jsx";

// @material-ui/icons
import Assessment from "@material-ui/icons/Assessment";
import Timeline from "@material-ui/icons/Timeline";
// import ContentPaste from "@material-ui/icons/ContentPaste";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "MLS Performance",
    icon: Assessment,
    component: Dashboard
  },
  {
    path: "/dashboard1",
    name: "GLS Performance",
    icon: Assessment,
    component: Dashboard1
  },
  {
    path: "/dashboard2",
    name: "GC Performance",
    icon: Assessment,
    component: Dashboard2
  },
  {
    path: "/dashboard3",
    name: "ALC Performance",
    icon: Assessment,
    component: Dashboard3
  },
  {
    path: "/dashboard4",
    name: "BRS Performance",
    icon: Assessment,
    component: Dashboard4
  },
   {
    path: "/tracking",
    name: "MLS Tracking",
    icon: Timeline,
    component: Tracking
  },
  {
    path: "/tracking1",
    name: "GLS Tracking",
    icon: Timeline,
    component: Tracking1
  },
  {
    path: "/tracking2",
    name: "GC Tracking",
    icon: Timeline,
    component: Tracking2
  },
  {
    path: "/tracking3",
    name: "ALC Tracking",
    icon: Timeline,
    component: Tracking3
  },
  {
    path: "/tracking4",
    name: "BRS Tracking",
    icon: Timeline,
    component: Tracking4
  },
  {
    redirect: true,
    path: "/",
    pathTo: "/dashboard",
    name: "Performance"
  }
];
export default dashRoutes;
