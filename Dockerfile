# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port 3001 to the host
EXPOSE 3000

# Start the NestJS app
CMD ["npm", "run", "start:prod"]
