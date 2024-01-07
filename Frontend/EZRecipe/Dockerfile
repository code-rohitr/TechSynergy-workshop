FROM node:21-alpine as node

ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

WORKDIR /app
COPY . .
RUN npm install
RUN npx sass .
RUN npm run build

FROM nginx:stable-alpine AS web_server

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist /usr/share/nginx/html

EXPOSE 80
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]