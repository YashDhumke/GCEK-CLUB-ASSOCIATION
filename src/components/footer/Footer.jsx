import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/profile.jpg" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>GCEKblog</h1>
        </div>
        <p className={styles.desc}>
        Welcome to GCEK Blogs, the premier online hub for college students to share their experiences, insights, and stories with their peers. Whether you're a freshman navigating your way through campus life or a seasoned senior with a treasure trove of knowledge to impart, this blog sharing site is your creative canvas.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">IT</Link>
          <Link href="/">MECH</Link>
          <Link href="/">ENTC</Link>
          <Link href="/">CIVIL</Link>
          <Link href="/">ELECTRICAL</Link>
          <Link href="/">MCA</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>

      Footer
    </div>
  );
};

export default Footer;
