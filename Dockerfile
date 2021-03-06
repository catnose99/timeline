FROM node:14

ENV PORT 3000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]