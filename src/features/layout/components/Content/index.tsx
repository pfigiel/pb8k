import React from "react";
import styles from "./styles.module.scss";

interface Props {
    children: React.ReactElement;
}

const Content = ({ children }: Props) => {
    return <div className={styles["content"]}>{children}</div>;
};

export default Content;
