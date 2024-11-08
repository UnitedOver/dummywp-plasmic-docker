# Start from a Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files to install dependencies
COPY package*.json ./

# Update packages and install required tools
RUN apt-get update && apt-get install -y \
    npm \
    git \
    && apt-get clean

# Install project dependencies
RUN npm install

# Install Plasmic CLI globally
RUN npm install -g @plasmicapp/cli

# Copy the rest of the application code and script
COPY . .

# Make script.sh executable
RUN chmod +x /app/script.sh

# Define build arguments for secure access to private repo
ARG GITHUB_TOKEN
ARG REPO_URL
ARG REPO_NAME
ARG BRANCH

# Run the script with required arguments
RUN /app/script.sh --repourl "${REPO_URL}" --reponame "${REPO_NAME}" --branch "${BRANCH}" --token "${GITHUB_TOKEN}"

# Build the application
RUN npm run build

# Define the command to start the application
CMD ["npm", "start"]
