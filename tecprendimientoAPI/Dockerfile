FROM node:20
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npx prisma generate
CMD ["node","app.js"]
