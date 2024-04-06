import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=IT"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        IT
      </Link>
      <Link href="/blog?cat=ENTC" className={`${styles.categoryItem} ${styles.fashion}`}>
        ENTC
      </Link>
      <Link href="/blog?cat=MECH" className={`${styles.categoryItem} ${styles.food}`}>
        MECH
      </Link>
      <Link href="/blog?cat=ELECTRICAL" className={`${styles.categoryItem} ${styles.travel}`}>
        ELECTRICAL
      </Link>
      <Link href="/blog?cat=CIVIL" className={`${styles.categoryItem} ${styles.culture}`}>
        CIVIL
      </Link>
      <Link href="/blog?cat=MCA" className={`${styles.categoryItem} ${styles.coding}`}>
        MCA   
      </Link>
    </div>
  );
};

export default MenuCategories;






