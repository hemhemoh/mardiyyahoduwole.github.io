# Website Update & Deployment Guide

This guide explains how to update your portfolio website and deploy it to GitHub Pages.

## Table of Contents

1. [How to Update Your Website](#how-to-update-your-website)
2. [Adding Blog Posts](#adding-blog-posts)
3. [Deploying to GitHub Pages](#deploying-to-github-pages)
4. [Troubleshooting](#troubleshooting)

---

## How to Update Your Website

There are three ways to modify your portfolio:

### Method 1: Visual Editor (Fastest for UI Changes)

**When to use:** Quick design tweaks, color changes, spacing adjustments

1. Open the Management UI (right panel in the Manus interface)
2. Click "Preview" to see your live site
3. Click any element on the page to edit it
4. Adjust colors, spacing, fonts, borders in real-time
5. Changes automatically create a checkpoint

**Pros:** No coding required, instant visual feedback
**Cons:** Limited to UI tweaks, not for content changes

### Method 2: Code Editor (Recommended for Content)

**When to use:** Updating experience, projects, research, or adding blog posts

1. Open the Management UI → "Code" panel
2. Navigate to the file you want to edit
3. Make changes directly in the editor
4. Changes hot-reload instantly in the preview
5. Create a checkpoint when done

**Key files to edit:**
- `client/src/pages/Home.tsx` — Experience, Projects, Research, Skills sections
- `client/src/pages/Blog.tsx` — Blog index page
- `client/src/pages/BlogPost.tsx` — Blog posts (add new posts here)
- `client/src/index.css` — Global styling and theme colors

**Pros:** Full control, works for all content types
**Cons:** Requires understanding the code structure

### Method 3: Local Development (Most Powerful)

**When to use:** Major redesigns, adding new features, complex changes

1. Clone the repository locally:
   ```bash
   git clone https://github.com/hemhemoh/mardiyyah-portfolio.git
   cd mardiyyah-portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the dev server:
   ```bash
   pnpm dev
   ```

4. Open `http://localhost:3000` in your browser

5. Edit files in your code editor (VSCode recommended)

6. Changes appear instantly in the browser

7. When done, commit and push:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```

**Pros:** Full control, can add complex features, works offline
**Cons:** Requires Git and Node.js setup

---

## Adding Blog Posts

See `BLOG_SETUP.md` for detailed instructions on adding blog posts.

**Quick reference:**

1. Open `client/src/pages/BlogPost.tsx`
2. Add your post to the `blogPostsData` object:
   ```typescript
   "your-post-slug": {
     title: "Your Post Title",
     date: "2026-03-30",
     readingTime: 8,
     category: "ML Systems",
     metaDescription: "Brief description for search results",
     content: "Your HTML content here...",
   }
   ```
3. Your post is now live at `/blog/your-post-slug`

---

## Deploying to GitHub Pages

Your website is currently hosted on Manus. To deploy to GitHub Pages:

### Option A: Deploy via Manus (Recommended)

1. Create a checkpoint (if you haven't already)
2. Click the "Publish" button in the Management UI header
3. Follow the on-screen instructions
4. Your site will be published to `manus.space` domain

### Option B: Deploy to GitHub Pages (Manual)

If you prefer to host on GitHub Pages instead of Manus:

1. **Build the project:**
   ```bash
   pnpm build
   ```

2. **Create a GitHub Pages deployment:**
   - Push the `dist/` folder to your GitHub Pages branch
   - Or use GitHub Actions for automatic deployment

3. **Update your domain:**
   - Go to your GitHub repository settings
   - Navigate to Pages section
   - Configure your custom domain (if you have one)

**Note:** GitHub Pages requires the repository to be public. If you want to keep it private, use Manus hosting instead.

### Option C: Deploy to Other Platforms

Your site can also be deployed to:
- **Vercel:** `vercel deploy`
- **Netlify:** `netlify deploy`
- **Railway:** Connect GitHub repo and deploy
- **Render:** Connect GitHub repo and deploy

All of these support automatic deployments when you push to GitHub.

---

## Checkpoint Management

Checkpoints are snapshots of your website at specific points in time. You can roll back to any checkpoint if something breaks.

### Creating a Checkpoint

1. Make changes to your site
2. Test them in the preview
3. Click "Create Checkpoint" in the Management UI
4. Add a descriptive message (e.g., "Add RAG systems blog post")

### Rolling Back to a Previous Checkpoint

1. Open the Management UI → "Dashboard"
2. Find the checkpoint you want to restore
3. Click "Rollback" button
4. Your site will be restored to that point in time

**Important:** Rollback only restores code and configuration, not database data (if applicable).

---

## Version Control with Git

Your website code is stored in Git. Here's the workflow:

### Initial Setup (One-time)

```bash
# Clone the repository
git clone https://github.com/hemhemoh/mardiyyah-portfolio.git
cd mardiyyah-portfolio

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Regular Workflow

```bash
# Make changes to files...

# Check what changed
git status

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update: Add new blog post on RAG systems"

# Push to GitHub
git push origin main
```

### Commit Message Best Practices

- **Add content:** `Add: New blog post on model compression`
- **Update content:** `Update: Revise SumUp experience description`
- **Fix issues:** `Fix: Correct typo in projects section`
- **Refactor:** `Refactor: Reorganize skills section layout`

---

## File Structure Reference

```
mardiyyah-portfolio/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          ← Main portfolio page
│   │   │   ├── Blog.tsx          ← Blog index page
│   │   │   ├── BlogPost.tsx      ← Individual blog posts
│   │   │   └── NotFound.tsx      ← 404 page
│   │   ├── components/           ← Reusable UI components
│   │   ├── App.tsx               ← Routing configuration
│   │   └── index.css             ← Global styles and theme
│   ├── index.html                ← HTML template
│   └── public/                   ← Static files (favicon, etc.)
├── package.json                  ← Dependencies and scripts
├── BLOG_SETUP.md                 ← Blog setup guide
└── UPDATE_AND_DEPLOY.md          ← This file
```

---

## Common Tasks

### Update Your Experience Section

1. Open `client/src/pages/Home.tsx`
2. Find the "Experience" section
3. Update the role descriptions, dates, or add new roles
4. Save and check the preview
5. Create a checkpoint

### Update Your Projects

1. Open `client/src/pages/Home.tsx`
2. Find the "Projects" section
3. Update project descriptions, links, or add new projects
4. Save and check the preview
5. Create a checkpoint

### Change Colors or Theme

1. Open `client/src/index.css`
2. Look for the `:root` section (around line 50)
3. Update color values (use OKLCH format)
4. Save and check the preview
5. Create a checkpoint

### Add a New Page

1. Create a new file in `client/src/pages/` (e.g., `Speaking.tsx`)
2. Add the route to `client/src/App.tsx`
3. Add navigation link to the header
4. Test and create a checkpoint

---

## Troubleshooting

### Changes Not Appearing

**Problem:** I made changes but they're not showing up

**Solution:**
1. Check if the dev server is running
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check the browser console for errors (F12)
4. Restart the dev server: `pnpm dev`

### Blog Post Not Showing

**Problem:** I added a blog post but it's not appearing

**Solution:**
1. Check the slug is unique and matches the URL
2. Ensure date is in `YYYY-MM-DD` format
3. Verify HTML content is properly formatted
4. Check for console errors (F12)

### Build Errors

**Problem:** `pnpm build` fails with errors

**Solution:**
1. Check for TypeScript errors: `pnpm check`
2. Look for syntax errors in your changes
3. Verify all imports are correct
4. Restart the dev server

### Git Push Fails

**Problem:** `git push` fails with authentication error

**Solution:**
1. Check your GitHub credentials
2. Use SSH keys instead of HTTPS (recommended)
3. Run: `gh auth login` to re-authenticate

---

## Performance Tips

1. **Keep images optimized:** Use generated images or Unsplash links, not local files
2. **Minimize custom CSS:** Use Tailwind utilities instead of writing CSS
3. **Lazy load content:** For long pages, consider lazy loading sections
4. **Monitor bundle size:** Run `pnpm build` and check the output size

---

## SEO Best Practices

1. **Use descriptive titles:** Avoid generic titles like "My Portfolio"
2. **Write meta descriptions:** Each page should have a clear 160-char description
3. **Include keywords naturally:** Don't stuff keywords, write for humans first
4. **Internal linking:** Link between related sections and blog posts
5. **Keep URLs clean:** Use descriptive slugs like `/blog/rag-systems-production`

---

## Getting Help

If you get stuck:

1. Check the relevant guide (`BLOG_SETUP.md`, this file)
2. Look at the code comments in the files
3. Check the browser console for error messages (F12)
4. Review the Git history to see what changed: `git log`

---

## Next Steps

1. **Write your first blog post** on a topic where you have deep expertise
2. **Share your portfolio** with your network on LinkedIn and Twitter
3. **Monitor analytics** to see which sections get the most traffic
4. **Update regularly** with new projects, experiences, and blog posts

Good luck! 🚀
