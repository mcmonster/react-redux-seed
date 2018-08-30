#!/bin/bash

# Push the web app
aws s3 cp dist s3://mattmccann.xyz/ --recursive --exclude "*.js" --region=us-east-2

# Push the scripts with expires headers
aws s3 cp s3://mattmccann.xyz/ --recursive --exclude "*" --include "*.js" --region=us-east-2 \
    --expires "$(date -d '+6 months' --utc +'%Y-%m-%dT%H:%M:%SZ')"

# Invalidate the caching of index.html
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id THE-DIST-ID --paths "/index.html"
