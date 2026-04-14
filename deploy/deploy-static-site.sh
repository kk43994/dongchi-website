#!/usr/bin/env bash

set -euo pipefail

ARCHIVE_PATH="${1:-}"
NGINX_CONF_SOURCE="${2:-}"
SITE_ROOT="${SITE_ROOT:-/var/www/dongchi-website}"

if [[ -z "$ARCHIVE_PATH" ]]; then
  echo "Usage: $0 <dist.zip> [nginx.conf]"
  exit 1
fi

if [[ ! -f "$ARCHIVE_PATH" ]]; then
  echo "Archive not found: $ARCHIVE_PATH"
  exit 1
fi

install_packages() {
  if command -v apt-get >/dev/null 2>&1; then
    sudo apt-get update
    sudo apt-get install -y nginx unzip
    return
  fi

  if command -v dnf >/dev/null 2>&1; then
    sudo dnf install -y nginx unzip
    return
  fi

  if command -v yum >/dev/null 2>&1; then
    sudo yum install -y nginx unzip
    return
  fi

  echo "Unsupported package manager. Please install nginx and unzip manually."
  exit 1
}

if ! command -v nginx >/dev/null 2>&1 || ! command -v unzip >/dev/null 2>&1; then
  install_packages
fi

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

unzip -oq "$ARCHIVE_PATH" -d "$TMP_DIR"

if [[ -f "$TMP_DIR/index.html" ]]; then
  EXTRACTED_ROOT="$TMP_DIR"
elif [[ -f "$TMP_DIR/dist/index.html" ]]; then
  EXTRACTED_ROOT="$TMP_DIR/dist"
else
  echo "Could not find index.html in the archive."
  exit 1
fi

sudo mkdir -p "$SITE_ROOT"
sudo find "$SITE_ROOT" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
sudo cp -r "$EXTRACTED_ROOT"/. "$SITE_ROOT"/

if [[ -n "$NGINX_CONF_SOURCE" ]]; then
  if [[ ! -f "$NGINX_CONF_SOURCE" ]]; then
    echo "Nginx config not found: $NGINX_CONF_SOURCE"
    exit 1
  fi

  if [[ -d /etc/nginx/sites-available ]]; then
    NGINX_CONF_TARGET="/etc/nginx/sites-available/dongchi-website.conf"
    sudo cp "$NGINX_CONF_SOURCE" "$NGINX_CONF_TARGET"
    sudo ln -sfn "$NGINX_CONF_TARGET" /etc/nginx/sites-enabled/dongchi-website.conf
    sudo rm -f /etc/nginx/sites-enabled/default
  else
    NGINX_CONF_TARGET="/etc/nginx/conf.d/dongchi-website.conf"
    sudo cp "$NGINX_CONF_SOURCE" "$NGINX_CONF_TARGET"
  fi
fi

sudo nginx -t
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "Deployment completed."
echo "Site root: $SITE_ROOT"
