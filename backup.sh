#!/bin/bash

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

mkdir -p backups

tar -czf backups/app_$TIMESTAMP.tar.gz .

echo "Backup terminé : app_$TIMESTAMP.tar.gz"
