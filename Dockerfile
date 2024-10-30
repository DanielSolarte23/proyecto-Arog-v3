# Usa una imagen base oficial de Node.js
FROM node:20.18.0

# Instala Git
RUN apt-get update && apt-get install -y git

# Crea el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que utiliza la aplicación
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
