#on va chercher sur internet (docker hub) une image docker node express

# Fetching the minified node image on apline linux

#ps : je rajoute 21- devant slim pour figer la version de node que j'utilise pour eviter les upgrade involontaire.

FROM node:21-slim


# Declaring env (on en a pas besoin dans notre cas)
# ENV NODE_ENV development

# Setting up the work directory
WORKDIR /App

COPY package.json .
COPY package-lock.json .

# Installing dependencies
RUN npm install

# Copying all the files in our project
COPY . .


# Starting our application
CMD [ "npm", "run", "dev" ]

# Exposing server port
EXPOSE 5173