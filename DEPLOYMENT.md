# Deployment Guide - Cloudflare Pages

## Prerequisites

- A Cloudflare account
- Your GitHub repository connected to Cloudflare Pages

## Deployment Steps

### 1. Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Pages** in the sidebar
3. Click **Create a project**
4. Connect your GitHub account and select this repository

### 2. Configure Build Settings

Use the following settings:

- **Framework preset**: None (or Vite)
- **Build command**: `pnpm build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)
- **Environment variables**: None required

### 3. Advanced Settings (Optional)

- **Node version**: 18 or higher
- **Package manager**: pnpm

### 4. Custom Domain Setup

After deployment:

1. Go to your Pages project
2. Click **Custom domains**
3. Add `borishall.com` and `www.borishall.com`
4. Follow the DNS configuration instructions

Your domains are already configured in `wrangler.jsonc`.

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Continuous Deployment

Cloudflare Pages will automatically deploy:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches and pull requests

## Performance

The site is optimized for Cloudflare's global CDN:
- Static assets are cached at the edge
- Automatic HTTPS
- HTTP/2 and HTTP/3 support
- Brotli compression

## Troubleshooting

If you encounter issues:

1. Check build logs in Cloudflare Pages dashboard
2. Ensure pnpm is being used (check package manager setting)
3. Verify Node.js version is 18 or higher
4. Clear build cache and retry

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

