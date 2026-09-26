import { Fragment } from "react";
import { expertise } from "@/resources";
import styles from "./Expertise.module.scss";

export function Expertise() {
  if (!expertise.categories.length) return null;

  return (
    <section className={styles.section}>
      <span className={`${styles.borderStrip} ${styles.borderStripLeft}`} aria-hidden />
      <span className={`${styles.borderStrip} ${styles.borderStripRight}`} aria-hidden />

      <div className={styles.heading}>
        <img
          className={styles.garuda}
          src="/images/nigoland/garuda-line-art.png"
          alt=""
          aria-hidden
        />
        <p className={styles.title}>{expertise.title}</p>
        <p className={styles.subtitle}>{expertise.subtitle}</p>
      </div>

      <div className={styles.categories}>
        {expertise.categories.map((category, index) => (
          <Fragment key={category.title}>
            {index > 0 && (
              <div className={styles.medallion}>
                <img
                  className={styles.medallionIcon}
                  src="/images/nigoland/icon-nigolan-11.svg"
                  alt=""
                  aria-hidden
                />
              </div>
            )}
            <div className={styles.category}>
              <p className={styles.categoryTitle}>{category.title}</p>
              <p className={styles.categoryDescription}>{category.description}</p>
              <div className={styles.tags}>
                {category.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
