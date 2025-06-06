#!/bin/bash

# Build the project
npm run build

# Commit and push
git add .
git commit -m "Added deploy script"
git push origin master

# Navigate to the deployment repo
cd /home/mmiv/Downloads/mcst-website-build

# Copy files
cp -r /home/mmiv/Downloads/mcst-website/dist/* .

# Commit and push
git add .
git commit -m "Added deploy script"
git push origin master