# FROM node:alpine

# WORKDIR /usr/src/app

# COPY . /usr/src/app

# RUN npm install -g @angular/cli

# RUN npm install

# CMD ["ng", "serve", "--host", "0.0.0.0"]




# Etapa 1: Compilar la aplicación Angular
FROM node:latest AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Compilar la aplicación Angular
RUN npm run build --prod

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copiar los archivos de la aplicación compilada desde la etapa anterior al directorio de Nginx
COPY --from=build /usr/src/app/dist/project/browser /usr/share/nginx/html

# Reemplazar el archivo de configuración por uno personalizado, si es necesario (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
# EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
