import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold gradient-accent">Mardiyyah Oduwole</div>
          <div className="flex items-center gap-8">
            <a href="#featured" className="link-hover text-sm font-medium">Featured</a>
            <a href="/experience" className="link-hover text-sm font-medium">Experience</a>
            <a href="/projects" className="link-hover text-sm font-medium">Projects</a>
            <a href="/research" className="link-hover text-sm font-medium">Research</a>
            <a href="/blog" className="link-hover text-sm font-medium">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663099286238/ReEuo9YHoaPsNsXix3YbNM/hero-ml-architecture-CCFPksP8ioqEujmvrRgVtc.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="relative z-10 container py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Machine Learning Engineer & Data Systems Architect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              I design and deploy machine learning systems from the ground up. My work spans data pipelines, retrieval architectures, vector databases, and AI agents. I care about model behaviour, efficiency tradeoffs, and shipping robust products.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/hemhemoh" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <Github size={18} />
                  GitHub
                </Button>
              </a>
              <a href="mailto:mardiyyahodu@gmail.com">
                <Button variant="outline" className="gap-2">
                  <Mail size={18} />
                  Email
                </Button>
              </a>
              <a href="#featured">
                <Button variant="outline" className="gap-2">
                  View My Work
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section id="featured" className="section-padding bg-card/50 border-y border-border">
        <div className="container">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">Featured Experience</h2>
            <a href="/experience">
              <Button variant="outline" className="gap-2">
                View All Roles
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
          
          <div className="space-y-8">
            {/* Peppa */}
            <div className="card-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Machine Learning Engineer</h3>
                  <p className="text-accent font-semibold">Peppa</p>
                </div>
                <span className="text-muted-foreground text-sm">01/2026 – Present</span>
              </div>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-semibold mb-2">Impact</p>
                <p className="text-foreground/90">Designed and deployed <strong>PeppaSync</strong>, a production ML system serving 50+ Shopify merchants, processing 10M+ transactions monthly with 99.9% uptime.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Scikit-learn</span>
                <span className="tech-badge">Shopify API</span>
              </div>
            </div>

            {/* SumUp */}
            <div className="card-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Accelerator Engineer</h3>
                  <p className="text-accent font-semibold">SumUp Payment Services</p>
                </div>
                <span className="text-muted-foreground text-sm">03/2025 – 06/2025</span>
              </div>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-semibold mb-2">Impact</p>
                <p className="text-foreground/90"><strong>Cut information retrieval time from 2 hours to 5 minutes (24x improvement)</strong> for 100+ Sales and Customer Success staff.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">LLM Development</span>
                <span className="tech-badge">RAG Systems</span>
                {/* <span className="tech-badge"></span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <a href="/projects">
              <Button variant="outline" className="gap-2">
                View All Projects
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wazobia-Wellness */}
            <div className="card-subtle">
              <h3 className="text-2xl font-bold mb-3">Wazobia-Wellness</h3>
              <p className="text-muted-foreground mb-4">
                Multilingual mental health chatbot providing culturally-sensitive therapeutic support in English, Yoruba, Igbo, and Hausa.
              </p>
              <p className="text-foreground/80 mb-4 text-sm">
                <strong>Problem:</strong> Lack of accessible mental health support in African languages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Gemma-2</span>
                <span className="tech-badge">NLLB-200</span>
              </div>
              <a href="https://github.com/hemhemoh/Wazobia-Wellness" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  View Repository
                  <ExternalLink size={14} />
                </Button>
              </a>
            </div>

            {/* Paper Pilot */}
            <div className="card-subtle">
              <h3 className="text-2xl font-bold mb-3">Paper Pilot</h3>
              <p className="text-muted-foreground mb-4">
                AI-powered research assistant that analyzes academic papers and conducts literature reviews.
              </p>
              <p className="text-foreground/80 mb-4 text-sm">
                <strong>Problem:</strong> Accelerating literature review and knowledge synthesis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">LangChain</span>
                <span className="tech-badge">Cohere</span>
                <span className="tech-badge">RAG</span>
              </div>
              <a href="https://github.com/hemhemoh/paper_pilot" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  View Repository
                  <ExternalLink size={14} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="section-padding bg-card/50 border-y border-border">
        <div className="container">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">Featured Research</h2>
            <a href="/research">
              <Button variant="outline" className="gap-2">
                View All Publications
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
          
          <div className="space-y-6">
            <div className="card-subtle">
              <h3 className="text-xl font-bold mb-2">MasakhaNEWS: News Topic Classification for African Languages</h3>
              <p className="text-accent text-sm mb-3">IJCNLP-AACL 2023 (Best Paper Award)</p>
              <p className="text-foreground/90 mb-3">
                Created a large-scale multilingual news classification dataset and benchmarks for 16 African languages.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">NLP</span>
                <span className="tech-badge">African Languages</span>
                <span className="tech-badge">Benchmarking</span>
              </div>
            </div>

            <div className="card-subtle">
              <h3 className="text-xl font-bold mb-2">What Happens When Small Is Made Smaller? Exploring Model Compression</h3>
              <p className="text-accent text-sm mb-3">AfricaNLP @ ICLR 2024</p>
              <p className="text-foreground/90 mb-3">
                Achieved <strong>64% model compression</strong> and <strong>52% inference speed improvement</strong> on AfriBERTa using INT8 quantization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Model Compression</span>
                <span className="tech-badge">Quantization</span>
                <span className="tech-badge">Efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-t border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing ML engineering challenges, data systems architecture, and building products that ship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mardiyyahodu@gmail.com">
              <Button className="gap-2">
                <Mail size={18} />
                Get in Touch
              </Button>
            </a>
            <a href="https://github.com/hemhemoh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github size={18} />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/mardiyyah-oduwole" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </a>
            <a href="https://mardiyyahoduwole.com/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <FileText size={18} />
                CV
              </Button>
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
    </div>
  );
}
