import { experience } from "@/resources";
import ornament from "./UkiranOrnament.module.scss";
import styles from "./Experience.module.scss";

export function Experience() {
  if (!experience.groups.length) return null;

  return (
    <section className={styles.section}>
      <div className={`${ornament.row} ${styles.seamOrnament}`}>
        <img
          className={`${ornament.seamImage} ${ornament.flipY}`}
          src="/images/nigoland/ukiran-ornament-seam-left.png"
          alt=""
          aria-hidden
        />
        <img
          className={`${ornament.seamImage} ${ornament.flipXY}`}
          src="/images/nigoland/ukiran-ornament-seam-left.png"
          alt=""
          aria-hidden
        />
      </div>

      <div className={styles.heading}>
        <p className={styles.title}>{experience.title}</p>
        <p className={styles.subtitle}>{experience.subtitle}</p>
      </div>

      <div className={styles.rows}>
        {experience.groups.map((group) => (
          <div key={group.category} className={styles.row}>
            <p className={styles.category}>{group.category}</p>
            <p className={styles.description}>{group.description}</p>
            <div className={styles.badges}>
              {group.items.map((item) => (
                <div key={item.name} className={styles.badge}>
                  <div className={styles.badgeCircle}>
                    <span className={styles.badgeRing} />
                    <span className={`${styles.badgeRing} ${styles.badgeRingInner}`} />
                    <img className={styles.badgeLogo} src={item.logo} alt={item.name} />
                  </div>
                  <p className={styles.badgeLabel}>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
