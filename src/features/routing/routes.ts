import Configurator from "features/configurator/components/Configurator";
import Dashboard from "features/dashboard/components/Dashboard";
import appRoutes from "./appRoutes";

const routes = [
    {
        exact: true,
        path: appRoutes.dashboard,
        component: Dashboard,
    },
    {
        exact: true,
        path: appRoutes.configurator,
        component: Configurator,
    },
];

export default routes;
