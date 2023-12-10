import React from "react";
import styles from "./SliderScrollBtn.module.css";

const SliderScrollBtn = () => {
  return (
    <>

        <div className={styles.mousescroll}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <div>
            <span className={`${styles.mscrollarrows} ${styles.unu}`}></span>
            <span className={`${styles.mscrollarrows} ${styles.doi}`}></span>
          </div>
        </div>

    </>
  );
};

export default SliderScrollBtn;
