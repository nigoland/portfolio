import styles from "./FloralDivider.module.scss";

export function FloralDivider() {
  return (
    <div className={styles.divider}>
      <img
        className={styles.image}
        src="/images/nigoland/floral-border.png"
        alt=""
        aria-hidden
      />
    </div>
  );
}
