import { Item } from '../types';

export const TimelineItem: React.VFC<{ item: Item }> = ({ item }) => {
  return (
    <a href={item.url || '#'}>
      {!!item.action?.length && <div>{item.action}</div>}
      <h2>{item.title}</h2>
      <time>{item.date}</time>
    </a>
  );
};
