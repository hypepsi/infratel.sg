# Infratel.sg 域名配置指南

## 🎉 服务器已就绪！

您的 Infratel 网站已经在服务器上运行：
- ✅ Next.js 生产版本已构建
- ✅ PM2 进程管理器运行中
- ✅ Nginx 反向代理已配置
- ✅ 网站运行在 localhost:3000
- ✅ Nginx 监听端口 80

## 📋 域名配置步骤

### 步骤 1: 获取服务器IP地址

```bash
curl -4 icanhazip.com
```

或者:
```bash
hostname -I | awk '{print $1}'
```

**您的服务器IP:** 请记下这个IP地址

---

### 步骤 2: 配置DNS记录

登录您的域名注册商（如 GoDaddy, Namecheap, Cloudflare 等），添加以下DNS记录：

#### A 记录配置

| 类型 | 名称/主机 | 值 | TTL |
|------|----------|-----|-----|
| A    | @        | [您的服务器IP] | 3600 |
| A    | www      | [您的服务器IP] | 3600 |

**示例:**
- 如果您的IP是 `123.456.789.0`
- A记录: `@` → `123.456.789.0`
- A记录: `www` → `123.456.789.0`

#### 或使用 CNAME（如果主域名已配置）

| 类型  | 名称/主机 | 值 | TTL |
|-------|----------|-----|-----|
| CNAME | www      | infratel.sg | 3600 |

---

### 步骤 3: 等待DNS传播

DNS记录更新需要时间：
- **最快**: 5-10分钟
- **通常**: 1-4小时  
- **最长**: 24-48小时

#### 检查DNS传播状态

在线工具:
- https://www.whatsmydns.net/#A/infratel.sg
- https://dnschecker.org/

命令行检查:
```bash
# 检查A记录
dig infratel.sg +short
dig www.infratel.sg +short

# 或使用 nslookup
nslookup infratel.sg
nslookup www.infratel.sg
```

---

### 步骤 4: 测试网站访问

DNS生效后，在浏览器中访问:
- http://infratel.sg
- http://www.infratel.sg

---

## 🔒 配置SSL证书（HTTPS）

DNS生效后，配置免费SSL证书：

### 安装 Certbot

```bash
apt update
apt install -y certbot python3-certbot-nginx
```

### 获取SSL证书

```bash
certbot --nginx -d infratel.sg -d www.infratel.sg
```

按照提示操作：
1. 输入邮箱地址（用于证书更新提醒）
2. 同意服务条款（Y）
3. 选择是否接收EFF邮件（可选）
4. 选择是否重定向HTTP到HTTPS（建议选 2 - Redirect）

### 自动续期

Certbot会自动设置续期，测试续期：
```bash
certbot renew --dry-run
```

---

## 🔧 服务器管理命令

### PM2 管理

```bash
# 查看状态
pm2 status

# 查看日志
pm2 logs infratel

# 重启服务
pm2 restart infratel

# 停止服务
pm2 stop infratel

# 查看详细信息
pm2 show infratel
```

### Nginx 管理

```bash
# 测试配置
nginx -t

# 重启 Nginx
systemctl restart nginx

# 查看状态
systemctl status nginx

# 查看错误日志
tail -f /var/log/nginx/error.log

# 查看访问日志
tail -f /var/log/nginx/access.log
```

### 更新网站

当您需要更新网站内容：

```bash
cd /root/infratel-landing

# 拉取最新代码（如果使用Git）
# git pull

# 重新构建
npm run build

# 重启PM2
pm2 restart infratel
```

---

## 🔥 防火墙配置

确保防火墙允许HTTP和HTTPS流量：

```bash
# 如果使用 ufw
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp  # SSH
ufw enable
ufw status

# 如果使用 iptables
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables-save
```

---

## 📊 监控和日志

### 实时监控

```bash
# PM2 实时监控
pm2 monit

# 系统资源
htop
```

### 日志位置

- **PM2 日志**: `/root/.pm2/logs/`
- **Nginx 访问日志**: `/var/log/nginx/access.log`
- **Nginx 错误日志**: `/var/log/nginx/error.log`
- **Next.js 日志**: 通过 `pm2 logs infratel` 查看

---

## 🚨 故障排除

### 问题 1: 网站打不开

**检查服务状态:**
```bash
pm2 status
systemctl status nginx
```

**检查端口:**
```bash
netstat -tlnp | grep -E '(80|3000)'
```

**重启服务:**
```bash
pm2 restart infratel
systemctl restart nginx
```

### 问题 2: 502 Bad Gateway

这通常意味着Nginx无法连接到Next.js应用：

```bash
# 检查Next.js是否运行
pm2 list
pm2 logs infratel

# 重启应用
pm2 restart infratel

# 检查端口3000
curl http://localhost:3000
```

### 问题 3: DNS没有生效

```bash
# 清除本地DNS缓存（Windows）
ipconfig /flushdns

# 清除本地DNS缓存（Mac）
sudo dscacheutil -flushcache

# 清除本地DNS缓存（Linux）
sudo systemd-resolve --flush-caches
```

### 问题 4: SSL证书问题

```bash
# 检查证书状态
certbot certificates

# 强制续期
certbot renew --force-renewal

# 查看详细日志
tail -f /var/log/letsencrypt/letsencrypt.log
```

---

## 📝 当前配置摘要

**服务器配置:**
- 应用: Next.js 14.1.0
- 进程管理: PM2
- Web服务器: Nginx 1.24.0
- 运行端口: 3000 (内部), 80 (外部)

**域名配置:**
- 主域名: infratel.sg
- 备用域名: www.infratel.sg

**Nginx配置文件:**
- 配置: `/etc/nginx/sites-available/infratel.sg`
- 启用: `/etc/nginx/sites-enabled/infratel.sg`

**PM2配置:**
- 应用名: infratel
- 脚本: npm start
- 工作目录: /root/infratel-landing

---

## 🎯 快速检查清单

在浏览器访问 `http://infratel.sg` 之前，确认：

- [ ] PM2 状态为 "online": `pm2 status`
- [ ] Nginx 运行正常: `systemctl status nginx`
- [ ] 端口3000已监听: `netstat -tlnp | grep 3000`
- [ ] 端口80已监听: `netstat -tlnp | grep 80`
- [ ] DNS A记录已配置指向服务器IP
- [ ] 防火墙允许80和443端口
- [ ] 本地测试成功: `curl http://localhost`

---

## 📞 技术支持

如果遇到问题，检查日志获取详细信息：

```bash
# 应用日志
pm2 logs infratel --lines 100

# Nginx错误日志
tail -100 /var/log/nginx/error.log

# 系统日志
journalctl -xe
```

---

## ✅ 成功指标

配置成功后，您应该能够：

1. ✅ 通过 `http://infratel.sg` 访问网站
2. ✅ 通过 `http://www.infratel.sg` 访问网站  
3. ✅ 配置SSL后通过 `https://infratel.sg` 访问
4. ✅ 所有页面正常加载（28个页面）
5. ✅ 无404错误
6. ✅ 快速加载时间

---

**祝您部署顺利！** 🚀

如有问题，请检查日志文件或重新运行配置命令。
