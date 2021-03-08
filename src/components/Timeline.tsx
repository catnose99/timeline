import dayjs from 'dayjs';
import {
  getFaviconSrcFromHostname,
  getHostFromURL,
  groupByKey,
} from '../lib/helper';
import styles from '../styles/components/Timeline.module.scss';
import { Item } from '../types';

type ItemsGroupByYear = {
  [year: string]: Item[];
};

const TimelineItem: React.VFC<{ item: Item }> = ({ item }) => {
  const hostname = item.url ? getHostFromURL(item.url) : null;
  return (
    <a href={item.url || '#'} className={styles.itemLink}>
      <div className={styles.itemMeta}>
        <time className={styles.itemDate}>
          {dayjs(item.date).format('MMM, D')}
        </time>
        {!!item.action?.length && (
          <span className={styles.itemAction}>{item.action}</span>
        )}
        {hostname && (
          <img
            src={getFaviconSrcFromHostname(hostname)}
            width={16}
            height={16}
            className={styles.itemFavicon}
          />
        )}
      </div>
      <div className={styles.itemMain}>
        <h2 className={styles.itemTitle}>{item.title}</h2>
      </div>
    </a>
  );
};

export const Timeline: React.VFC<{ items: Item[] }> = ({ items }) => {
  const itemGroups = groupByKey(items, (item) => Number(item.date.slice(0, 4)));

  return (
    <section className={styles.container}>
      {itemGroups.map((group) => (
        <div>
          <div className={styles.year}>{group[0]}</div>
          <div className={styles.itemsContainer}>
            {group[1].map((item, i) => (
              <TimelineItem key={`item-${i}`} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

function groupByYear(items: Item[]): ItemsGroupByYear[] {
  return items?.reduce((items: ItemsGroupByYear[], item) => {
    const year = item.date.slice(0, 3);
    items[year] = items[year].length ? [...items[year], item] : [item];
    const userItemsCount =
      articles.filter((a) => a.user.username === username)?.length || 1;
    items.push({
      article,
      username,
      userItemsCount,
    });
    return items;
  }, []);
}
