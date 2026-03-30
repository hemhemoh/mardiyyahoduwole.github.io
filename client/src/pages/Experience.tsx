import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-xl font-bold gradient-accent">Mardiyyah Oduwole</a>
          <div className="flex items-center gap-8">
            <a href="/" className="link-hover text-sm font-medium">Home</a>
            <a href="/experience" className="link-hover text-sm font-medium text-accent">Experience</a>
            <a href="/projects" className="link-hover text-sm font-medium">Projects</a>
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
          
          <h1 className="text-5xl font-bold mb-16">Professional Experience</h1>
          
          <div className="space-y-12">
            {/* Peppa */}
            <div className="card-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Machine Learning Engineer</h3>
                  <p className="text-accent font-semibold">Peppa</p>
                </div>
                <span className="text-muted-foreground text-sm">01/2026 – Present</span>
              </div>
              <p className="text-muted-foreground mb-4">London, UK</p>
              <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-semibold mb-2">Impact</p>
                <p className="text-foreground/90">Designed and deployed <strong>PeppaSync</strong>, a production ML system serving 50+ Shopify merchants, processing 10M+ transactions monthly with 99.9% uptime.</p>
              </div>
              <ul className="space-y-3 text-foreground/90 mb-4">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Revenue Shield:</strong> Isolation Forest anomaly detection identifying fraudulent transactions with 95% precision, reducing merchant chargebacks by ~15%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Growth Engine:</strong> Apriori association rules for product bundling recommendations, increasing average order value by 12% for early adopters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Decision Layer:</strong> Rule-based system translating ML signals into real-time business actions (flags, recommendations, alerts)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Full Stack:</strong> End-to-end implementation—data ingestion (Shopify API), model training pipeline, inference serving (FastAPI), and monitoring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Key Trade-off:</strong> Chose interpretable models (Isolation Forest, Apriori) over black-box approaches to enable merchant trust and regulatory compliance</span>
                </li>
              </ul>
              <p className="text-foreground/80 text-sm mb-4 italic">Lesson: For B2B products, model interpretability often matters more than marginal accuracy gains. Merchants need to understand why they're seeing recommendations.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Scikit-learn</span>
                <span className="tech-badge">Shopify API</span>
              </div>
            </div>

            {/* AMDARI */}
            <div className="card-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Data Engineering Consultant</h3>
                  <p className="text-accent font-semibold">AMDARI</p>
                </div>
                <span className="text-muted-foreground text-sm">07/2025 – Present</span>
              </div>
              <p className="text-muted-foreground mb-4">London, UK</p>
              <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-semibold mb-2">Impact</p>
                <p className="text-foreground/90">Designed and deployed data infrastructure for 4 clients, reducing data latency from 24h to 2h, enabling real-time analytics for 50+ stakeholders across real estate, e-commerce, and fintech.</p>
              </div>
              <ul className="space-y-3 text-foreground/90 mb-4">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Savannah Group (Real Estate):</strong> Built ETL pipeline extracting listings from external APIs, transforming in Python, loading into PostgreSQL. Automated daily syncs, reducing manual work by 40 hours/month.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Retailio (E-commerce):</strong> Designed cloud-native ELT pipeline processing 10,000+ records/day to AWS S3, automating Snowflake syncs via Airbyte with SQL validation. Reduced data latency from 48h to 4h.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>BlueStone Real Estate:</strong> Built centralized data platform consolidating property listings and market data across 7 US metro areas (405 zip codes), enabling real-time reporting for 30+ stakeholders.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>MarketPulse Analytics:</strong> Designed real-time streaming pipeline (Kafka to PySpark to Parquet) processing 100K+ events/sec with sub-50ms latency, enabling live market analysis dashboards.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Key Trade-off:</strong> Chose ELT (extract-load-transform) over ETL for cloud clients to reduce operational burden and leverage managed services (Snowflake, Airbyte).</span>
                </li>
              </ul>
              <p className="text-foreground/80 text-sm mb-4 italic">Lesson: Data infrastructure is only valuable if it enables business decisions. Always start by understanding what questions stakeholders need answered, then build backward to the data model.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">AWS S3</span>
                <span className="tech-badge">Snowflake</span>
                <span className="tech-badge">Airbyte</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">Kafka</span>
                <span className="tech-badge">PySpark</span>
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
              <p className="text-muted-foreground mb-4">London, UK</p>
              <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-semibold mb-2">Impact</p>
                <p className="text-foreground/90"><strong>Cut information retrieval time from 2 hours to 5 minutes (24x improvement)</strong> for 100+ Sales and Customer Success staff, enabling real-time customer support without manual documentation searches.</p>
              </div>
              <ul className="space-y-3 text-foreground/90 mb-4">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>SumUp RAG System:</strong> Built AI agent unifying access to 15+ internal APIs with RAG-based knowledge retrieval for context-aware responses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>RAG Pipeline:</strong> End-to-end implementation—collected and preprocessed text from internal docs, API specs, Slack exports; indexed into Qdrant; integrated OpenAI GPT-4 for generation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Production Monitoring:</strong> Implemented evaluation checks tracking response quality (hallucination detection), latency (sub-100ms target), and user satisfaction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Key Trade-off:</strong> Chose Qdrant (self-hosted) over Pinecone (managed) for cost control and metadata filtering flexibility, accepting operational overhead</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Iterative Refinement:</strong> Built human-in-the-loop feedback system where staff corrections improved retrieval quality over time</span>
                </li>
              </ul>
              <p className="text-foreground/80 text-sm mb-4 italic">Lesson: RAG quality is 80% data quality, 20% retrieval algorithm. Hallucination monitoring is harder than traditional ML metrics. User feedback loops are critical for production success.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">LangChain</span>
                <span className="tech-badge">OpenAI GPT-4</span>
                <span className="tech-badge">Vector DB</span>
                <span className="tech-badge">RAG</span>
              </div>
            </div>

            {/* ML Collective */}
            <div className="card-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Research Engineer</h3>
                  <p className="text-accent font-semibold">ML Collective</p>
                </div>
                <span className="text-muted-foreground text-sm">06/2023 – 05/2025</span>
              </div>
              <p className="text-muted-foreground mb-4">Remote</p>
              <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-semibold mb-2">Impact</p>
                <p className="text-foreground/90">Achieved significant model compression and efficiency improvements on African language models, enabling deployment on 50M+ low-resource devices across Africa.</p>
              </div>
              <ul className="space-y-3 text-foreground/90 mb-4">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Model Compression:</strong> Achieved 64% model compression (504 MB to 181.4 MB) and 52% inference speed improvement on AfriBERTa using INT8 quantization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Vision-Language Models:</strong> Fine-tuned vision-language models for multilingual image captioning across 19 African languages (AfriCaption), outperforming existing baselines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Data Augmentation:</strong> Implemented data augmentation strategies using NLLB models, achieving 25% BLEU improvement across six translation pairs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Cross-Model Analysis:</strong> Conducted cross-model and cross-language result analysis for UbuntuGuard, a culturally-grounded AI safety benchmark for African languages</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Key Trade-off:</strong> Prioritized model efficiency over marginal accuracy gains to enable deployment in resource-constrained environments</span>
                </li>
              </ul>
              <p className="text-foreground/80 text-sm mb-4 italic">Lesson: For African language models, efficiency is not optional—it's a requirement. Understanding hardware constraints shapes architecture decisions from the start.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">PyTorch</span>
                <span className="tech-badge">Quantization</span>
                <span className="tech-badge">NLLB-200</span>
                <span className="tech-badge">Model Compression</span>
                <span className="tech-badge">NLP</span>
              </div>
            </div>

            {/* Prunedge */}
            <div className="card-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Machine Learning Engineer</h3>
                  <p className="text-accent font-semibold">Prunedge Development</p>
                </div>
                <span className="text-muted-foreground text-sm">06/2022 – 06/2023</span>
              </div>
              <p className="text-muted-foreground mb-4">Remote</p>
              <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-semibold mb-2">Impact</p>
                <p className="text-foreground/90">Reduced customer response times by 70% through conversational AI, enabling real-time customer engagement at scale.</p>
              </div>
              <ul className="space-y-3 text-foreground/90 mb-4">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Conversational AI Chatbot:</strong> Built OpenAI-powered chatbot reducing customer response times by 70%, enabling real-time support for high-volume queries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Opinion Mining Tool:</strong> Built real-time opinion mining tool for high-volume NLP analysis using TensorFlow, Flask, and Docker</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Facial Age Estimation:</strong> Integrated facial age estimation model built in PyTorch into existing production workflows</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Product Recommendation System:</strong> Developed recommendation system improving user engagement through personalized delivery</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span><strong>Key Trade-off:</strong> Chose OpenAI APIs for speed-to-market over fine-tuned models, accepting higher per-query costs</span>
                </li>
              </ul>
              <p className="text-foreground/80 text-sm mb-4 italic">Lesson: Sometimes the best model is the one you don't build. Leveraging existing APIs can be faster and more cost-effective than building from scratch.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">OpenAI APIs</span>
                <span className="tech-badge">TensorFlow</span>
                <span className="tech-badge">Flask</span>
                <span className="tech-badge">Docker</span>
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
