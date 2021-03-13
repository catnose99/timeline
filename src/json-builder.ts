// fetch rss => update spreadsheets => generate .items.json
require('dotenv').config();
import dayjs from 'dayjs';
import fs from 'fs-extra';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Parser from 'rss-parser';
import siteConfig from '../site.config';
import { getHostFromURL } from './lib/helper';
import { itemSchema } from './schema';

type RssItem = {
  title: string;
  url: string;
  date: string;
};

const parser = new Parser();
const sheetId = process.env.SHEET_ID;
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, '\n');
const sheetHeaderValues = [
  'date',
  'title',
  'action',
  'url',
  'description',
  'excluded',
  'from_rss',
];

(async function () {
  // prepare to access spreadsheet
  if (
    typeof sheetId === 'undefined' ||
    typeof clientEmail === 'undefined' ||
    typeof privateKey === 'undefined'
  ) {
    console.error(
      'env "SHEET_ID", "GOOGLE_SERVICE_ACCOUNT_EMAIL", "GOOGLE_PRIVATE_KEY" are required.'
    );
    process.exit(1);
  }

  const doc = new GoogleSpreadsheet(sheetId);
  await doc.useServiceAccountAuth({
    client_email: clientEmail,
    private_key: privateKey,
  });

  // prepare for getting sheet values
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadHeaderRow();

  // ensure sheet has valid header columns.
  if (
    JSON.stringify(sheet.headerValues) !== JSON.stringify(sheetHeaderValues)
  ) {
    console.error(
      `Your sheet must have the following header columns ${sheetHeaderValues
        .map((v) => `"${v}"`)
        .join(', ')} in the exact same order.`
    );
    process.exit(1);
  }

  // get urls that already exist on sheets
  const rows = await sheet.getRows();
  const existingUrls = rows
    .map((r) => r.url.trim())
    .filter((r): r is string => typeof r === 'string');

  // get feed items from specified rss urls on site.config
  const feedItems = await getAllFeedItems();

  // remove existing urls on sheets
  const newItems = feedItems.filter(
    (item) => !existingUrls.includes(item.url.trim())
  );
  // write new items to spreadsheets
  const newRows = newItems.map((item) => {
    return {
      date: item.date,
      title: item.title,
      url: item.url,
      action: `Posted on ${getHostFromURL(item.url)}`,
      from_rss: '1',
    };
  });
  sheet.addRows(newRows);

  const allRows = await sheet.getRows();
  const jsonData = allRows
    .map((r) =>
      itemSchema.parse({
        title: r.title,
        url: r.url,
        date: r.date,
        action: r.action,
        description: r.description,
        excluded: r.excluded === '1' || r.excluded === 'true',
      })
    )
    .filter((r) => !r.excluded)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.writeJsonSync('.items.json', jsonData);
})();

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        url: link,
        date: dayjs(isoDate).format('YYYY-MM-DD'),
      };
    })
    .filter(
      (item): item is RssItem =>
        typeof item.title === 'string' &&
        typeof item.url === 'string' &&
        typeof item.date === 'string'
    );
}

async function getAllFeedItems() {
  const allFeedItems: RssItem[] = [];
  for (const url of siteConfig.rssUrlList) {
    const items = await fetchFeedItems(url);
    allFeedItems.push(...items);
  }
  return allFeedItems;
}

export default {};
