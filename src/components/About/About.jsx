import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
                <br />
                <br />
Built dynamic user interfaces with React, ensuring fast load times, seamless navigation, and interactive features.
<br />
<br />
Optimized website performance by implementing code-splitting, lazy loading, and image compression, reducing page load times and improving Core Web Vitals.
<br />

              </p>
            </div>
          </li>
          
         
        </ul>
      </div>
    </section>
  );
};
