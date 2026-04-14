# Lighthouse Deployment

This project is a static Vue 3 + Vite site.

Recommended deployment target:

- Tencent Cloud Lighthouse instance
- Nginx static hosting
- Upload the generated `dist/` assets

This repository uses `vue-router` with `createWebHistory()`, so the web server must route unknown paths back to `index.html`.

## 1. Build locally

```powershell
npm.cmd run build
if (Test-Path dist.zip) { Remove-Item dist.zip -Force }
Compress-Archive -Path dist\* -DestinationPath dist.zip
```

## 2. Open server ports

In Tencent Cloud Lighthouse:

- open port `80` for HTTP
- open port `443` for HTTPS if you will bind a domain
- keep port `22` open for SSH

If the operating system firewall is enabled, open the same ports there as well.

## 3. Upload files to the server

Replace `YOUR_SERVER_IP` with the public IP of the Lighthouse instance.

```powershell
scp .\dist.zip root@YOUR_SERVER_IP:/root/dist.zip
scp .\deploy\nginx.dongchi-website.conf root@YOUR_SERVER_IP:/root/nginx.dongchi-website.conf
scp .\deploy\deploy-static-site.sh root@YOUR_SERVER_IP:/root/deploy-static-site.sh
```

## 4. Run the deployment on the server

```bash
chmod +x /root/deploy-static-site.sh
/root/deploy-static-site.sh /root/dist.zip /root/nginx.dongchi-website.conf
```

After that, visiting `http://YOUR_SERVER_IP/` should load the site.

## 5. Bind a domain and enable HTTPS

Edit `/root/nginx.dongchi-website.conf` before deploying:

```nginx
server_name your-domain.com www.your-domain.com;
```

Then point the domain DNS to the server IP.

For Ubuntu, you can issue a certificate with:

```bash
sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## 6. Redeploy after updates

Every time the frontend changes:

1. rebuild `dist/`
2. regenerate `dist.zip`
3. upload the new archive
4. run the deployment script again

## Notes

- The default Nginx root in this setup is `/var/www/dongchi-website`.
- The included Nginx config already handles SPA history fallback.
- If your Lighthouse image is CentOS or Rocky Linux, the deployment script also supports `dnf` and `yum`.
