FROM nginx
COPY ./dist /root/SchemeShow/dist
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf