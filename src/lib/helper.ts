import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export function getHostFromURL(url: string) {
  const urlObj = new URL(url);
  return urlObj.hostname;
}

export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;
}

export function formatDate(dateText: string, format = 'YYYY-MM-DD') {
  const date = dayjs(dateText);
  // conditionally return relative date
  const isRecent = Math.abs(date.diff(Date.now(), 'month')) < 6;

  return isRecent ? date.fromNow() : date.format(format);
}

export const groupByKey = <K, V>(
  array: readonly V[],
  getKeyFunc: (cur: V, idx: number, src: readonly V[]) => K
): [K, V[]][] =>
  Array.from(
    array.reduce((map, cur, idx, src) => {
      const key = getKeyFunc(cur, idx, src);
      const items = map.get(key);
      if (items) items.push(cur);
      else map.set(key, [cur]);
      return map;
    }, new Map<K, V[]>())
  );
