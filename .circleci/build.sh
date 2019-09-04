#!/bin/bash
set -ev

npm run build

git config --global user.name ${GITHUB_USER}
git config --global user.email ${GITHUB_EMAIL}

git clone --quiet --branch=$BRANCH https://${GITHUB_API_TOKEN}@github.com/$TARGET_REPO website > /dev/null
cd website
git rm -rf website/.
git add .
cd ..

cp -a dist/. website/.
git add -f website/.

if git commit -m "Deploying new files..." ; then
  git push -fq origin $BRANCH > /dev/null
  echo -e "Deploy completed.\n"
else
  echo -e "Content not changed, nothing to deploy.\n"
fi