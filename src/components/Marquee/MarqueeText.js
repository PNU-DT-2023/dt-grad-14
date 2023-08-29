import styles from './MarqueeText.module.css';

export default function MarqueeText ({ children }) {
  return (
    <div className={styles.marquee}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
