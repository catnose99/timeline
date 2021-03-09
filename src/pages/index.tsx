import Head from 'next/head';
import jsonItems from '../../.items.json';
import { ContentWrapper } from '../components/ContentWrapper';
import { HomeHero } from '../components/HomeHero';
import { Timeline } from '../components/Timeline';
import { itemsSchema } from '../schema';

const IndexPage = () => {
  const items = itemsSchema.parse(jsonItems);
  return (
    <>
      <Head>
        <title>catnose's timeline</title>
      </Head>
      <ContentWrapper>
        <HomeHero />
        <div>
          <Timeline items={items} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default IndexPage;
