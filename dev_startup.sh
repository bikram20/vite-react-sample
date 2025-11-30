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
echo "Starting package.json watcher in background..."

# Watch for package.json changes and auto-install dependencies
{
    LAST_HASH=$(md5sum package.json 2>/dev/null | cut -d' ' -f1 || echo "")
    while true; do
        sleep 10
        CURRENT_HASH=$(md5sum package.json 2>/dev/null | cut -d' ' -f1 || echo "")
        if [ "$CURRENT_HASH" != "$LAST_HASH" ] && [ -n "$CURRENT_HASH" ]; then
            echo ""
            echo "[DEPENDENCY CHANGE DETECTED]"
            echo "package.json has changed. Installing dependencies..."
            npm install
            echo "Dependencies updated. Vite HMR will reload automatically."
            echo ""
            LAST_HASH=$CURRENT_HASH
        fi
    done
} &

echo ""
echo "Starting Vite dev server..."
echo "App will be available on port 8080"
echo ""

npm run dev -- --host 0.0.0.0 --port 8080
