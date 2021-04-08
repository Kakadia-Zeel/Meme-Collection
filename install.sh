#!/bin/bash

# Install nodejs on the EC2 Instance 

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install -y nodejs


#I have used Sqlite3 npm package for database so no need to configure it