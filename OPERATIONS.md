# Infratel 网站运维文档

## 系统配置概览

### 服务器信息
- **CPU**: 2核
- **内存**: 2GB
- **操作系统**: Ubuntu 24.04 LTS
- **域名**: infratel.sg
- **IP**: 134.209.100.96

### 技术栈
- **前端框架**: Next.js 14 (App Router)
- **进程管理**: PM2
- **Web服务器**: Nginx
- **DNS/CDN**: Cloudflare
- **SSL**: Cloudflare Flexible SSL

---

## 开机自启配置

### ✅ 已配置的自启服务

1. **Nginx** (Web服务器)
   ```bash
   systemctl status nginx
   systemctl is-enabled nginx  # 应显示 "enabled"
   ```

2. **PM2** (Node.js进程管理器)
   ```bash
   systemctl status pm2-root
   systemctl is-enabled pm2-root  # 应显示 "enabled"
   ```

### 重启测试
系统重启后，以下服务会自动启动：
- Nginx 监听 80 端口
- PM2 自动启动 infratel 应用（端口 3000）

---

## 日常管理命令

### PM2 管理

**查看应用状态**
```bash
pm2 status
pm2 info infratel
pm2 logs infratel
```

**重启应用**
```bash
pm2 restart infratel
```

**停止应用**
```bash
pm2 stop infratel
```

**启动应用**
```bash
pm2 start infratel
```

**查看实时日志**
```bash
pm2 logs infratel --lines 100
```

**查看内存使用**
```bash
pm2 monit
```

### Nginx 管理

**查看状态**
```bash
systemctl status nginx
```

**重启 Nginx**
```bash
systemctl restart nginx
```

**重新加载配置（无停机）**
```bash
nginx -t  # 测试配置
systemctl reload nginx
```

**查看错误日志**
```bash
tail -f /var/log/nginx/error.log
```

**查看访问日志**
```bash
tail -f /var/log/nginx/access.log
```

### 系统资源监控

**查看内存使用**
```bash
free -h
```

**查看CPU和内存**
```bash
top
# 或使用
htop
```

**查看磁盘使用**
```bash
df -h
```

**查看进程端口占用**
```bash
ss -tlnp | grep :80
ss -tlnp | grep :3000
```

---

## 应用更新流程

### 1. 备份当前版本
```bash
cd /root/infratel-landing
git status  # 检查当前状态
```

### 2. 拉取代码更新（如使用Git）
```bash
git pull origin main
```

### 3. 安装依赖（如有新依赖）
```bash
npm install
```

### 4. 构建生产版本
```bash
npm run build
```

### 5. 重启应用
```bash
pm2 restart infratel
```

### 6. 验证
```bash
pm2 status
curl -I http://localhost
curl -I http://infratel.sg
```

---

## 配置文件位置

### 应用配置
- **项目目录**: `/root/infratel-landing`
- **PM2配置**: `/root/infratel-landing/ecosystem.config.js`
- **Next.js配置**: `/root/infratel-landing/next.config.js`

### 系统配置
- **Nginx配置**: `/etc/nginx/sites-available/infratel.sg`
- **Nginx符号链接**: `/etc/nginx/sites-enabled/infratel.sg`
- **PM2系统服务**: `/etc/systemd/system/pm2-root.service`
- **PM2进程列表**: `/root/.pm2/dump.pm2`

---

## 性能优化（已实施）

### PM2 配置优化
```javascript
// ecosystem.config.js
{
  instances: 1,              // 单实例模式（2GB内存）
  max_memory_restart: "500M" // 超过500MB自动重启
}
```

### Next.js 优化
```javascript
// next.config.js
{
  images: {
    unoptimized: true  // 禁用图片优化以减少内存使用
  }
}
```

### 系统优化
```bash
# 已设置 swappiness = 10
vm.swappiness = 10
```

### Nginx 优化
- 启用 gzip 压缩
- 静态资源缓存（1年）
- 代理缓冲优化

---

## Cloudflare SSL 配置

### 当前配置
- **模式**: Flexible SSL
- **说明**: 
  - 访客 ↔ Cloudflare: HTTPS（加密）
  - Cloudflare ↔ 服务器: HTTP（内部）
- **优点**: 无需在服务器端管理SSL证书

### DNS 配置
- 记录类型: A
- 名称: @ (根域名)
- 内容: 134.209.100.96
- 代理状态: 已启用（橙色云朵）

**注意**: 不需要配置SSL证书自动续签，因为使用Cloudflare托管SSL。

---

## 故障排查

### 网站无法访问

1. **检查服务状态**
   ```bash
   systemctl status nginx
   systemctl status pm2-root
   pm2 status
   ```

2. **检查端口监听**
   ```bash
   ss -tlnp | grep :80
   ss -tlnp | grep :3000
   ```

3. **检查应用日志**
   ```bash
   pm2 logs infratel --lines 50
   ```

4. **检查Nginx日志**
   ```bash
   tail -n 50 /var/log/nginx/error.log
   ```

### Cloudflare 521 错误

**原因**: Cloudflare无法连接到源服务器

**解决方案**:
1. 确认服务器应用正在运行
2. 检查防火墙是否允许Cloudflare IP
3. 验证Nginx正在监听80端口
4. 确认SSL模式为"Flexible"

### 应用崩溃或内存溢出

**检查内存使用**:
```bash
pm2 info infratel
free -h
```

**解决方案**:
1. PM2会自动重启（配置了max_memory_restart）
2. 如持续崩溃，检查日志：`pm2 logs infratel`
3. 考虑增加服务器内存

### 应用卡顿或响应慢

1. **检查系统资源**
   ```bash
   top
   free -h
   ```

2. **检查swap使用**
   ```bash
   swapon --show
   ```

3. **重启应用**
   ```bash
   pm2 restart infratel
   ```

---

## 备份建议

### 代码备份
- 使用Git进行版本控制
- 定期push到远程仓库

### 配置文件备份
建议定期备份以下文件：
```bash
/etc/nginx/sites-available/infratel.sg
/root/infratel-landing/ecosystem.config.js
/root/infratel-landing/next.config.js
```

---

## 监控建议

### 1. 设置监控告警
可以使用PM2 Plus（付费）或其他监控服务：
- 应用运行状态
- 内存使用率
- CPU使用率
- 响应时间

### 2. 日志轮转
确保日志不会占满磁盘：
```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### 3. 定期检查
建议每周检查：
- 磁盘空间使用
- 内存使用情况
- 应用错误日志
- Nginx访问日志

---

## 快速参考命令

| 操作 | 命令 |
|------|------|
| 查看网站状态 | `curl -I http://infratel.sg` |
| 查看应用状态 | `pm2 status` |
| 重启应用 | `pm2 restart infratel` |
| 查看日志 | `pm2 logs infratel` |
| 重启Nginx | `systemctl restart nginx` |
| 查看内存 | `free -h` |
| 查看磁盘 | `df -h` |
| 查看端口 | `ss -tlnp \| grep :80` |

---

## 联系信息

### 应用目录
```bash
cd /root/infratel-landing
```

### 配置目录
```bash
cd /etc/nginx/sites-available
```

### PM2目录
```bash
cd /root/.pm2
```

---

**最后更新**: 2026-01-09  
**版本**: 1.0  
**维护人员**: 系统管理员
