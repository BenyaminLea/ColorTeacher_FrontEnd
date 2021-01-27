import AdminPage from "components/AdminPage/AdminPage";
import Dashboard from "views/Dashboard.js";
import UserPage from "views/User.js";
import Game from "../components/game/Game";

var protectedAdminRoutes = [
    {
        path: "/admin-page",
        name: "Admin Page",
        icon: "nc-icon nc-tie-bow",
        component: AdminPage,
        layout: "/dash",
    },
];
export default protectedAdminRoutes;