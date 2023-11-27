# Code reference from past projects

## From batch-convenios

env.sh

```bash

# !/bin/bash

# Recreate config file

rm -rf ./v1/af-batch-convenios-web/env-config.js
touch ./v1/af-batch-convenios-web/env-config.js

# Add assignment

echo "window._env_ = {" >> ./v1/af-batch-convenios-web/env-config.js

# Read each line in .env file

# Each line represents key=value pairs

while read -r line || [[ -n "$line" ]];
do

# Split env variables by character `=`

  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

# Read value of current variable if exists as Environment variable

  value=$(printf '%s\n' "${!varname}")

# Otherwise use value from .env file

  [[ -z $value ]] && value=${varvalue}

# Append configuration property to JS file

  echo "  $varname: \"$value\"," >> ./v1/af-batch-convenios-web/env-config.js
done < .env

echo "}" >> ./v1/af-batch-convenios-web/env-config.js
```

Dockerfile

```bash
FROM mxzvlaffasd101.zurich.uat:9444/node:18-alpine as builder
WORKDIR /app

COPY . .
RUN npm ci --legacy-peer-deps
RUN npm run build

FROM mxzvlaffasd101.zurich.uat:9444/nginx:1.21.6-alpine-react as web
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 80
WORKDIR /usr/share/nginx/html

#en evaluacion
COPY ./env.sh .

#en evaluacion
RUN chmod +x env.sh

COPY .env .
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]

#FROM mxzvlaffasd101.zurich.uat:9444/nginx:1.21.6-alpine as web
#RUN rm -rf /etc/nginx/conf.d
#COPY conf /etc/nginx

#COPY --from=builder /app/build /usr/share/nginx/html/
#EXPOSE 80

#WORKDIR /usr/share/nginx/html
#COPY ./env.sh .
#COPY .env .

#RUN apk add --no-cache bash
#RUN chmod +x env.sh

#CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
```

nginx/default.conf

```bash
server {
  listen 80;

  location ~* "^/v1/af-batch-convenios-web" {
    root /usr/share/nginx/html;
    include /etc/nginx/mime.types;
    index index.html index.htm;
    try_files $uri $uri/ /v1/af-batch-convenios-web/index.html;
    # expires -1;
  }
  # error_page 500 502 503 504  /50x.html;

  # location = /50x.html {
  #   root /usr/share/nginx/html;
  # }
}
```

## From single spa poc

nginx.conf

```bash
server {
  listen 80;
  server_name mf-root-ui-mfe;
  location / {
    add_header Cache-Control "public";
    add_header Access-Control-Allow-Origin *;
    root /usr/share/nginx/html/;
    include /etc/nginx/mime.types;
    try_files $uri $uri/ /index.html;
  }
}
```

Dockerfile

```bash
# Instalar node

FROM node:16-alpine as builder

# Establecer directorio de trabajo

WORKDIR /app
COPY . .

# Instalar dependencias y construcción de proyecto
RUN npm i --legacy-peer-deps
RUN npm run build

# NGINX

FROM nginx:1.21.0-alpine as production

# Copiar configuración de nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 8080
```

Dockerfile funcionando para Vite sin env

```bash
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

```
