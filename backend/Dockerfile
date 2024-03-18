#on va chercher sur internet une image docker node express

# Fetching the minified node image on apline linux
FROM node:21-slim

# Declaring env (on en a pas besoin)
# ENV NODE_ENV development

# Setting up the work directory
WORKDIR /app

COPY package.json .
COPY package-lock.json .

# Installing dependencies
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD [ "node", "server.js" ]

# Exposing server port
EXPOSE 3000