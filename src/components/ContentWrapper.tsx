import styles from '../styles/components/ContentWrapper.module.scss';

export const ContentWrapper: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export const UndoWrapForScroll: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className={styles.undoWrapForScroll}>{props.children}</div>;
};
