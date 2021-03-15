# =============================
# BUILD ENVIRONMENT
# =============================
FROM node:12.16.1-alpine3.11 as builder
 
# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
 
# install and cache app dependencies
ARG NODE_ENV
 
ENV NENV=${NODE_ENV}
 
COPY package.json package-lock.json ./
 
RUN npm ci --only=production
 
COPY . .
 
# RUN mv .env.${NENV} .env
 
RUN npm run build
 
# =============================
# PRODUCTION
# =============================
FROM nginx:alpine
 
# COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
# COPY auth.htpasswd /etc/nginx/auth.htpasswd
COPY --from=builder /usr/src/app/dist /usr/share/nginx/src/html
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]