#!/bin/bash

# Build the project
npm run build

# Commit and push
git add .
git commit -m "Added some changes"
git push origin master

# Navigate to the deployment repo
cd /home/mmiv/Home

# Copy files
cp -r /home/mmiv/Downloads/mcst-website/dist/* .

# Commit and push
git add .
git commit -m "Updated Header section"
git push origin main