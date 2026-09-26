import { connect } from "@/resources";
import { cinzel, cormorantGaramond, nigolandInter } from "@/resources/nigolandFonts";
import styles from "./NigolandFooter.module.scss";

export function NigolandFooter() {
  return (
    <footer
      id="connect"
      className={`${styles.footer} ${cormorantGaramond.variable} ${cinzel.variable} ${nigolandInter.variable}`}
    >
      <img
        className={styles.artwork}
        src="/images/nigoland/book-cover-engraving.png"
        alt=""
        aria-hidden
      />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{connect.eyebrow}</p>
        <p className={styles.description}>{connect.description}</p>

        <div className={styles.openTo}>
          <p className={styles.openToLabel}>Dedi is open to:</p>
          <ul className={styles.openToList}>
            {connect.openTo.map((item) => (
              <li key={item} className={styles.openToItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.buttons}>
          <a className={styles.button} href={`mailto:${connect.email}`}>
            Email
          </a>
          <a className={styles.button} href={connect.linkedin.link} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className={styles.button} href={connect.resume.link} target="_blank" rel="noopener noreferrer">
            {connect.resume.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
