#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: rollback.sh <commit>"
  exit 1
fi

git checkout $1

npm install

pm2 restart node-prod-api

echo "Rollback effectué vers $1"