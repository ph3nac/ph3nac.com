import Link from "next/link";
import React from "react";
import styles from "./Layout.module.css";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout_root}>
      <header className={styles.header}>
        <Link className={styles.home} href="/">
          Home
        </Link>
        <h1 className={styles.title}>hey im ph3</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.copy_right}>&copy; 2022 ph3nac</div>
      </footer>
    </div>
  );
};

export default Layout;
