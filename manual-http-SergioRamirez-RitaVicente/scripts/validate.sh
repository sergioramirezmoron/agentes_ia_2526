#!/bin/bash
echo "PROJECT VALIDATION"

PASS=true

# --- Verify existence of files and folders---
check_exists() {
  if [ -e "$1" ]; then
    echo "Exists: $1"
  else
    echo "ERROR NOT FOUND: $1"
    PASS=false
  fi
}

# --- Verify files and folders ---
check_exists "package.json"
check_exists "src/db/db.json"
check_exists ".gitignore"
check_exists ".env.example"
check_exists "README.md"
check_exists "checklist.md"
check_exists "peticiones-crud.http"
check_exists "src/"
check_exists "src/crud-curl.js"
check_exists "images/"
check_exists "scripts/"

# --- Verify package.json ---
if grep -q '"type": "module"' package.json; then
  echo "CORRECT: package.json contains type: module"
else
  echo "ERROR: Miss type: module in package.json"
  PASS=false
fi

if grep -q '"dotenv"' package.json; then
  echo "CORRECT: Dependency dotenv found"
else
  echo "ERROR: Dependency dotenv not found"
  PASS=false
fi

if grep -q '"json-server"' package.json; then
  echo "CORRECT: Dependency json-server found"
else
  echo "ERROR: Dependency json-server not found"
  PASS=false
fi

if grep -q '"server:up"' package.json; then
  echo "CORRECT: Script server:up found"
else
  echo "ERROR: Script server:up not found"
  PASS=false
fi

if grep -q '"crud:curl"' package.json; then
  echo "CORRECT: Script crud:curl found"
else
  echo "ERROR: Script crud:curl not found"
  PASS=false
fi

# --- Verify images ---
IMG_COUNT=$(find images -type f -name "ThunderClient*.jpg" -o -name "ThunderClient*.png" | wc -l)
if [ "$IMG_COUNT" -ge 6 ]; then
  echo "CORRECT: Found $IMG_COUNT in images/"
else
  echo "ERROR: Just found $IMG_COUNT images, required at least 6"
  PASS=false
fi

# --- Final result ---
echo "-----------------------------------"
if [ "$PASS" = true ]; then
  echo "VALIDATION COMPLETED"
  exit 0
else
  echo "VALIDATION FAILED"
  exit 1
fi
