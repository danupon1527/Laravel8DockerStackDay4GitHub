# Base Image NodeJS
# FROM node:alpine

# Working Directory (WORKDIR)
# WORKDIR /usr/app

# Copy package.json
# COPY ./package.json .

# Run Command
# RUN npm install

# Copy code from host to container
# COPY . .

# Default Command
# CMD [ "npm", "start" ]

# Base Image
FROM node:alpine as builder

# Working Directory (WORKDIR)
WORKDIR /usr/app

# Copy package.json (ส่วนนี้ไม่ค่อยมีการเปลี่ยนแปลงจะดึงจาก cache ในรอบถัดไป)
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]

# Base Image
FROM nginx
EXPOSE 80
COPY --from=builder /usr/app/build /usr/share/nginx/html
