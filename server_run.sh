#!/bin/bash

cd server

# Installing all npm packages
sudo npm install node-pre-gyp -g
sudo npm install sqlite3@5.0.1 --save
sudo npm install --save

#To start
sudo npm run start

