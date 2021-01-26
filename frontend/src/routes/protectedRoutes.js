
import AdminPage from "components/AdminPage/AdminPage";
import Dashboard from "views/Dashboard.js";
import UserPage from "views/User.js";
import Game from "../components/game/Game";

var protectedRoutes = [
    {
        path: "/main",
        name: "Dashboard",
        icon: "nc-icon nc-bank",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/play",
        name: "Play",
        icon: "nc-icon nc-diamond",
        component: Game,
        layout: "/admin",
    },
    {
        path: "/user-page",
        name: "User Profile",
        icon: "nc-icon nc-single-02",
        component: UserPage,
        layout: "/admin",
    },
    {
        path: "/admin-page",
        name: "Admin Page",
        icon: "nc-icon nc-tie-bow",
        component: AdminPage,
        layout: "/admin",
    },
];
export default protectedRoutes;
