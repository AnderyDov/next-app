FROM node:18-alpine
WORKDIR /
ADD package.json package.json
RUN yarn install  --production
ADD . .
ENV NODE_ENV production
RUN yarn build
CMD ["yarn", "start" ]
EXPOSE 3000