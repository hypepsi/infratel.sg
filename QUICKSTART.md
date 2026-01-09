# Infratel 网站 - 快速指南

## 🚀 一键健康检查

```bash
cd /root/infratel-landing
./health-check.sh
```

这个脚本会检查所有关键系统状态，包括服务运行、端口监听、网站可访问性等。

---

## 📋 常用命令速查

### 查看网站状态
```bash
pm2 status              # 查看应用状态
systemctl status nginx  # 查看Nginx状态
```

### 重启网站
```bash
pm2 restart infratel    # 重启应用（推荐）
systemctl restart nginx # 重启Nginx（配置更改后）
```

### 查看日志
```bash
pm2 logs infratel       # 实时查看应用日志
pm2 logs infratel --lines 100  # 查看最近100行
```

### 更新网站
```bash
cd /root/infratel-landing
npm run build           # 重新构建
pm2 restart infratel    # 重启应用
```

---

## 🔄 系统已自动化配置

### ✅ 开机自启
- **Nginx**: 已配置自动启动
- **PM2**: 已配置自动启动
- **应用**: 系统重启后自动运行

### ✅ 内存优化
- 单实例模式（适合2GB内存）
- 超过500MB自动重启
- Swappiness设置为10

### ✅ SSL证书
- 使用Cloudflare托管SSL
- **无需手动续签**
- 访客看到HTTPS加密连接

---

## 🌐 访问地址

- **公网**: https://infratel.sg
- **本地**: http://localhost:3000
- **IP**: http://134.209.100.96

---

## 📚 详细文档

- **运维手册**: `OPERATIONS.md` - 完整的运维文档和故障排查
- **域名配置**: `DOMAIN-SETUP.md` - DNS和SSL配置说明

---

## 🆘 遇到问题？

1. 运行健康检查: `./health-check.sh`
2. 查看详细日志: `pm2 logs infratel`
3. 查看运维手册: `cat OPERATIONS.md`

---

## 系统信息

| 项目 | 值 |
|------|---|
| 项目目录 | `/root/infratel-landing` |
| 应用名称 | `infratel` |
| 端口 | `3000` (应用), `80` (Nginx) |
| 进程管理 | PM2 |
| Web服务器 | Nginx |
| SSL | Cloudflare Flexible |

---

**提示**: 系统已完全配置好，重启后会自动运行，无需手动操作。
