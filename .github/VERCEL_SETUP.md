# Vercel Deployment Setup

This guide explains how to configure automatic deployments to Vercel using GitHub Actions.

## Prerequisites

- Vercel account created ✅
- GitHub repository with the portfolio code
- Admin access to the GitHub repository

## Setup Steps

### 1. Get Vercel Token

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Give it a name (e.g., "GitHub Actions Portfolio")
4. Select the appropriate scope (recommended: full account access)
5. Copy the generated token (you won't see it again!)

### 2. Link Vercel Project

You need to link your local project to Vercel and get the project configuration:

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
cd /path/to/portfolio
vercel link

# Follow the prompts:
# - Set up and deploy? → N (we just want to link)
# - Which scope? → Select your account
# - Link to existing project? → N (if first time) or Y (if already exists)
# - What's your project's name? → portfolio (or your preferred name)
# - In which directory is your code located? → ./

# This creates a .vercel directory with project.json
```

### 3. Get Project Information

After linking, check the `.vercel/project.json` file to get:

```bash
cat .vercel/project.json
```

You'll see:
```json
{
  "projectId": "prj_xxxxxxxxxxxxx",
  "orgId": "team_xxxxxxxxxxxxx"
}
```

### 4. Configure GitHub Secrets

Go to your GitHub repository settings:

1. Navigate to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add the following secret:

| Name | Value | Description |
|------|-------|-------------|
| `VERCEL_TOKEN` | Your Vercel token from step 1 | Authentication for Vercel CLI |

**Optional**: If you need environment variables in production:
- Add them directly in Vercel Dashboard: **Project Settings** → **Environment Variables**
- Or add them as GitHub secrets and reference them in the workflow

### 5. Configure Vercel Project Settings

In your Vercel Dashboard:

1. Go to your project → **Settings**
2. **General**:
   - Framework Preset: **Next.js**
   - Root Directory: `apps/web`
   - Build Command: `cd ../.. && pnpm build --filter=web`
   - Output Directory: `.next` (default)
   - Install Command: `pnpm install`

3. **Git**:
   - Disable automatic deployments from Vercel (we'll use GitHub Actions instead)
   - Go to **Git** → **GitHub** → Disconnect if needed
   - This prevents duplicate deployments

### 6. Test the Workflow

1. Make a commit to your repository
2. Push to the `main` branch:
   ```bash
   git add .
   git commit -m "test: trigger deployment"
   git push origin main
   ```
3. Go to **GitHub** → **Actions** tab
4. Watch the deployment workflow run
5. Once complete, check your Vercel dashboard for the deployment

## Workflow Behavior

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. ✅ Trigger on every push to `main` branch
2. ✅ Checkout the code
3. ✅ Setup Node.js and pnpm
4. ✅ Cache dependencies for faster builds
5. ✅ Install dependencies
6. ✅ Pull Vercel environment information
7. ✅ Build the project using Vercel
8. ✅ Deploy to Vercel production

## Vercel Project Configuration

Make sure your `vercel.json` is configured correctly (create if it doesn't exist):

```json
{
  "buildCommand": "cd ../.. && pnpm build --filter=web",
  "devCommand": "cd ../.. && pnpm dev --filter=web",
  "installCommand": "cd ../.. && pnpm install",
  "framework": "nextjs",
  "outputDirectory": "apps/web/.next"
}
```

## Environment Variables

If you need environment variables in production:

### Option 1: Vercel Dashboard (Recommended)
1. Go to **Project Settings** → **Environment Variables**
2. Add your variables:
   - `BETTER_AUTH_SECRET` (if needed)
   - `BETTER_AUTH_URL` (set to your production URL)
   - `CORS_ORIGIN` (set to your production URL)

### Option 2: GitHub Secrets
Add secrets in GitHub and reference them in the workflow:

```yaml
- name: Deploy with Environment Variables
  env:
    BETTER_AUTH_SECRET: ${{ secrets.BETTER_AUTH_SECRET }}
    BETTER_AUTH_URL: ${{ secrets.BETTER_AUTH_URL }}
  run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## Troubleshooting

### Build Fails with "Command not found"
- Check that the build command in Vercel settings includes the monorepo context
- Use: `cd ../.. && pnpm build --filter=web`

### Deployment Succeeds but Site Doesn't Work
- Check environment variables in Vercel Dashboard
- Verify the output directory is correct (`.next`)
- Check Vercel deployment logs for errors

### Workflow Fails with "Project not found"
- Make sure you've run `vercel link` locally first
- Commit the `.vercel` directory (add to git if needed)
- Or configure project ID directly in the workflow

### Multiple Deployments Triggered
- Disable automatic deployments in Vercel Git settings
- This prevents both GitHub Actions and Vercel from deploying

## Monitoring

- **GitHub Actions**: Monitor workflow runs in the Actions tab
- **Vercel Dashboard**: View deployment logs and status
- **Production URL**: Your site will be live at `your-project.vercel.app`

## Custom Domain

To add a custom domain:

1. Go to **Vercel Dashboard** → **Project Settings** → **Domains**
2. Add your domain
3. Configure DNS records as instructed by Vercel
4. Update environment variables to use the custom domain

## Next Steps

After successful deployment:

- ✅ Test the production site
- ✅ Verify all routes work
- ✅ Check both language versions (EN/PT)
- ✅ Test on mobile devices
- ✅ Run Lighthouse audit
- ✅ Submit sitemap to Google Search Console
- ✅ Configure analytics (optional)

---

**Last Updated**: January 27, 2026
