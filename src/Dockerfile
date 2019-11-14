FROM node:10-alpine
WORKDIR /var/www/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]