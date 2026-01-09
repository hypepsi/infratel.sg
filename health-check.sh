#!/bin/bash

# Infratel 网站健康检查脚本

echo "=================================="
echo "  Infratel 系统健康检查"
echo "=================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查函数
check_service() {
    local service=$1
    local name=$2
    
    if systemctl is-active --quiet $service; then
        echo -e "${GREEN}✓${NC} $name 运行中"
        return 0
    else
        echo -e "${RED}✗${NC} $name 未运行"
        return 1
    fi
}

check_port() {
    local port=$1
    local name=$2
    
    if ss -tlnp | grep -q ":$port "; then
        echo -e "${GREEN}✓${NC} 端口 $port ($name) 正在监听"
        return 0
    else
        echo -e "${RED}✗${NC} 端口 $port ($name) 未监听"
        return 1
    fi
}

check_url() {
    local url=$1
    local name=$2
    
    if curl -s -o /dev/null -w "%{http_code}" $url | grep -q "200"; then
        echo -e "${GREEN}✓${NC} $name 可访问"
        return 0
    else
        echo -e "${RED}✗${NC} $name 不可访问"
        return 1
    fi
}

# 1. 检查系统服务
echo "【1】检查系统服务"
echo "-----------------------------------"
check_service nginx "Nginx"
check_service pm2-root "PM2"
echo ""

# 2. 检查端口监听
echo "【2】检查端口监听"
echo "-----------------------------------"
check_port 80 "Nginx"
check_port 3000 "Next.js"
echo ""

# 3. 检查PM2应用
echo "【3】检查PM2应用状态"
echo "-----------------------------------"
if pm2 list | grep -q "infratel.*online"; then
    echo -e "${GREEN}✓${NC} Infratel 应用运行中"
    pm2 status | grep infratel
else
    echo -e "${RED}✗${NC} Infratel 应用未运行"
    pm2 status
fi
echo ""

# 4. 检查网站可访问性
echo "【4】检查网站可访问性"
echo "-----------------------------------"
check_url "http://localhost" "本地访问 (localhost)"
check_url "http://127.0.0.1" "本地访问 (127.0.0.1)"
check_url "http://infratel.sg" "域名访问 (infratel.sg)"
echo ""

# 5. 系统资源检查
echo "【5】系统资源使用"
echo "-----------------------------------"

# 内存使用
mem_total=$(free -m | awk 'NR==2{print $2}')
mem_used=$(free -m | awk 'NR==2{print $3}')
mem_percent=$((mem_used * 100 / mem_total))

if [ $mem_percent -lt 80 ]; then
    echo -e "${GREEN}✓${NC} 内存使用: $mem_used MB / $mem_total MB ($mem_percent%)"
else
    echo -e "${YELLOW}!${NC} 内存使用: $mem_used MB / $mem_total MB ($mem_percent%) - 偏高"
fi

# 磁盘使用
disk_usage=$(df -h / | awk 'NR==2{print $5}' | sed 's/%//')
if [ $disk_usage -lt 80 ]; then
    echo -e "${GREEN}✓${NC} 磁盘使用: $(df -h / | awk 'NR==2{print $3}') / $(df -h / | awk 'NR==2{print $2}') ($disk_usage%)"
else
    echo -e "${YELLOW}!${NC} 磁盘使用: $(df -h / | awk 'NR==2{print $3}') / $(df -h / | awk 'NR==2{print $2}') ($disk_usage%) - 偏高"
fi

# CPU负载
load_avg=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | sed 's/,//')
echo -e "${GREEN}✓${NC} 系统负载: $load_avg (1分钟平均)"

echo ""

# 6. 开机自启检查
echo "【6】开机自启配置"
echo "-----------------------------------"
if systemctl is-enabled --quiet nginx; then
    echo -e "${GREEN}✓${NC} Nginx 已配置开机自启"
else
    echo -e "${RED}✗${NC} Nginx 未配置开机自启"
fi

if systemctl is-enabled --quiet pm2-root; then
    echo -e "${GREEN}✓${NC} PM2 已配置开机自启"
else
    echo -e "${RED}✗${NC} PM2 未配置开机自启"
fi
echo ""

# 7. 最近错误日志
echo "【7】最近错误日志 (最后5条)"
echo "-----------------------------------"
if [ -f /var/log/nginx/error.log ]; then
    error_count=$(tail -50 /var/log/nginx/error.log | grep -c "error" || echo "0")
    if [ $error_count -eq 0 ]; then
        echo -e "${GREEN}✓${NC} Nginx: 无错误"
    else
        echo -e "${YELLOW}!${NC} Nginx: 最近发现 $error_count 个错误"
        tail -5 /var/log/nginx/error.log
    fi
else
    echo -e "${YELLOW}!${NC} Nginx 日志文件不存在"
fi
echo ""

# 8. PM2应用信息
echo "【8】PM2应用详情"
echo "-----------------------------------"
pm2 info infratel | grep -E "(status|memory|uptime|restarts)" || echo "无法获取PM2信息"
echo ""

echo "=================================="
echo "  健康检查完成"
echo "=================================="
echo ""
echo "提示: 如发现问题，请查看 OPERATIONS.md 获取故障排查指南"
