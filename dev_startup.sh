#!/bin/bash
set -e

echo "==================================="
echo "Calculator App - Development Mode"
echo "==================================="
echo ""

cd /workspaces/app

echo "Installing dependencies..."
npm install

echo ""
echo "Starting Vite dev server..."
echo "App will be available on port 8080"
echo ""

npm run dev -- --host 0.0.0.0 --port 8080
