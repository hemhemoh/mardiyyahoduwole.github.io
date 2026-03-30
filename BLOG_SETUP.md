# Blog Setup Guide

Your portfolio now includes a fully functional blog system with SEO best practices built in. This guide explains how to add and manage blog posts.

## Overview

The blog system consists of three main components:

1. **Blog Index Page** (`client/src/pages/Blog.tsx`) — Lists all published blog posts
2. **Blog Post Template** (`client/src/pages/BlogPost.tsx`) — Individual post pages with SEO markup
3. **Routing** (`client/src/App.tsx`) — Routes for `/blog` and `/blog/:slug`

## How to Add a Blog Post

### Step 1: Add Post Data

Open `client/src/pages/BlogPost.tsx` and add your post to the `blogPostsData` object:

```typescript
const blogPostsData: Record<string, BlogPostData> = {
  "your-post-slug": {
    title: "Your Post Title",
    date: "2026-03-30",
    readingTime: 8,
    category: "ML Systems", // or "Data Engineering", "African NLP", etc.
    metaDescription: "A brief description for search results (160 chars max)",
    content: `
      <h2>Section Title</h2>
      <p>Your paragraph here...</p>
      <p>Another paragraph...</p>
    `,
    relatedPosts: [
      { slug: "another-post-slug", title: "Another Post Title" }
    ]
  }
};
```

### Step 2: Content Guidelines

**Title:**
- Be specific and keyword-rich
- Example: "Building Production RAG Systems: From Concept to 100+ Users"
- Avoid: "My Journey", "Thoughts on ML"

**Slug:**
- Use kebab-case (lowercase with hyphens)
- Example: `building-production-rag-systems`
- Must be unique

**Date:**
- Format: `YYYY-MM-DD`
- Example: `2026-03-30`

**Reading Time:**
- Estimate: ~200 words per minute
- Example: 1,500 words ≈ 8 minutes

**Category:**
- Use consistent categories across posts
- Suggested: "ML Systems", "Data Engineering", "African NLP", "Research", "Career"

**Meta Description:**
- 150-160 characters
- Appears in Google search results
- Include your main keyword naturally
- Example: "Learn how to build production RAG systems that serve 100+ users. Practical lessons from SumUp's implementation."

**Content:**
- Write in HTML format (or use markdown and convert)
- Use semantic HTML tags: `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<code>`, `<pre>`
- Include internal links to your projects/experience sections
- Aim for 1,500-2,500 words for best SEO performance

### Step 3: Internal Linking

Link to your portfolio sections to boost SEO:

```html
<p>
  For more details, see my 
  <a href="https://mardiyyahoduwole.com/#projects">featured projects</a>
  or check out the 
  <a href="https://mardiyyahoduwole.com/#experience">SumUp experience section</a>.
</p>
```

### Step 4: Related Posts

Link to related posts at the bottom:

```typescript
relatedPosts: [
  { slug: "model-compression-guide", title: "Model Compression for Low-Resource Languages" },
  { slug: "data-pipelines-production", title: "Designing Data Pipelines That Scale" }
]
```

## SEO Best Practices (Already Implemented)

✅ **Structured Data** — Each post includes BlogPosting schema.org markup
✅ **Meta Descriptions** — Automatically used in search results
✅ **Internal Linking** — Link to your projects/experience to improve site authority
✅ **Mobile Responsive** — All posts are optimized for mobile viewing
✅ **Fast Loading** — Minimal JavaScript, optimized for Core Web Vitals
✅ **URL Structure** — Clean, descriptive URLs (`/blog/post-slug`)

## Example Post Template

Here's a complete example you can copy and modify:

```typescript
"rag-systems-production": {
  title: "Building Production RAG Systems: From Concept to 100+ Users",
  date: "2026-04-15",
  readingTime: 12,
  category: "ML Systems",
  metaDescription: "Learn how to build production RAG systems that serve 100+ users. Practical lessons from implementing retrieval-augmented generation at SumUp.",
  content: `
    <h2>Introduction</h2>
    <p>
      Retrieval-Augmented Generation (RAG) systems are becoming essential for building AI applications that need access to external knowledge. In this post, I'll share practical lessons from building a RAG system at SumUp that serves 100+ Sales and Customer Success staff.
    </p>

    <h2>The Problem We Solved</h2>
    <p>
      Our Sales team was spending hours searching through internal documentation to answer customer questions. We needed a system that could instantly retrieve relevant information and generate accurate responses.
    </p>

    <h2>Architecture Overview</h2>
    <p>
      Our RAG pipeline consists of three main components:
    </p>
    <ul>
      <li><strong>Text Collection:</strong> Automated extraction from internal APIs and documentation</li>
      <li><strong>Vector Database:</strong> Qdrant for efficient similarity search</li>
      <li><strong>LLM Integration:</strong> GPT-4 for response generation</li>
    </ul>

    <h2>Key Learnings</h2>
    <p>
      [Your detailed insights here...]
    </p>

    <h2>Conclusion</h2>
    <p>
      Building production RAG systems requires careful attention to data quality, retrieval accuracy, and monitoring. The investment pays off when you can cut information retrieval time from hours to minutes.
    </p>
  `,
  relatedPosts: [
    { slug: "vector-databases-guide", title: "Vector Databases: A Practical Guide" },
    { slug: "llm-evaluation", title: "Evaluating LLM Outputs in Production" }
  ]
}
```

## Viewing Your Blog

1. **Blog Index:** Visit `/blog` to see all posts
2. **Individual Post:** Visit `/blog/your-post-slug` to read a specific post
3. **Navigation:** Click "Blog" in the header to access the blog section

## Important Notes

- **No Sample Posts:** The blog starts empty. Add posts as you write them.
- **Automatic Routing:** Once you add a post to `blogPostsData`, it's automatically accessible at `/blog/[slug]`
- **No Database Required:** Posts are stored in code, making them version-controlled and easy to manage
- **SEO Optimized:** All posts include structured data, meta descriptions, and internal linking

## Troubleshooting

**Post not showing up?**
- Check the slug is unique and matches the URL you're visiting
- Ensure the date is in `YYYY-MM-DD` format
- Verify the content HTML is properly formatted

**Navigation not working?**
- Make sure you're using the correct slug in links
- Check that the slug in `blogPostsData` matches the URL

## Next Steps

1. Write your first blog post on a topic where you have deep expertise
2. Include concrete examples from your work (PeppaSync, AMDARI, SumUp)
3. Link back to your projects and experience sections
4. Share on Twitter/GitHub to drive traffic

Happy writing! 📝
