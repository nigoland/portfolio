import { cinzel, cormorantGaramond, nigolandInter } from "@/resources/nigolandFonts";
import { BatikTexture } from "./BatikTexture";
import styles from "./NigolandHeader.module.scss";

export function NigolandHeader() {
  return (
    <header
      className={`${styles.header} ${cormorantGaramond.variable} ${cinzel.variable} ${nigolandInter.variable}`}
    >
      <BatikTexture />
      <nav className={styles.pill}>
        <a className={styles.navLink} href="/">
          Home
        </a>
        <a className={styles.navLink} href="/work">
          Projects
        </a>
        <a className={styles.navLink} href="#connect">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
