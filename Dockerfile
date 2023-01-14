FROM node:18-alpine3.16 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:18-alpine3.16 As production

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["yarn", "start:prod"]