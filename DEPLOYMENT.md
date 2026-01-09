# Infratel Landing - Production Deployment Guide

## Overview
This guide explains how to deploy your Infratel landing page to production with HTTPS and custom domain (infratel.sg).

## Prerequisites
- A VPS or cloud server (AWS, DigitalOcean, Linode, etc.)
- Domain name registered (infratel.sg)
- SSH access to your server
- Node.js 18+ installed on server

## Option 1: Deploy with Vercel (Recommended - Fastest)

### Step 1: Push to GitHub
```bash
cd /root/infratel-landing
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/infratel-landing.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Step 3: Configure Custom Domain
1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `infratel.sg` and `www.infratel.sg`
4. Follow DNS configuration instructions:
   - Add A record: `@` → Vercel IP (provided)
   - Add CNAME: `www` → `cname.vercel-dns.com`
5. SSL certificate is automatic and free!

**Deployment time: 5-10 minutes**

---

## Option 2: Deploy with Docker + Nginx + Let's Encrypt

### Step 1: Prepare Production Build
```bash
cd /root/infratel-landing
npm run build
```

### Step 2: Create Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Step 3: Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
}

module.exports = nextConfig
```

### Step 4: Build and Run Docker Container
```bash
docker build -t infratel-landing .
docker run -d -p 3000:3000 --name infratel-app infratel-landing
```

### Step 5: Install and Configure Nginx
```bash
sudo apt update
sudo apt install nginx
```

Create Nginx config: `/etc/nginx/sites-available/infratel.sg`
```nginx
server {
    listen 80;
    server_name infratel.sg www.infratel.sg;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/infratel.sg /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: Install SSL Certificate (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d infratel.sg -d www.infratel.sg
```

Follow prompts to:
- Enter email for renewal notifications
- Agree to Terms of Service
- Choose whether to redirect HTTP to HTTPS (choose yes)

Certbot will auto-renew. Test renewal:
```bash
sudo certbot renew --dry-run
```

---

## Option 3: Deploy on Your Current Server (Simple PM2)

Since your server is already running, here's the quickest way:

### Step 1: Build the Application
```bash
cd /root/infratel-landing
npm run build
```

### Step 2: Install PM2 (Production Process Manager)
```bash
npm install -g pm2
```

### Step 3: Start with PM2
```bash
pm2 start npm --name "infratel" -- start
pm2 save
pm2 startup
```

This will:
- Run the app in production mode
- Auto-restart on crashes
- Start on server reboot

### Step 4: Configure Nginx (Follow Step 5-6 from Option 2)

---

## DNS Configuration

Configure your domain registrar's DNS settings:

### For Vercel:
- A Record: `@` → Vercel IP (provided in dashboard)
- CNAME: `www` → `cname.vercel-dns.com`

### For Self-Hosted:
- A Record: `@` → Your server IP
- A Record: `www` → Your server IP

**DNS propagation takes 1-24 hours**

---

## Environment Variables (if needed)

Create `.env.local` for production:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://infratel.sg
```

---

## Performance Optimization

### Enable Caching in Nginx
Add to your Nginx config:
```nginx
# Cache static assets
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Enable Gzip Compression
Add to Nginx config:
```nginx
gzip on;
gzip_vary on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
gzip_min_length 1000;
```

---

## Monitoring & Maintenance

### Check Application Status
```bash
pm2 status
pm2 logs infratel
```

### Check Nginx Status
```bash
sudo systemctl status nginx
sudo nginx -t  # Test configuration
```

### SSL Certificate Renewal
Certbot auto-renews, but you can manually check:
```bash
sudo certbot renew
sudo certbot certificates
```

### Update Deployment
```bash
cd /root/infratel-landing
git pull  # if using git
npm install
npm run build
pm2 restart infratel
```

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Find process
lsof -i :3000
# Kill process
kill -9 <PID>
```

### Nginx 502 Bad Gateway
```bash
# Check if app is running
pm2 status
# Restart app
pm2 restart infratel
# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
```

### SSL Certificate Issues
```bash
# Test SSL
curl -I https://infratel.sg
# Force renew
sudo certbot renew --force-renewal
```

---

## Security Checklist

- [ ] SSL/HTTPS enabled
- [ ] Firewall configured (ufw/iptables)
  ```bash
  sudo ufw allow 80/tcp
  sudo ufw allow 443/tcp
  sudo ufw allow 22/tcp
  sudo ufw enable
  ```
- [ ] Regular updates
  ```bash
  sudo apt update && sudo apt upgrade
  ```
- [ ] Backup strategy in place
- [ ] Rate limiting in Nginx (optional)
- [ ] Hide server information
  ```nginx
  # Add to nginx.conf
  server_tokens off;
  ```

---

## Quick Start Checklist

**For immediate deployment (using current setup):**

1. ✅ Server is running at localhost:3000
2. Install PM2: `npm install -g pm2`
3. Start with PM2: `pm2 start npm --name infratel -- start`
4. Install Nginx: `sudo apt install nginx`
5. Configure Nginx (see Option 2, Step 5)
6. Install SSL: `sudo certbot --nginx -d infratel.sg -d www.infratel.sg`
7. Configure DNS A records to point to your server IP
8. Done! Visit https://infratel.sg

---

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Let's Encrypt: https://letsencrypt.org/
- PM2 Docs: https://pm2.keymetrics.io/

**Estimated Total Deployment Time:**
- Vercel: 10 minutes
- Docker + Nginx: 30 minutes
- PM2 + Nginx: 20 minutes
