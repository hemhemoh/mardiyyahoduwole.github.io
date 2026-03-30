import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

/**
 * Blog Index Page
 * 
 * Design Philosophy: Minimalist, technical, and clean
 * - Dark theme with cyan accents (consistent with portfolio)
 * - Clear typography hierarchy for readability
 * - SEO-optimized with structured data
 * - Internal linking to portfolio sections
 */

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: string;
  metaDescription: string;
}

// Blog posts data structure - add new posts here
const blogPosts: BlogPost[] = [];

export default function Blog() {
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
            <Link href="/#research">
              <a className="link-hover text-sm font-medium">Research</a>
            </Link>
            <Link href="/blog">
              <a className="link-hover text-sm font-medium text-accent">Blog</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="section-padding border-b border-border">
        <div className="container max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Technical writing on machine learning systems, data engineering, and building products that ship. Insights from production experience and research.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          {blogPosts.length === 0 ? (
            <div className="card-subtle text-center py-16">
              <p className="text-lg text-muted-foreground mb-6">
                Blog posts coming soon. Check back for technical deep-dives on ML systems, data engineering, and African language NLP.
              </p>
              <Link href="/#projects">
                <Button className="gap-2">
                  Explore My Work
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="card-subtle hover:border-accent/50 transition-colors cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold link-hover mb-2">
                          {post.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {post.readingTime} min read
                          </div>
                          <span className="tech-badge">{post.category}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/90 mb-4">{post.excerpt}</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      Read Article
                      <ArrowRight size={14} />
                    </Button>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-t border-border">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Follow my work on GitHub and Twitter for updates on new posts and projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/hemhemoh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
            <a href="https://twitter.com/hemhemoh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Twitter/X</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2026 Mardiyyah Oduwole. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      {/* SEO: Structured Data for Blog Collection */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Mardiyyah Oduwole's Blog",
          description:
            "Technical writing on machine learning systems, data engineering, and building products that ship.",
          url: "https://mardiyyahoduwole.com/blog",
          author: {
            "@type": "Person",
            name: "Mardiyyah Oduwole",
            url: "https://mardiyyahoduwole.com",
          },
        })}
      </script>
    </div>
  );
}
