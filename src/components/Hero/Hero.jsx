import React from "react";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaCloudDownloadAlt } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakshi</h1>
        <p className={styles.description}>
          I'm a Frontend Developer with 3+ years of experience, specializing in building responsive web applications. Skilled in HTML, CSS, JavaScript, React, with a strong focus on performance optimization.
        </p>
        <div className={styles.contactBtn}>
        <a href="mailto:sakshikurariya2017@gmail.com"  target="_blank">
          <IoMdMail/>
        </a>
        <a href="tel:+919340290199"  target="_blank">
          < IoCall/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=9340290199"  target="_blank">
          <FaWhatsapp/>
        </a>
        <a href=" https://linkedin.com/in/sakshi-kurariya-52ba421ab"  target="_blank">
          <FaLinkedin/>
        </a>
        <a href="         https://github.com/sakshi-kurariya"  target="_blank">
          <FaGithub/>
        </a>
        <a href="  https://drive.google.com/file/d/1kVu92033RKPc7geke2vGRCl9BogjVgnG/view?usp=drive_link"  target="_blank">
          < FaCloudDownloadAlt 
          />
        </a>
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
