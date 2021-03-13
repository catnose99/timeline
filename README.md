# catnose99/timeline

![screenshot](https://user-images.githubusercontent.com/34590683/110445555-959d5a80-8101-11eb-92f8-f9860bae4ac4.png)


Personal website gathering my activities on the internet. 

## How it works

The feed are regularly updated by fetching data from specified sources: RSS feed or Google spreadsheet.


```bash
# install packages
$ npm install
# generate .items.json which has the feed sources.
$ npm run build:items
# start local server
$ npm run dev
```

### deploy

I recommend you deploy on static website hosting services such as Vercel, Netlify or Cloudflare Pages. Note that build commands are configured properly.

```bash
# build commands
$ npm run build
```

To keep the feed fresh, you need to rebuild the app periodically.

## Licence

MIT except for logo (`/public/icon.*`). Be sure to replace them when you fork this repo.