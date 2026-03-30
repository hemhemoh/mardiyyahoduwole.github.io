import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-xl font-bold gradient-accent">Mardiyyah Oduwole</a>
          <div className="flex items-center gap-8">
            <a href="/" className="link-hover text-sm font-medium">Home</a>
            <a href="/experience" className="link-hover text-sm font-medium">Experience</a>
            <a href="/projects" className="link-hover text-sm font-medium">Projects</a>
            <a href="/research" className="link-hover text-sm font-medium text-accent">Research</a>
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
          
          <h1 className="text-5xl font-bold mb-16">Applied Research & Publications</h1>
          
          <div className="space-y-8">
            <div className="card-subtle">
              <h3 className="text-xl font-bold mb-2">UbuntuGuard: A Culturally-Grounded Policy Benchmark for Equitable AI Safety in African Languages</h3>
              <p className="text-accent text-sm mb-3">2025</p>
              <p className="text-foreground/90 mb-4">
                Conducted cross-model and cross-language result analysis for culturally-grounded AI safety benchmarking in African languages.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Key Contribution:</strong> Established benchmarking framework for evaluating AI safety policies across diverse African language contexts, ensuring equitable and culturally-sensitive AI systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">AI Safety</span>
                <span className="tech-badge">African Languages</span>
                <span className="tech-badge">Benchmarking</span>
              </div>
            </div>

            <div className="card-subtle">
              <h3 className="text-xl font-bold mb-2">AfriCaption: Establishing a New Paradigm for Image Captioning in African Languages</h3>
              <p className="text-accent text-sm mb-3">AfricaNLP @ EACL 2026 (Accepted)</p>
              <p className="text-foreground/90 mb-4">
                Fine-tuned vision-language models for multilingual image captioning across 19 African languages, with models outperforming existing baselines.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Key Contribution:</strong> Demonstrated that vision-language models can be effectively adapted for African languages, enabling multimodal AI systems for underrepresented language communities.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Vision-Language</span>
                <span className="tech-badge">Multilingual</span>
                <span className="tech-badge">African Languages</span>
              </div>
            </div>

            <div className="card-subtle">
              <h3 className="text-xl font-bold mb-2">From Scarcity to Efficiency: Investigating the Effects of Data Augmentation on African Machine Translation</h3>
              <p className="text-accent text-sm mb-3">2025</p>
              <p className="text-foreground/90 mb-4">
                Implemented data augmentation strategies using NLLB models, achieving <strong>25% BLEU improvement</strong> across six translation pairs.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Key Contribution:</strong> Demonstrated that strategic data augmentation can significantly improve machine translation quality for low-resource African languages, addressing data scarcity challenges.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Data Augmentation</span>
                <span className="tech-badge">Machine Translation</span>
                <span className="tech-badge">NLLB</span>
              </div>
            </div>

            <div className="card-subtle">
              <h3 className="text-xl font-bold mb-2">What Happens When Small Is Made Smaller? Exploring the Impact of Compression on Small Data Pretrained Language Models</h3>
              <p className="text-accent text-sm mb-3">AfricaNLP @ ICLR 2024</p>
              <p className="text-foreground/90 mb-4">
                Achieved <strong>64% model compression (504 MB → 181.4 MB)</strong> and <strong>52% inference speed improvement</strong> on AfriBERTa using INT8 quantization for efficient low-resource deployment.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Key Contribution:</strong> Proved that small language models for African languages can be dramatically compressed without significant accuracy loss, enabling deployment on edge devices across Africa.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Model Compression</span>
                <span className="tech-badge">Quantization</span>
                <span className="tech-badge">Efficiency</span>
              </div>
            </div>

            <div className="card-subtle">
              <h3 className="text-xl font-bold mb-2">MasakhaNEWS: News Topic Classification for African Languages</h3>
              <p className="text-accent text-sm mb-3">IJCNLP-AACL 2023 (Best Paper Award at AfricaNLP @ ICLR 2023)</p>
              <p className="text-foreground/90 mb-4">
                Contributed to dataset creation and benchmarking for news topic classification across African languages. Won Best Paper Award and Area Chair Award.
              </p>
              <div className="mb-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/90">
                  <strong>Key Contribution:</strong> Created a large-scale multilingual news classification dataset and benchmarks for 16 African languages, establishing a foundation for NLP research in African language communities.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">NLP</span>
                <span className="tech-badge">African Languages</span>
                <span className="tech-badge">Benchmarking</span>
              </div>
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
