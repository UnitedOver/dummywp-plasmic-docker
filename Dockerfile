# Example Dockerfile snippet
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y \
        npm \
        && apt-get clean

RUN npm install

# Make sure you install plasmic
RUN npm install -g @plasmicapp/cli

# Copy the rest of your application code and your script
COPY . .

# Make sure your script is executable
RUN chmod +x /app/script.sh

# Define environment variables (if known at build time)
ARG REPO_URL
ARG REPO_NAME
ARG BRANCH

# Pass the environment variables to the script
RUN /app/script.sh --repourl "${REPO_URL}" --reponame "${REPO_NAME}" --branch "${BRANCH}"

# Build the application
RUN npm run build

# Define the command to run your application
CMD ["npm", "start"]