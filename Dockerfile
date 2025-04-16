FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the project
RUN npm run build

# Expose port (not mandatory, but good practice)
EXPOSE 3000

# Start the app in dev mode (with auto-restart if files change)
CMD ["npm", "run", "start:dev"]
