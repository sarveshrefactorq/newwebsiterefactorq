import { useState } from "react"

const CASE_STUDY_PHOTO_MAP: Record<string, string> = {
  // Performance Engineering & API Remediation
  "performance-engineering": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  
  // Performance Testing & Workload Modelling
  "performance-testing": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
  
  // Setting up QA Practices
  "setting-up-qa-practices": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
  
  // Product Development MVP Data Platform
  "product-development": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  
  // Healthcare SaaS Cloud Native Development
  "cloud-native-development": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  
  // Migration to AWS Cloud
  "migration-to-aws-cloud": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  
  // Migration from On-Prem to AWS
  "migration-from-onprem-to-aws": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80",
  
  // AWS Cloud Security Assessment
  "cloud-security-aws-security-assessment": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1000&q=80",
  
  // Cloud Guardian Posture Monitoring
  "cloud-guardian-aws-security-assessment": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
  
  // AI Calling Solution & Voice Automation
  "ai-calling-solution": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1000&q=80",
  
  // Health-Tech Platform
  "health-tech-platform": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80",
  
  // FMCG Operational Streamlining & FinOps
  "streamlining-operations-for-enhanced-performance": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  
  // Gulf Catering IT Systems & Process Assessment (2.25L meals/day)
  "it-systems-operational-process-assessment": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  
  // Engineering Assessment & DevOps Transformation
  "engineering-assessment-devops-transformation": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  
  // Distribution Management Platform
  "distribution-management-platform": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
  
  // E-Commerce Retail Platform
  "e-commerce-platform-retail": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",

  // Service Practices
  "cloud-devops-sre-engineering": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  "ai-ml-engineering": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
  "agentic-ai-automation": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  "cybersecurity-cloud-resilience": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  "security-engineering": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  "cloud-finops": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "quality-engineering-test-automation": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
}

function getMediaImage(slug?: string, label?: string): string {
  if (slug && CASE_STUDY_PHOTO_MAP[slug]) {
    return CASE_STUDY_PHOTO_MAP[slug]
  }
  if (label) {
    const matchedKey = Object.keys(CASE_STUDY_PHOTO_MAP).find(key =>
      label.toLowerCase().includes(key) || key.includes(label.toLowerCase().replace(/[^a-z0-9]/g, "-"))
    )
    if (matchedKey) return CASE_STUDY_PHOTO_MAP[matchedKey]
  }
  return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
}

export function MediaPlaceholder({
  label,
  slug,
  ratio = "16/10",
  className = "",
}: {
  label: string
  slug?: string
  ratio?: string
  className?: string
}) {
  const [error, setError] = useState(false)
  const imageUrl = getMediaImage(slug, label)

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-slate-900 group ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!error ? (
        <img
          src={imageUrl}
          alt=""
          onError={() => setError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
          <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">{label}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-50 pointer-events-none" />
      <span className="absolute bottom-3 left-3 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 text-slate-900 shadow-2xs backdrop-blur-xs">
        {label}
      </span>
    </div>
  )
}
