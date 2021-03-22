FROM node

RUN mkdir -p /app/client
WORKDIR /app/client

COPY package.json package-lock.json /app/client/

RUN npm install --no-progress --silent

COPY . /app/client

CMD [ "npm", "run", "start" ]