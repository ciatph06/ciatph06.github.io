#!/bin/bash
set -ev

# Set the github user credentials from Circle CI
git config --global user.name ${GITHUB_USER}
git config --global user.email ${GITHUB_EMAIL}

# Set the target repository to push the static github pages from Circle CI
TARGET_REPOSITORY="${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}.git"

# Clone the master branch for github pages
git clone --quiet --branch=$BRANCH https://${GITHUB_API_TOKEN}@github.com/$TARGET_REPOSITORY website > /dev/null
cd website

# Delete all files to ensure a fresh copy of build files
git rm -rf .
git add .
cd ..

# Copy the built static files to the master branch
cp -a dist/. website/.
cd website
git add -f .

# Push to deploy to github pages
# Skip CI trigger on the master branch
if git commit -m "Deploying new files [skip ci] ..." ; then
  git push -fq origin $BRANCH > /dev/null
  echo -e "Deploy completed.\n"
else
  echo -e "Content not changed, nothing to deploy.\n"
fi