#!/bin/bash

# install required packages
npm install three webpack webpack-cli webpack-dev-server --save-dev
# build project
npm run build
# create softlink to html page in dist directory
ln -s ../src/index.html dist/index.html
