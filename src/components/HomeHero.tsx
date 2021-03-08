import styles from '../styles/components/HomeHero.module.scss';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/paw.svg" alt="" width={51} height={58} />
      <h1 className={styles.title}>Hi, I'm catnose</h1>
      <p className={styles.description}>
        UI designer, frontend developer, dog and cat lover. Currently at
        Classmethod to build zenn.dev.
      </p>
    </div>
  );
};
