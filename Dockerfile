FROM node:16.13.0-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn install && yarn upgrade 
RUN yarn build

FROM nginx:1.21
COPY --from=build-stage ./build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
