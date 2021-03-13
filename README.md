# catnose99/timeline

![screenshot](https://user-images.githubusercontent.com/34590683/110445555-959d5a80-8101-11eb-92f8-f9860bae4ac4.png)


Personal website gathering my activities on the internet. 

## Usage

The feed are regularly updated by fetching data from specified sources: RSS feed or Google spreadsheet.

### configuration

#### Create Google Spreadsheet

1. Create a sheet.
2. Set sheet header (first row in the sheet) exactly as follows.
  ```
  date | title | action |	url | description | excluded | from_rss
  ```
  [Real world sheet example](https://docs.google.com/spreadsheets/d/1xMmgneTK_yTE6q8fg-18uLKubh2HHvuV2BKksnWk69s/edit?usp=sharing)

#### Configure keys
This is required to access a sheet systematically.

1. On [GCP IAM console](https://console.cloud.google.com/iam-admin/iam), create a service account.
2. Generate a key for the service account with JSON format.
3. Open the spreadsheet and paste service account mail(`foo@bar.iam.gserviceaccount.com`) on Collaboration settings.
4. Create `.env` with the following contents on project root dir.
  ```bash
  SHEET_ID='foo' # extracted from the sheet url.
  GOOGLE_SERVICE_ACCOUNT_EMAIL='bar' # foo@bar.iam.gserviceaccount.com
  GOOGLE_PRIVATE_KEY='baz' # copy "private_key" in json (downloaded on step.2)
  ```

### development

```bash
# install packages
$ npm install
# generate .items.json which has the feed sources.
$ npm run build:items
# start local server
$ npm run dev
```

### deployment

I recommend you deploy on static website hosting services such as Vercel, Netlify or Cloudflare Pages. Note that build commands are configured properly.

```bash
# build commands
$ npm run build
```

To keep the feed fresh, you need to rebuild the app periodically.

## Licence

MIT except for logo (`/public/icon.*`). Be sure to replace them when you fork this repo.