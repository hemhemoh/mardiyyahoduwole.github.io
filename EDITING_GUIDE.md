# Mardiyyah's Portfolio Editing Guide

This guide teaches you how to edit your portfolio without needing to ask for help. All edits are made to React files using simple find-and-replace patterns.

---

## Quick Start: Where Files Live

Your project is at: `/home/ubuntu/mardiyyah-portfolio/`

**Key files you'll edit:**
```
client/src/pages/
  ├── Home.tsx          ← Featured highlights on home page
  ├── Experience.tsx    ← All 5 experience roles
  ├── Projects.tsx      ← All 4 projects
  ├── Research.tsx      ← All 5 publications
  └── Blog.tsx          ← Blog index (empty for now)
```

---

## How to Edit: Three Methods

### Method 1: Visual Editor (Easiest for UI tweaks)
**Best for:** Colors, spacing, layout adjustments

1. Click **"Preview"** button in Management UI (right panel)
2. Click any element on the page to select it
3. Adjust colors, borders, padding in the visual editor
4. Changes apply instantly

**Limitation:** Can't change text content or add new sections

---

### Method 2: Code Editor (Medium difficulty)
**Best for:** Changing text, updating links, modifying content

1. Click **"Code"** panel in Management UI
2. Find the file you want to edit (e.g., `Experience.tsx`)
3. Click to open it
4. Find the text you want to change
5. Edit directly in the editor
6. Changes appear instantly in preview

**Example:** To update your Peppa role description:
- Open `client/src/pages/Experience.tsx`
- Find: `"Designed and deployed PeppaSync..."`
- Replace with your new text
- Save (Ctrl+S or Cmd+S)

---

### Method 3: Local Development (Most powerful)
**Best for:** Adding new sections, creating new pages, complex changes

**Setup (one-time):**
```bash
cd /home/ubuntu/mardiyyah-portfolio
pnpm install
pnpm dev
```

Then open: `http://localhost:3000`

**Edit files:**
- Open any `.tsx` file in your code editor
- Make changes
- Save the file
- Changes appear instantly in browser (hot reload)

**When done:**
```bash
# Create a checkpoint to save your work
git add -A
git commit -m "Your message here"
```

---

## Common Edits: Step-by-Step

### 1. Update Your Experience Role

**File:** `client/src/pages/Experience.tsx`

**Find this section:**
```tsx
{/* Peppa */}
<div className="card-subtle">
  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
    <div>
      <h3 className="text-2xl font-bold">Machine Learning Engineer</h3>
      <p className="text-accent font-semibold">Peppa</p>
    </div>
    <span className="text-muted-foreground text-sm">01/2026 – Present</span>
  </div>
```

**What you can change:**
- `"Machine Learning Engineer"` → Your job title
- `"Peppa"` → Company name
- `"01/2026 – Present"` → Your dates
- `"London, UK"` → Your location
- The impact box text
- The bullet points (the `<li>` items)
- Tech badges at the bottom

**Example:** To change dates from "01/2026 – Present" to "01/2026 – 06/2026":
1. Find: `<span className="text-muted-foreground text-sm">01/2026 – Present</span>`
2. Replace with: `<span className="text-muted-foreground text-sm">01/2026 – 06/2026</span>`
3. Save

---

### 2. Add a New Project

**File:** `client/src/pages/Projects.tsx`

**Find the last project (Text Summarization App) and add this after it:**

```tsx
{/* Your New Project */}
<div className="card-subtle">
  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
  <p className="text-muted-foreground mb-4">
    Brief description of what the project does.
  </p>
  <p className="text-foreground/80 mb-4 text-sm">
    <strong>Problem Solved:</strong> What problem does this solve?
  </p>
  <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
    <p className="text-sm text-foreground/90">
      <strong>Impact:</strong> What was the outcome or impact?
    </p>
  </div>
  <div className="flex flex-wrap gap-2 mb-4">
    <span className="tech-badge">Tech1</span>
    <span className="tech-badge">Tech2</span>
    <span className="tech-badge">Tech3</span>
  </div>
  <a href="https://github.com/your-link" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="sm" className="gap-2">
      View Repository
      <ExternalLink size={14} />
    </Button>
  </a>
</div>
```

**Replace:**
- `"Project Name"` with your project name
- `"Brief description..."` with your description
- `"What problem does this solve?"` with the problem
- `"What was the outcome..."` with the impact
- `"Tech1", "Tech2", "Tech3"` with actual technologies
- `"https://github.com/your-link"` with your GitHub link

---

### 3. Add a New Publication

**File:** `client/src/pages/Research.tsx`

**Find the last publication (MasakhaNEWS) and add this after it:**

```tsx
<div className="card-subtle">
  <h3 className="text-xl font-bold mb-2">Paper Title</h3>
  <p className="text-accent text-sm mb-3">Conference/Journal Name (Year)</p>
  <p className="text-foreground/90 mb-4">
    Brief description of the paper and your contribution.
  </p>
  <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
    <p className="text-sm text-foreground/90">
      <strong>Key Contribution:</strong> What was your key contribution?
    </p>
  </div>
  <div className="flex flex-wrap gap-2">
    <span className="tech-badge">Topic1</span>
    <span className="tech-badge">Topic2</span>
    <span className="tech-badge">Topic3</span>
  </div>
</div>
```

**Replace:**
- `"Paper Title"` with your paper title
- `"Conference/Journal Name (Year)"` with publication details
- The description and contribution text
- Topic tags

---

### 4. Update Featured Section on Home Page

**File:** `client/src/pages/Home.tsx`

The home page shows **featured** (not all) experience and projects. To update:

**Featured Experience:**
- Find the `{/* Peppa */}` section
- Update the same way as in Experience.tsx

**Featured Projects:**
- Find the `{/* Wazobia-Wellness */}` section
- Update the same way as in Projects.tsx

**Note:** If you add a new project to Projects.tsx, you need to also add it to the featured section on Home.tsx if you want it to show there.

---

### 5. Change Your Hero Bio

**File:** `client/src/pages/Home.tsx`

**Find:**
```tsx
<p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
  I design and deploy machine learning systems from the ground up. My work spans data pipelines, retrieval architectures, vector databases, and AI agents. I care about model behaviour, efficiency tradeoffs, and shipping robust products.
</p>
```

**Replace the text** with your new bio. Keep the `<p>` tags and className the same.

---

### 6. Update Social Links

**File:** `client/src/pages/Home.tsx` (and all other pages)

**Find:**
```tsx
<a href="https://github.com/hemhemoh" target="_blank" rel="noopener noreferrer">
```

**Replace `"https://github.com/hemhemoh"`** with your GitHub URL.

**Same for LinkedIn and email:**
```tsx
<a href="https://linkedin.com/in/mardiyyah-oduwole" target="_blank" rel="noopener noreferrer">
<a href="mailto:mardiyyahodu@gmail.com">
```

---

### 7. Add a Blog Post

**File:** `client/src/pages/BlogPost.tsx`

This file contains all blog posts. To add a new one:

**Find the `blogPostsData` array:**
```tsx
const blogPostsData = [
  {
    slug: "your-first-post",
    title: "Your Post Title",
    date: "2026-03-30",
    readingTime: "5 min read",
    category: "ML Systems",
    metaDescription: "Brief description for SEO",
    content: `
      <h2>Your Heading</h2>
      <p>Your paragraph text here.</p>
      <h3>Subheading</h3>
      <p>More content...</p>
    `,
  },
  // Add more posts here
];
```

**To add a new post:**
1. Add a new object to the array
2. Fill in: slug, title, date, readingTime, category, metaDescription, content
3. The content uses HTML (not markdown)

**Example:**
```tsx
{
  slug: "rag-systems-production",
  title: "Building Production RAG Systems: Lessons from SumUp",
  date: "2026-03-30",
  readingTime: "8 min read",
  category: "ML Systems",
  metaDescription: "How I built a RAG system that reduced retrieval time 24x for 100+ staff",
  content: `
    <h2>The Problem</h2>
    <p>At SumUp, our Sales and Customer Success teams were spending hours searching through documentation...</p>
    <h3>The Solution</h3>
    <p>We built a RAG system that...</p>
  `,
},
```

---

## Understanding the Code Structure

### React Components
Each page is a React component. The basic structure:

```tsx
export default function PageName() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Content here */}
    </div>
  );
}
```

### Tailwind CSS Classes
The styling uses Tailwind CSS. Common classes:
- `mb-4` = margin-bottom (spacing)
- `text-2xl` = large text
- `font-bold` = bold text
- `text-accent` = accent color (cyan)
- `bg-background` = background color
- `text-muted-foreground` = muted gray text

**Don't change these classes** unless you know what you're doing. They control the design.

### Tech Badges
```tsx
<span className="tech-badge">Python</span>
```
This creates a small tag. Change the text inside to any technology.

---

## Workflow: Edit → Test → Deploy

### 1. Make Your Edit
- Edit the file in Code Editor or locally
- Save the file

### 2. Test in Preview
- Changes appear instantly in the preview (hot reload)
- Click around to verify everything looks right
- Check mobile view (responsive design)

### 3. Create a Checkpoint
- Once you're happy with changes, create a checkpoint
- This saves your work and allows you to publish

### 4. Publish
- Click "Publish" button in Management UI
- Your site goes live

---

## Common Mistakes to Avoid

❌ **Don't:** Change className values (e.g., `"text-2xl"` to `"text-3xl"`)
✅ **Do:** Only change the text content inside tags

❌ **Don't:** Delete opening or closing tags (e.g., `<div>` or `</div>`)
✅ **Do:** Keep all tags intact, only change content

❌ **Don't:** Change HTML structure (e.g., moving `<div>` tags around)
✅ **Do:** Keep the structure the same, only update text

❌ **Don't:** Forget to close quotes or parentheses
✅ **Do:** Make sure every `"` has a closing `"`, every `(` has a `)`

---

## If Something Breaks

**Problem:** Page shows an error or looks broken

**Solution:**
1. Check the browser console (F12 → Console tab) for error messages
2. Look at the error message—it usually tells you what's wrong
3. Common issues:
   - Missing closing tag (e.g., `</div>`)
   - Unmatched quotes (e.g., `"text` without closing `"`)
   - Extra or missing commas in arrays

**If you can't fix it:**
1. Undo your last change (Ctrl+Z or Cmd+Z)
2. Try again more carefully
3. Or ask for help with the specific error

---

## Quick Reference: File Locations

| What to Edit | File | Section |
|---|---|---|
| Home page featured content | `Home.tsx` | Search for `{/* Featured Experience */}` |
| All experience roles | `Experience.tsx` | Search for `{/* Peppa */}`, `{/* AMDARI */}`, etc. |
| All projects | `Projects.tsx` | Search for `{/* Wazobia-Wellness */}`, etc. |
| All publications | `Research.tsx` | Search for publication titles |
| Blog posts | `BlogPost.tsx` | Find `blogPostsData` array |
| Global styles | `index.css` | Only edit if you know CSS |

---

## You've Got This!

You now have everything you need to edit your portfolio independently. Start with small changes (updating text, adding projects) and work your way up to more complex edits (adding blog posts, new pages).

Remember: The code follows patterns. If you see how one experience role is formatted, you can copy that pattern for a new one. If you see how one project is structured, you can add another the same way.

Good luck! 🚀
