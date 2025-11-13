import React from "react";
import styles from "./Sale.module.css";

export const Sale = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>T4U</div>
        <input
          type="text"
          className={styles["search-input"]}
          placeholder="Search"
        />
      </div>
    </div>
  );
};