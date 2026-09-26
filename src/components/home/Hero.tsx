import { home } from "@/resources";
import { BatikTexture } from "./BatikTexture";
import ornament from "./UkiranOrnament.module.scss";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <BatikTexture />

      <div className={`${ornament.row} ${styles.ornamentTop}`}>
        <img
          className={ornament.image}
          src="/images/nigoland/ukiran-ornament-left.png"
          alt=""
          aria-hidden
        />
        <img
          className={`${ornament.image} ${ornament.flipX}`}
          src="/images/nigoland/ukiran-ornament-left.png"
          alt=""
          aria-hidden
        />
      </div>

      <div className={styles.panel}>
        {home.eyebrow && <p className={styles.welcome}>{home.eyebrow}</p>}

        <div className={styles.logoLockup}>
          <img
            className={styles.logoGaruda}
            src="/images/nigoland/logo-garuda.svg"
            width={133}
            height={151}
            alt="Nigoland Garuda emblem"
          />
          <img
            className={styles.logoWordmark}
            src="/images/nigoland/logo-wordmark-nigoland.svg"
            width={469}
            height={55}
            alt="Nigoland"
          />
          <img
            className={styles.logoSubtitle}
            src="/images/nigoland/logo-wordmark-subtitle.svg"
            width={471}
            height={18}
            alt="Product Designer"
          />
          <img
            className={styles.logoTagline}
            src="/images/nigoland/logo-wordmark-tagline.svg"
            width={152}
            height={19}
            alt="Proudly Indonesian"
          />
        </div>

        {home.story && home.story.length > 0 && (
          <div className={styles.story}>
            {home.story.map((paragraph, index) => (
              <p key={index} className={styles.storyParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
