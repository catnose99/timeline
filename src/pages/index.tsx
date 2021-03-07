import jsonItems from '../../.items.json';
import { TimelineItem } from '../components/TimelineItem';
import { itemsSchema } from '../schema';

const IndexPage = () => {
  const items = itemsSchema.parse(jsonItems);
  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <div>
        {items.map((item, i) => (
          <TimelineItem key={`item-${i}`} item={item} />
        ))}
      </div>
    </>
  );
};

export default IndexPage;
