import { socialLinks } from "../../data/profile";
import styles from "./MobileComingSoon.module.css";

const github = socialLinks.find((link) => link.id === "github");

export function MobileComingSoon() {
  return (
    <main className={styles.screen} aria-labelledby="mobile-coming-soon-title">
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.identity}>DZAREL ALGHIFARI</p>
          <p className={styles.edition}>01 / DESKTOP FIRST</p>
        </header>

        <div className={styles.rule} aria-hidden="true" />

        <section className={styles.message}>
          <p className={styles.status}>
            <span className={styles.statusMark} aria-hidden="true" />
            MOBILE EXPERIENCE — IN DEVELOPMENT
          </p>

          <h1 id="mobile-coming-soon-title">
            A Better Experience
            <br />
            Is Coming<span className={styles.period}>.</span>
          </h1>

          <p className={styles.description}>
            This portfolio is currently optimized for desktop screens. I&apos;m
            working on a dedicated mobile experience to make every detail feel
            just right.
          </p>

          <p className={styles.note}>
            For the best experience, please visit this portfolio on a desktop or
            laptop.
          </p>

          {github ? (
            <a
              className={styles.link}
              href={github.href}
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </section>

        <footer className={styles.footer}>
          <span>PORTFOLIO / 2026</span>
          <span className={styles.footerAccent}>DESIGNED FOR WHAT&apos;S NEXT</span>
        </footer>
      </div>
    </main>
  );
}
