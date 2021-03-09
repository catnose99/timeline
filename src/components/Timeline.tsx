import {
  formatDate,
  getFaviconSrcFromHostname,
  getHostFromURL,
  groupByKey,
} from '../lib/helper';
import styles from '../styles/components/Timeline.module.scss';
import { Item } from '../types';

const TimelineItem: React.VFC<{ item: Item }> = ({ item }) => {
  const hostname = item.url ? getHostFromURL(item.url) : null;
  return (
    <a href={item.url || '#'} className={styles.itemLink}>
      <div className={styles.itemIcon}></div>
      <div className={styles.itemMeta}>
        {hostname && (
          <img
            src={getFaviconSrcFromHostname(hostname)}
            width={14}
            height={14}
            className={styles.itemFavicon}
          />
        )}
        <div>
          {!!item.action?.length && (
            <span className={styles.itemAction}>{item.action}</span>
          )}
          <time className={styles.itemDate}>{formatDate(item.date)}</time>
        </div>
      </div>
      <h2 className={styles.itemTitle}>{item.title}</h2>
    </a>
  );
};

export const Timeline: React.VFC<{ items: Item[] }> = ({ items }) => {
  const itemGroups = groupByKey(items, (item) => Number(item.date.slice(0, 4)));

  return (
    <section className={styles.container}>
      {itemGroups.map((group) => {
        const [year, items] = group;
        return (
          <section key={`group-${year}`}>
            <div className={styles.year}>{year}</div>
            <div className={styles.itemsContainer}>
              {items.map((item, i) => (
                <TimelineItem key={`item-${i}`} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
};
