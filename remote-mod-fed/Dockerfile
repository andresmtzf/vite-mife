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
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf