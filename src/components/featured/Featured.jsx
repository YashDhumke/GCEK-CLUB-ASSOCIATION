import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, welcome to GCEK Blogs !!</b> Discover the college stories of your frinds and alumnies.. !
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/Karad.jpeg" alt="" fill className={styles.image} />
          
        </div>
        
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Your virtual platform to connect, inspire, and share experiences </h1>
          <p className={styles.postDesc}>
          Welcome to GCEK Blogs, the premier online hub for college students to share their experiences, insights, and stories with their peers. Whether you're a freshman navigating your way through campus life or a seasoned senior with a treasure trove of knowledge to impart, this blog sharing site is your creative canvas.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
