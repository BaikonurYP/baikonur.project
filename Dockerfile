FROM node:latest
WORKDIR /var/www

COPY package*.json ./
RUN npm set-script prepare ""
RUN npm install --force

COPY . .

EXPOSE 3000
CMD npm start