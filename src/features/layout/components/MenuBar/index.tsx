import appRoutes from "features/routing/appRoutes";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const MenuBar = () => {
    return (
        <div className={styles["menu-bar"]}>
            <Link to={appRoutes.dashboard}>Dashboard</Link>
            <Link to={appRoutes.configurator}>Configurator</Link>
        </div>
    );
};

export default MenuBar;
