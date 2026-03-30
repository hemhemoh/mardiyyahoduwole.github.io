import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-xl font-bold gradient-accent">Mardiyyah Oduwole</a>
          <div className="flex items-center gap-8">
            <a href="/" className="link-hover text-sm font-medium">Home</a>
            <a href="/experience" className="link-hover text-sm font-medium">Experience</a>
            <a href="/projects" className="link-hover text-sm font-medium text-accent">Projects</a>
            <a href="/research" className="link-hover text-sm font-medium">Research</a>
            <a href="/blog" className="link-hover text-sm font-medium">Blog</a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <section className="section-padding">
        <div className="container">
          <a href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft size={18} />
            Back to Home
          </a>
          
          <h1 className="text-5xl font-bold mb-16">Featured Projects</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wazobia-Wellness */}
            <div className="card-subtle">
              <h3 className="text-2xl font-bold mb-3">Wazobia-Wellness</h3>
              <p className="text-muted-foreground mb-4">
                Multilingual mental health chatbot providing culturally-sensitive therapeutic support in English, Yoruba, Igbo, and Hausa using fine-tuned Gemma-2-2b-it and NLLB-200 translation models.
              </p>
              <p className="text-foreground/80 mb-4 text-sm">
                <strong>Problem Solved:</strong> Lack of accessible mental health support in African languages with cultural awareness.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Impact:</strong> Enables culturally-grounded mental health support for millions of African language speakers, addressing a critical gap in accessible healthcare.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Gemma-2</span>
                <span className="tech-badge">NLLB-200</span>
                <span className="tech-badge">NLP</span>
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
                AI-powered research assistant that analyzes academic papers and conducts literature reviews. Upload PDFs or search ArXiv papers to get intelligent summaries and key findings.
              </p>
              <p className="text-foreground/80 mb-4 text-sm">
                <strong>Problem Solved:</strong> Accelerating literature review and knowledge synthesis from large paper collections.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Impact:</strong> Reduces literature review time from weeks to hours, enabling researchers to focus on novel insights rather than manual paper processing.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">LangChain</span>
                <span className="tech-badge">Cohere</span>
                <span className="tech-badge">Qdrant</span>
                <span className="tech-badge">RAG</span>
              </div>
              <a href="https://github.com/hemhemoh/paper_pilot" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  View Repository
                  <ExternalLink size={14} />
                </Button>
              </a>
            </div>

            {/* GCP VM Control */}
            <div className="card-subtle">
              <h3 className="text-2xl font-bold mb-3">GCP VM Control</h3>
              <p className="text-muted-foreground mb-4">
                Production-ready cloud infrastructure management platform with real-time instance monitoring, automated notifications, and containerized deployment.
              </p>
              <p className="text-foreground/80 mb-4 text-sm">
                <strong>Problem Solved:</strong> Streamlined cloud resource management and monitoring across multiple GCP instances.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Impact:</strong> Reduces operational overhead by automating instance management and providing real-time visibility into cloud resources.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Streamlit</span>
                <span className="tech-badge">GCP</span>
                <span className="tech-badge">Docker</span>
              </div>
              <a href="https://github.com/hemhemoh/gcp-vm-control" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  View Repository
                  <ExternalLink size={14} />
                </Button>
              </a>
            </div>

            {/* Text Summarization */}
            <div className="card-subtle">
              <h3 className="text-2xl font-bold mb-3">Text Summarization App</h3>
              <p className="text-muted-foreground mb-4">
                Efficient text summarization system reducing 512+ token inputs to 128 tokens while retaining context. Deployed using Hugging Face Transformers.
              </p>
              <p className="text-foreground/80 mb-4 text-sm">
                <strong>Problem Solved:</strong> Extractive and abstractive summarization for long-form content with minimal information loss.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Impact:</strong> Enables rapid content consumption and knowledge extraction from large document collections.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">Transformers</span>
                <span className="tech-badge">Hugging Face</span>
                <span className="tech-badge">NLP</span>
              </div>
              <a href="https://github.com/hemhemoh/Text-Summarization-App" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  View Repository
                  <ExternalLink size={14} />
                </Button>
              </a>
            </div>
          </div>
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
