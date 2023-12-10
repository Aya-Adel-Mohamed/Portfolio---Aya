import React from "react";
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <>
<section className={styles.loadingBg}>
<div class={styles.loader}>
                <span></span>
                <span></span>
                <span></span>
            </div>
</section>
        </>
    );
}

export default Loading;