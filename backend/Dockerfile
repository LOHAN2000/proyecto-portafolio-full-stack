# Usa una imagen base de Node.js con Alpine Linux para un entorno ligero
FROM node:22-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias necesarias, omitiendo las de desarrollo
RUN npm install --omit=dev

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Expone el puerto 5000 para que la aplicación sea accesible
EXPOSE 5000

# Define el comando por defecto para iniciar la aplicación
CMD ["npm", "start"]