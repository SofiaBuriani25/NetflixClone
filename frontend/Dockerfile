FROM node:20-alpine

WORKDIR /app

# copia solo package.json per cache ottimizzata
COPY package*.json ./

# installa dipendenze di React
RUN npm install

# copia tutto il progetto
COPY . .

EXPOSE 5173
# rende React accessibile fuori dal container
CMD ["npm", "run", "dev", "--", "--host"]