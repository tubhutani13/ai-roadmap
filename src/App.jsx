import { useState } from "react";

const phases = [
  {
    id: 1,
    label: "PHASE 1",
    title: "Foundations",
    duration: "4–6 weeks",
    color: "#00E5FF",
    icon: "◈",
    description: "Build the base: Python fluency, math intuition, and how neural networks actually work.",
    sections: [
      {
        title: "Python & Math Essentials",
        type: "prereq",
        items: [
          { name: "Python for Everybody (freeCodeCamp YouTube)", link: "https://youtube.com", tag: "FREE", note: "If you need a brush-up" },
          { name: "3Blue1Brown – Essence of Linear Algebra", link: "https://youtube.com/@3blue1brown", tag: "YouTube", note: "Visual, intuitive math" },
          { name: "3Blue1Brown – Neural Networks series", link: "https://youtube.com/@3blue1brown", tag: "YouTube", note: "Best visual intro to NNs" },
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        type: "course",
        items: [
          { name: "Machine Learning Specialization – Andrew Ng (Coursera)", link: "https://deeplearning.ai", tag: "DeepLearning.AI", note: "3 courses, gold standard" },
          { name: "StatQuest with Josh Starmer", link: "https://youtube.com/@statquest", tag: "YouTube", note: "Intuitive ML explainers" },
        ]
      },
      {
        title: "Deep Learning Core",
        type: "course",
        items: [
          { name: "Deep Learning Specialization – Andrew Ng (5 courses)", link: "https://deeplearning.ai", tag: "DeepLearning.AI", note: "CNNs, RNNs, backprop, optimization" },
          { name: "Andrej Karpathy – Neural Networks: Zero to Hero", link: "https://youtube.com/@AndrejKarpathy", tag: "YouTube ★★★", note: "Build GPT from scratch — essential" },
        ]
      }
    ]
  },
  {
    id: 2,
    label: "PHASE 2",
    title: "LLMs & Generative AI",
    duration: "4–5 weeks",
    color: "#FF6B35",
    icon: "◉",
    description: "Understand how large language models work, how to talk to them effectively, and how to build your first apps.",
    sections: [
      {
        title: "How LLMs Work",
        type: "theory",
        items: [
          { name: "Andrej Karpathy – Let's build GPT (YouTube)", link: "https://youtube.com/@AndrejKarpathy", tag: "YouTube ★★★", note: "Build a transformer from scratch" },
          { name: "How Large Language Models Work (1hr, Karpathy)", link: "https://youtube.com/@AndrejKarpathy", tag: "YouTube", note: "Conceptual masterclass" },
          { name: "Yannic Kilcher – Attention Is All You Need (paper walkthrough)", link: "https://youtube.com/@YannicKilcher", tag: "YouTube", note: "The transformer paper explained" },
        ]
      },
      {
        title: "Prompt Engineering",
        type: "course",
        items: [
          { name: "ChatGPT Prompt Engineering for Developers", link: "https://deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", tag: "DeepLearning.AI FREE", note: "By Isa Fulford & Andrew Ng" },
          { name: "Prompt Engineering with Llama 2 & 3", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Meta's models" },
          { name: "Prompt Engineering for Vision Models", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Multimodal prompting" },
        ]
      },
      {
        title: "First LLM Applications",
        type: "course",
        items: [
          { name: "LangChain for LLM Application Development", link: "https://deeplearning.ai/short-courses/langchain-for-llm-application-development/", tag: "DeepLearning.AI FREE", note: "Chains, parsers, memory" },
          { name: "Building Systems with the ChatGPT API", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Multi-step workflows" },
          { name: "Krish Naik – LangChain Full Course", link: "https://youtube.com/@krishnaik06", tag: "YouTube", note: "Build complete LLM apps" },
        ]
      },
      {
        title: "Generative AI Overview",
        type: "course",
        items: [
          { name: "Generative AI for Everyone – Andrew Ng", link: "https://deeplearning.ai/courses/generative-ai-for-everyone/", tag: "DeepLearning.AI", note: "Strategic + conceptual foundation" },
          { name: "Generative AI with LLMs (Coursera)", link: "https://coursera.org", tag: "DeepLearning.AI + AWS", note: "Transformers, RLHF, deployment" },
        ]
      }
    ]
  },
  {
    id: 3,
    label: "PHASE 3",
    title: "RAG Systems",
    duration: "4–5 weeks",
    color: "#7C3AED",
    icon: "◎",
    description: "Master retrieval-augmented generation — the core architecture for grounded, production AI systems.",
    sections: [
      {
        title: "Embeddings & Vector Databases",
        type: "theory",
        items: [
          { name: "Understanding & Applying Text Embeddings", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Google's embedding API" },
          { name: "Vector Databases: from Embeddings to Applications", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Weaviate, indexing, HNSW" },
          { name: "Large Language Models with Semantic Search", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Dense + sparse retrieval" },
        ]
      },
      {
        title: "Core RAG",
        type: "course",
        items: [
          { name: "LangChain: Chat With Your Data", link: "https://deeplearning.ai/short-courses/langchain-chat-with-your-data/", tag: "DeepLearning.AI FREE", note: "Chunking, retrieval, Q&A chains" },
          { name: "Retrieval Augmented Generation (RAG) – DeepLearning.AI", link: "https://learn.deeplearning.ai/courses/retrieval-augmented-generation/", tag: "DeepLearning.AI ★★★", note: "Full RAG course with Weaviate" },
          { name: "Advanced Retrieval for AI with Chroma", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Query expansion, re-ranking" },
        ]
      },
      {
        title: "Advanced RAG Techniques",
        type: "advanced",
        items: [
          { name: "Building & Evaluating Advanced RAG", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "RAG Triad evaluation, TruLens" },
          { name: "Knowledge Graphs for RAG", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Neo4j + LLMs" },
          { name: "Preprocessing Unstructured Data for LLM Apps", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "PDFs, images, tables" },
          { name: "Multimodal RAG: Chat with Videos", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Video as retrieval source" },
        ]
      },
      {
        title: "🛠 Build: Your First RAG Project",
        type: "project",
        items: [
          { name: "PDF Q&A bot over your own documents", tag: "Project", note: "LangChain + Chroma/Pinecone + OpenAI" },
          { name: "Domain-specific chatbot (e.g. HR policy, product docs)", tag: "Project", note: "Add hybrid search + evaluation" },
        ]
      }
    ]
  },
  {
    id: 4,
    label: "PHASE 4",
    title: "AI Agents",
    duration: "5–6 weeks",
    color: "#10B981",
    icon: "◍",
    description: "Build autonomous agents that reason, use tools, plan multi-step tasks, and collaborate with other agents.",
    sections: [
      {
        title: "Agent Fundamentals",
        type: "theory",
        items: [
          { name: "Functions, Tools and Agents with LangChain", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Tool calling, OpenAI functions" },
          { name: "AI Agents in LangGraph", link: "https://deeplearning.ai/short-courses/ai-agents-in-langgraph/", tag: "DeepLearning.AI FREE ★★★", note: "Stateful agents with LangGraph" },
          { name: "AI Jason – Agent tutorials & workflows", link: "https://youtube.com/@AIJasonZ", tag: "YouTube", note: "Agent design patterns" },
        ]
      },
      {
        title: "Agentic RAG",
        type: "course",
        items: [
          { name: "Building Agentic RAG with LlamaIndex", link: "https://deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/", tag: "DeepLearning.AI FREE ★★★", note: "Routers, tool-calling agents, multi-doc" },
          { name: "LlamaIndex: Agentic Workflows", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Query pipelines, agentic RAG" },
        ]
      },
      {
        title: "Multi-Agent Systems",
        type: "advanced",
        items: [
          { name: "Multi AI Agent Systems with crewAI", link: "https://deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/", tag: "DeepLearning.AI FREE ★★★", note: "Role-based agent collaboration" },
          { name: "Practical Multi AI Agents and Advanced Use Cases with crewAI", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Production patterns" },
          { name: "LLMs as Operating Systems: Agent Memory", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Memory architectures for agents" },
          { name: "Building Your Own Database Agent", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Agents that query SQL/NoSQL" },
        ]
      },
      {
        title: "🛠 Build: Agent Projects",
        type: "project",
        items: [
          { name: "Research agent: autonomously searches, reads, summarizes web", tag: "Project", note: "LangGraph + web search tools" },
          { name: "Multi-agent coding assistant with code execution", tag: "Project", note: "CrewAI or LangGraph" },
          { name: "Agentic RAG: agent that picks tools + retrieves context", tag: "Project", note: "LlamaIndex agentic pipeline" },
        ]
      }
    ]
  },
  {
    id: 5,
    label: "PHASE 5",
    title: "Fine-tuning & Model Customization",
    duration: "3–4 weeks",
    color: "#F59E0B",
    icon: "◐",
    description: "Customize LLMs with your own data using LoRA, QLoRA, and instruction tuning techniques.",
    sections: [
      {
        title: "Fine-Tuning Foundations",
        type: "course",
        items: [
          { name: "Finetuning Large Language Models", link: "https://deeplearning.ai/short-courses/finetuning-large-language-models/", tag: "DeepLearning.AI FREE", note: "When/why to fine-tune" },
          { name: "LLMOps", link: "https://deeplearning.ai/short-courses/llmops/", tag: "DeepLearning.AI FREE", note: "Supervised tuning pipeline, versioning" },
          { name: "Parameter Efficient Fine-Tuning (PEFT + LoRA)", link: "https://youtube.com", tag: "YouTube / HuggingFace", note: "LoRA, QLoRA with HuggingFace TRL" },
        ]
      },
      {
        title: "Alignment & Evaluation",
        type: "course",
        items: [
          { name: "Reinforcement Learning from Human Feedback (RLHF)", link: "https://deeplearning.ai/short-courses/reinforcement-learning-from-human-feedback/", tag: "DeepLearning.AI FREE", note: "RLHF pipeline from scratch" },
          { name: "Evaluating and Debugging Generative AI", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Weights & Biases, eval frameworks" },
          { name: "Red Teaming LLM Applications", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Safety, bias, adversarial testing" },
        ]
      },
      {
        title: "🛠 Build: Fine-Tuning Project",
        type: "project",
        items: [
          { name: "Fine-tune Llama / Mistral on domain-specific Q&A", tag: "Project", note: "QLoRA + HuggingFace + Unsloth" },
          { name: "Compare fine-tuned vs RAG for your use case", tag: "Project", note: "Benchmark and decide" },
        ]
      }
    ]
  },
  {
    id: 6,
    label: "PHASE 6",
    title: "Production & LLMOps",
    duration: "3–4 weeks",
    color: "#EF4444",
    icon: "◑",
    description: "Deploy, monitor, evaluate, and scale AI systems. Turn experiments into production-grade pipelines.",
    sections: [
      {
        title: "Deployment & Serving",
        type: "course",
        items: [
          { name: "ML in Production / MLOps Specialization – Andrew Ng", link: "https://deeplearning.ai", tag: "DeepLearning.AI", note: "CI/CD, monitoring, drift detection" },
          { name: "Efficiently Serving LLMs", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "KV cache, batching, quantization" },
          { name: "Quantization Fundamentals with Hugging Face", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "GPTQ, GGUF, INT4" },
        ]
      },
      {
        title: "Evaluation & Observability",
        type: "course",
        items: [
          { name: "LangSmith for LLM Observability (LangChain docs + YouTube)", link: "https://youtube.com", tag: "YouTube/Docs", note: "Tracing, evals, debugging" },
          { name: "Automated Testing for LLMOps", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "CI pipelines for LLM apps" },
          { name: "Building Production-Ready RAG Apps (Nvidia NeMo)", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Observability, eval, deployment" },
        ]
      },
      {
        title: "🛠 Build: Production Project",
        type: "project",
        items: [
          { name: "Deploy an agent or RAG app to cloud (Render / Railway / AWS)", tag: "Project", note: "FastAPI + Docker + LangServe" },
          { name: "Add monitoring, evals, and logging to your app", tag: "Project", note: "LangSmith / Arize Phoenix" },
        ]
      }
    ]
  },
  {
    id: 7,
    label: "PHASE 7",
    title: "Advanced & Capstone",
    duration: "Ongoing",
    color: "#EC4899",
    icon: "◆",
    description: "Multimodal AI, cutting-edge research, and building a portfolio of 5+ real-world AI projects.",
    sections: [
      {
        title: "Multimodal & Emerging",
        type: "advanced",
        items: [
          { name: "Multimodal RAG: Chat with Videos", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "Vision + text retrieval" },
          { name: "Build LLM Apps with LangChain.js", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "For JS/TS devs" },
          { name: "Open Source Models with HuggingFace", link: "https://deeplearning.ai", tag: "DeepLearning.AI FREE", note: "ZeroShotClassification, Diffusers" },
          { name: "Build and Train an LLM with JAX (NEW 2026)", link: "https://deeplearning.ai", tag: "DeepLearning.AI", note: "Train from scratch" },
        ]
      },
      {
        title: "Research & Staying Current",
        type: "resource",
        items: [
          { name: "Yannic Kilcher – AI paper walkthroughs", link: "https://youtube.com/@YannicKilcher", tag: "YouTube", note: "Attention, transformers, new models" },
          { name: "Umar Jamil – ML from scratch (technical)", link: "https://youtube.com/@umarjamilai", tag: "YouTube ★★★", note: "Implements papers from scratch" },
          { name: "The Batch – Andrew Ng's AI newsletter", link: "https://deeplearning.ai/the-batch/", tag: "Newsletter", note: "Weekly AI news" },
          { name: "Arxiv Sanity / Papers with Code", link: "https://paperswithcode.com", tag: "Research", note: "Track SOTA methods" },
        ]
      },
      {
        title: "🏆 Capstone Portfolio Projects",
        type: "project",
        items: [
          { name: "End-to-end multi-agent system with memory + tool use + RAG", tag: "Portfolio", note: "Your flagship project" },
          { name: "Fine-tuned open-source LLM deployed as an API", tag: "Portfolio", note: "HuggingFace Hub + FastAPI" },
          { name: "AI copilot for a real domain (legal, medical, code, finance)", tag: "Portfolio", note: "Combine RAG + agents + evals" },
          { name: "Write up case studies on GitHub / blog", tag: "Portfolio", note: "Show your thinking, not just code" },
        ]
      }
    ]
  }
];

const tagColors = {
  "DeepLearning.AI FREE": { bg: "#0a1628", border: "#00E5FF", text: "#00E5FF" },
  "DeepLearning.AI FREE ★★★": { bg: "#1a0a28", border: "#7C3AED", text: "#a78bfa" },
  "DeepLearning.AI ★★★": { bg: "#1a0a28", border: "#7C3AED", text: "#a78bfa" },
  "DeepLearning.AI": { bg: "#0d1117", border: "#4a90d9", text: "#7eb8f7" },
  "YouTube": { bg: "#1a0808", border: "#FF4444", text: "#ff8080" },
  "YouTube ★★★": { bg: "#200808", border: "#FF4444", text: "#ff6060" },
  "YouTube/Docs": { bg: "#1a0808", border: "#FF4444", text: "#ff8080" },
  "Project": { bg: "#0a1a0a", border: "#10B981", text: "#6ee7b7" },
  "Portfolio": { bg: "#1a0a14", border: "#EC4899", text: "#f9a8d4" },
  "Newsletter": { bg: "#1a1400", border: "#F59E0B", text: "#fcd34d" },
  "Research": { bg: "#0a0a1a", border: "#8b5cf6", text: "#c4b5fd" },
  "FREE": { bg: "#0a1628", border: "#00E5FF", text: "#00E5FF" },
};

const typeLabels = {
  prereq: "PREREQUISITE",
  course: "COURSE",
  theory: "THEORY",
  advanced: "ADVANCED",
  project: "PROJECT",
  resource: "RESOURCES",
};

export default function AIRoadmap() {
  const [activePhase, setActivePhase] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (key) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{
      background: "#060810",
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: "#e2e8f0",
      padding: "0",
      overflowX: "hidden"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #060810 0%, #0d1117 50%, #060810 100%)",
        borderBottom: "1px solid #1e293b",
        padding: "48px 32px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ fontSize: "11px", letterSpacing: "6px", color: "#00E5FF", marginBottom: "12px", opacity: 0.8 }}>
          ◈ COMPLETE LEARNING SYSTEM ◈
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: "900",
          letterSpacing: "-1px",
          margin: "0 0 8px",
          background: "linear-gradient(135deg, #ffffff 0%, #00E5FF 50%, #7C3AED 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Courier New', monospace",
        }}>
          AI ENGINEERING ROADMAP
        </h1>
        <div style={{ color: "#64748b", fontSize: "13px", letterSpacing: "3px", marginBottom: "24px" }}>
          ZERO → PRODUCTION-GRADE AGENTS & RAG SYSTEMS
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          {[
            { label: "7 PHASES", sub: "structured path" },
            { label: "30+ COURSES", sub: "deeplearning.ai + YT" },
            { label: "10+ PROJECTS", sub: "build as you learn" },
            { label: "~6 MONTHS", sub: "part-time pace" },
          ].map(item => (
            <div key={item.label} style={{
              border: "1px solid #1e293b",
              padding: "10px 18px",
              borderRadius: "4px",
              background: "rgba(255,255,255,0.02)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "14px", fontWeight: "bold", color: "#00E5FF", letterSpacing: "1px" }}>{item.label}</div>
              <div style={{ fontSize: "10px", color: "#475569", letterSpacing: "1px" }}>{item.sub.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Navigator */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        padding: "16px 32px",
        gap: "8px",
        borderBottom: "1px solid #0f172a",
        background: "#080b12",
        scrollbarWidth: "none"
      }}>
        {phases.map(p => (
          <button
            key={p.id}
            onClick={() => setActivePhase(activePhase === p.id ? null : p.id)}
            style={{
              background: activePhase === p.id ? `${p.color}18` : "transparent",
              border: `1px solid ${activePhase === p.id ? p.color : "#1e293b"}`,
              color: activePhase === p.id ? p.color : "#64748b",
              padding: "8px 16px",
              borderRadius: "2px",
              cursor: "pointer",
              fontSize: "11px",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {p.icon} P{p.id}
          </button>
        ))}
        <button
          onClick={() => setActivePhase(null)}
          style={{
            background: "transparent",
            border: "1px dashed #1e293b",
            color: "#334155",
            padding: "8px 16px",
            borderRadius: "2px",
            cursor: "pointer",
            fontSize: "11px",
            letterSpacing: "2px",
            fontFamily: "'Courier New', monospace",
          }}
        >
          ALL
        </button>
      </div>

      {/* Phases */}
      <div style={{ padding: "32px", maxWidth: "1100px", margin: "0 auto" }}>
        {phases.filter(p => activePhase === null || p.id === activePhase).map((phase, pi) => (
          <div key={phase.id} style={{ marginBottom: "48px" }}>
            {/* Phase Header */}
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "24px",
              paddingBottom: "20px",
              borderBottom: `1px solid ${phase.color}30`,
            }}>
              <div style={{
                width: "56px", height: "56px", flexShrink: 0,
                border: `2px solid ${phase.color}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", color: phase.color,
                background: `${phase.color}0a`,
                borderRadius: "4px",
              }}>
                {phase.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "3px", color: phase.color, opacity: 0.7 }}>
                    {phase.label}
                  </span>
                  <span style={{
                    fontSize: "10px", padding: "2px 8px",
                    border: `1px solid ${phase.color}40`,
                    color: phase.color, opacity: 0.6,
                    borderRadius: "2px"
                  }}>
                    {phase.duration}
                  </span>
                </div>
                <h2 style={{ margin: "0 0 6px", fontSize: "22px", fontWeight: "800", color: "#f1f5f9", letterSpacing: "-0.5px" }}>
                  {phase.title}
                </h2>
                <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>
                  {phase.description}
                </p>
              </div>
            </div>

            {/* Sections */}
            {phase.sections.map((section, si) => {
              const key = `${phase.id}-${si}`;
              const isProject = section.type === "project";
              const isOpen = expandedSections[key] !== false;

              return (
                <div key={si} style={{ marginBottom: "16px" }}>
                  <button
                    onClick={() => toggleSection(key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: isProject ? `${phase.color}0a` : "#0d1117",
                      border: `1px solid ${isProject ? phase.color + "40" : "#1e293b"}`,
                      padding: "10px 16px",
                      cursor: "pointer",
                      color: "#94a3b8",
                      borderRadius: "2px",
                      fontFamily: "'Courier New', monospace",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{
                        fontSize: "9px",
                        padding: "2px 6px",
                        background: "#0a0f1a",
                        border: `1px solid ${phase.color}40`,
                        color: phase.color,
                        letterSpacing: "2px",
                        borderRadius: "2px"
                      }}>
                        {typeLabels[section.type] || section.type.toUpperCase()}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "#cbd5e1" }}>
                        {section.title}
                      </span>
                    </div>
                    <span style={{ color: phase.color, fontSize: "12px" }}>
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      border: "1px solid #0f172a",
                      borderTop: "none",
                      borderRadius: "0 0 2px 2px",
                      overflow: "hidden"
                    }}>
                      {section.items.map((item, ii) => {
                        const tagStyle = tagColors[item.tag] || { bg: "#0d1117", border: "#334155", text: "#94a3b8" };
                        return (
                          <div
                            key={ii}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "12px",
                              padding: "12px 16px",
                              background: ii % 2 === 0 ? "#080b12" : "#090c14",
                              borderBottom: "1px solid #0f172a",
                              flexWrap: "wrap",
                            }}
                          >
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: phase.color, flexShrink: 0, marginTop: "6px" }} />
                            <div style={{ flex: 1, minWidth: "200px" }}>
                              <div style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: "500", marginBottom: "2px", lineHeight: "1.4" }}>
                                {item.name}
                              </div>
                              {item.note && (
                                <div style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.3px" }}>
                                  → {item.note}
                                </div>
                              )}
                            </div>
                            <span style={{
                              fontSize: "10px",
                              padding: "3px 8px",
                              background: tagStyle.bg,
                              border: `1px solid ${tagStyle.border}`,
                              color: tagStyle.text,
                              borderRadius: "2px",
                              flexShrink: 0,
                              letterSpacing: "0.5px",
                              whiteSpace: "nowrap",
                            }}>
                              {item.tag}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Footer tip */}
        {activePhase === null && (
          <div style={{
            border: "1px dashed #1e293b",
            padding: "24px",
            borderRadius: "4px",
            textAlign: "center",
            background: "#080b12"
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#00E5FF", marginBottom: "8px" }}>◈ EXECUTION PRINCIPLE ◈</div>
            <div style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.8" }}>
              Don't binge courses. Build one project per phase before moving forward.<br />
              Your GitHub portfolio is more valuable than any certificate.<br />
              <span style={{ color: "#94a3b8" }}>DeepLearning.AI short courses are mostly free — start there today.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
