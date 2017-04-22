#!/bin/bash
jekyll build --destination ./build

cd ./build
git add -A
git commit -m "Release"
git push -f origin +master:refs/heads/master

rm -rf ./build