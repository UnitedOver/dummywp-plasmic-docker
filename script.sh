#!/bin/bash

usage() {
    echo "Usage: $0 --repourl https://github.com/UnitedOver/dummywp-plasmic-docker --reponame dummywp-plasmic-docker --branch main --token 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"
    exit 1
}

# Function to check if required arguments are provided
check_required_arguments() {
    if [[ -z "$REPO_URL" || -z "$REPO_NAME" || -z "$BRANCH" || -z "$GITHUB_TOKEN" ]]; then
        echo "Error: Missing required arguments."
        usage
    fi
}

# Parse command-line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --repourl) REPO_URL="$2"; shift ;;
        --reponame) REPO_NAME="$2"; shift ;;
        --branch) BRANCH="$2"; shift ;;
        --token) GITHUB_TOKEN="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; usage ;;
    esac
    shift
done

# Check required arguments
check_required_arguments

# Install Git if not already installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Installing..."
    apt-get update -y && apt-get install -y git
fi

# Configure git to use the token for authentication
git config --global credential.helper store

# Create a temporary file for credentials
echo "https://$GITHUB_TOKEN@github.com" > ~/.git-credentials

# Clone or update the repository with token authentication
if [[ -d "/var/www/$REPO_NAME" ]]; then
    echo "Pulling latest changes from the $BRANCH branch..."
    cd "/var/www/$REPO_NAME" || exit
    git pull origin "$BRANCH"
else
    echo "Cloning repository from the $BRANCH branch..."
    git clone -b "$BRANCH" "${REPO_URL}" "/var/www/$REPO_NAME"
    cd "/var/www/$REPO_NAME" || exit
fi

# Configure git to trust the directory
git config --global --add safe.directory "/var/www/$REPO_NAME"

echo "Repository cloned or updated successfully!"
