# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:current-slim as build-stage

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY . ./
RUN npm install
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:stable
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# Stage 2 - the production environment
FROM nginx:stable
# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
# users are not allowed to listen on priviliged ports
RUN sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf
EXPOSE 8080
# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
# Copy content
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]



# # base image
# FROM node:current-slim

# # set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /usr/src/app/package.json
# RUN npm install --silent
# RUN npm install react-scripts -g --silent

# # start app
# CMD ["npm", "start"]