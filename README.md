# 东池便当官网

这是当前服务器线上运行的东池便当官网静态站点备份，可直接部署到 Nginx、GitHub Pages 或其他静态托管服务。

## 当前线上域名

- http://dongchi.kk666.store
- https://dongchi.kk666.store（服务器已配置证书，公网 443 需安全组放行）

## 目录说明

- `index.html`：官网入口文件
- `assets/`：构建后的 JS/CSS 与页面资源
- `images/`：图片资源
- `about/`、`products/`、`stores/` 等：静态路由入口
- `deploy/nginx-dongchi-website.conf`：当前服务器 Nginx 配置备份，不包含证书私钥

## Nginx 部署参考

将本仓库内容放到：

```bash
/var/www/dongchi-website
```

然后使用 `deploy/nginx-dongchi-website.conf` 作为站点配置参考。
