import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useParams } from "wouter";
import { Link } from "wouter";

/**
 * Blog Post Page
 * 
 * Design Philosophy: Focus on readability and content
 * - Clean typography with generous whitespace
 * - Dark theme with high contrast for reading comfort
 * - SEO-optimized with structured data
 * - Internal linking to related work
 * 
 * To add a new blog post:
 * 1. Add post data to the `blogPostsData` object below
 * 2. Create a new entry with: slug, title, date, readingTime, category, metaDescription, content
 * 3. The page will automatically render at /blog/[slug]
 */

interface BlogPostData {
  title: string;
  date: string;
  readingTime: number;
  category: string;
  metaDescription: string;
  content: string; // HTML or JSX content
  relatedPosts?: Array<{ slug: string; title: string }>;
}

// Blog posts data - add new posts here
const blogPostsData: Record<string, BlogPostData> = {
  // Example structure (delete this comment when adding real posts):
  // "your-post-slug": {
  //   title: "Your Post Title",
  //   date: "2026-03-30",
  //   readingTime: 8,
  //   category: "ML Systems",
  //   metaDescription: "A brief description for search results (160 chars max)",
  //   content: "Your full post content here...",
  //   relatedPosts: [
  //     { slug: "another-post", title: "Another Post Title" }
  //   ]
  // }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container flex items-center justify-between py-4">
            <Link href="/">
              <div className="text-xl font-bold gradient-accent cursor-pointer hover:opacity-80 transition-opacity">
                Mardiyyah Oduwole
              </div>
            </Link>
          </div>
        </nav>

        {/* 404 Section */}
        <section className="section-padding">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              This blog post doesn't exist yet. Check back soon for new content.
            </p>
            <Link href="/blog">
              <Button className="gap-2">
                <ArrowLeft size={18} />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-8 mt-16">
          <div className="container text-center text-muted-foreground text-sm">
            <p>© 2026 Mardiyyah Oduwole. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <div className="text-xl font-bold gradient-accent cursor-pointer hover:opacity-80 transition-opacity">
              Mardiyyah Oduwole
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/#experience">
              <a className="link-hover text-sm font-medium">Experience</a>
            </Link>
            <Link href="/#projects">
              <a className="link-hover text-sm font-medium">Projects</a>
            </Link>
            <Link href="/blog">
              <a className="link-hover text-sm font-medium text-accent">Blog</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="section-padding border-b border-border">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button variant="outline" size="sm" className="gap-2 mb-8">
              <ArrowLeft size={16} />
              Back to Blog
            </Button>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {post.readingTime} min read
            </div>
            <span className="tech-badge">{post.category}</span>
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="prose prose-invert max-w-none">
            {/* Content is rendered here - can be HTML string or JSX */}
            <div
              className="text-foreground/90 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Author Bio */}
          <div className="card-subtle mt-16 border-accent/30">
            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2">About the Author</h3>
                <p className="text-foreground/80 mb-4">
                  Mardiyyah Oduwole is an ML Engineer and Data Systems Architect focused on building production machine learning systems, data pipelines, and AI agents. She has published research on African language NLP and model efficiency.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hemhemoh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com/hemhemoh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-sm font-medium"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border">
              <h3 className="text-2xl font-bold mb-8">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <div className="card-subtle hover:border-accent/50 transition-colors cursor-pointer">
                      <h4 className="font-bold link-hover mb-2">
                        {relatedPost.title}
                      </h4>
                      <Button variant="outline" size="sm" className="gap-2">
                        Read More
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-t border-border">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Enjoyed This Post?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Share it with others or follow for more technical writing on ML systems and data engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://twitter.com/hemhemoh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Share on Twitter</Button>
            </a>
            <Link href="/blog">
              <Button className="gap-2">
                More Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2026 Mardiyyah Oduwole. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      {/* SEO: Structured Data for Blog Post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: "Mardiyyah Oduwole",
            url: "https://mardiyyahoduwole.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Mardiyyah Oduwole",
            url: "https://mardiyyahoduwole.com",
          },
        })}
      </script>
    </div>
  );
}
