import styles from '../styles/components/HomeHero.module.scss';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/paw.svg" alt="Hello" width={51} height={58} />
      <h1 className={styles.title}>Hi, I'm catnose</h1>
      <p className={styles.description}>
        Designer, developer, maker, dog &amp; cat lover. Currently working on
        zenn.dev with Classmethod. Follow @catnose99 for daily updates.
      </p>
    </div>
  );
};
