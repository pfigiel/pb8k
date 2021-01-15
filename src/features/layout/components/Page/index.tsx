import React from "react";
import styles from "./styles.module.scss";

interface Props {
    children: React.ReactElement[];
}

const Page = ({ children }: Props) => <div className={styles["page"]}>{children}</div>;

export default Page;
