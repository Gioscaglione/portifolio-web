import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css"

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Giovanna!</h1>
            <p className={styles.description}>im a fullstack developer with 5 years of experience using react and nodejs. reach out if youd like to learn more!</p>
            <a href="mailto:gioscaglione@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/my-pic.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
    );
}