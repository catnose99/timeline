export default {
  title: "catnose's timeline",
  description: 'personal website by catnose.',
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://catnose99.com'
      : 'http://localhost:3000',
  rssUrlList: [
    'https://zenn.dev/catnose99/feed',
    'https://medium.com/feed/@catnose99',
    'https://note.com/catnose/rss',
    'https://catknows.vercel.app/rss.xml',
  ],
};
