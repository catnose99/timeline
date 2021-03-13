import styles from '../styles/components/HomeHero.module.scss';
import { TwitterIcon } from './TwitterIcon';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.svg" alt="Hello" width={51} height={58} />
      <h1 className={styles.title}>Hi, I'm catnose</h1>
      <p className={styles.description}>
        Designer, developer, maker, dog &amp; cat lover. Currently working on{' '}
        <a href="https://zenn.dev">zenn.dev</a> with{' '}
        <a href="https://classmethod.jp">Classmethod</a>. Follow{' '}
        <a href="https://twitter.com/catnose99">
          @catnose99
          <TwitterIcon width={18} height={18} />
        </a>{' '}
        for daily updates.
      </p>
    </div>
  );
};
