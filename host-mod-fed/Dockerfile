# Construir imagen

# Instalar node
FROM node:18-alpine as builder

# Establecer directorio de trabajo
WORKDIR /app
COPY . .

# Instalar dependencias y construcción del proyecto
RUN npm install
RUN npm run build

# NGINX
FROM nginx:1.21.6-alpine as production

# Copiar configuración de nginx
COPY ./nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html/

EXPOSE 80

WORKDIR /usr/share/nginx/html

COPY ./env.sh .
#COPY ./env.sh /docker-entrypoint.d/env.sh

RUN chmod +x env.sh
#RUN chmod +x /docker-entrypoint.d/env.sh

COPY .env .

RUN apk add --no-cache bash dos2unix
RUN dos2unix /usr/share/nginx/html/env.sh && chmod +x /usr/share/nginx/html/env.sh
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
#CMD ["sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
