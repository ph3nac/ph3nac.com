import React from "react";
import styles from "./Home.module.css";

type Props = {
  children?: React.ReactNode;
};

const Home: React.FC<Props> = ({ children }) => {
  return (
  <div className={styles.home}>
    {children}
  </div>
  );
};

export default Home;
