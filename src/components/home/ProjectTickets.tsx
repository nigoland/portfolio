import { getPosts } from "@/utils/utils";
import styles from "./ProjectTickets.module.scss";

export function ProjectTickets() {
  const posts = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );
  const featured = posts.slice(0, 2);

  if (!featured.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.dashedDivider} />

      <div className={styles.heading}>
        <p className={styles.title}>Projects</p>
        <p className={styles.subtitle}>Selected work, from problem to shipped product.</p>
      </div>

      <div className={styles.grid}>
        {featured.map((post) => (
          <a key={post.slug} className={styles.ticket} href={`/work/${post.slug}`}>
            {post.metadata.caseStudyYear && (
              <p className={styles.ticketMeta}>Case Study {post.metadata.caseStudyYear}</p>
            )}
            <p className={styles.ticketTitle}>{post.metadata.shortTitle || post.metadata.title}</p>
            <p className={styles.ticketDescription}>
              {post.metadata.ticketSummary || post.metadata.summary}
            </p>
            <p className={styles.ticketCta}>View Case Study</p>
          </a>
        ))}
      </div>
    </section>
  );
}
