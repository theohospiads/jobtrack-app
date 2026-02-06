'use client';

import { TopNav } from "@/components/top-nav"

// Health status type - exactly one per profile
type HealthStatus = "strong" | "needs-improvement" | "blocking"

// Blocker type - max 3, ordered by impact
interface Blocker {
  id: string
  title: string
  explanation: string
  impact: "high" | "medium"
}

// Strength type - max 3, informational only
interface Strength {
  id: string
  title: string
  explanation: string
}

// Target role alignment
interface TargetRole {
  name: string
  alignment: "well" | "partial" | "poor"
  helperText?: string
  salary?: string
}

// Mock data - in production this comes from the decision engine
const profileData = {
  healthStatus: "needs-improvement" as HealthStatus,
  healthExplanation: "Your profile is solid overall, with a few areas that could strengthen your applications.",
  blockers: [
    {
      id: "1",
      title: "Resume keywords",
      explanation: "Some commonly expected terms for your target roles are missing from your resume.",
      impact: "high" as const,
    },
    {
      id: "2", 
      title: "Quantified results",
      explanation: "Adding measurable outcomes to your experience could make your applications more compelling.",
      impact: "medium" as const,
    },
  ],
  strengths: [
    {
      id: "1",
      title: "Technical skills",
      explanation: "Your technical background aligns well with your target roles.",
    },
    {
      id: "2",
      title: "Educational background",
      explanation: "Your academic credentials support entry-level positions in this field.",
    },
  ],
  targetRoles: [
    { name: "Product Analyst", alignment: "well" as const, salary: "50k - 65k" },
    { name: "Data Analyst", alignment: "partial" as const, helperText: "Some experience gaps", salary: "48k - 62k" },
    { name: "Business Intelligence Analyst", alignment: "well" as const, salary: "55k - 70k" },
  ],
  hasProfileData: true,
}

function HealthStatusPill({ status }: { status: HealthStatus }) {
  const config = {
    strong: {
      text: "Strong",
      bg: "#ECFDF5",
      color: "#065F46",
    },
    "needs-improvement": {
      text: "Needs improvement",
      bg: "#FFF7ED",
      color: "#9A3412",
    },
    blocking: {
      text: "Blocking results",
      bg: "#FEF2F2",
      color: "#991B1B",
    },
  }
  
  const { text, bg, color } = config[status]
  
  return (
    <span
      className="inline-block rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ background: bg, color }}
    >
      {text}
    </span>
  )
}

function BlockerCard({ blocker }: { blocker: Blocker }) {
  // Softer visual treatment - subtle borders, muted colors
  const pillBg = blocker.impact === "high" ? "#FEF2F2" : "#FFFBEB"
  const pillColor = blocker.impact === "high" ? "#B45309" : "#92400E"
  
  return (
    <div
      className="flex items-center justify-between rounded-xl p-4 transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)"
        e.currentTarget.style.borderColor = "#CBD5E1"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)"
        e.currentTarget.style.borderColor = "#E5E7EB"
      }}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4
            className="text-sm font-medium"
            style={{ color: "#0F172A" }}
          >
            {blocker.title}
          </h4>
          <span
            className="rounded-full px-2 py-0.5 text-[11px] font-medium"
            style={{
              background: pillBg,
              color: pillColor,
            }}
          >
            {blocker.impact === "high" ? "High" : "Medium"}
          </span>
        </div>
        <p
          className="mt-1 text-[13px]"
          style={{ color: "#64748B" }}
        >
          {blocker.explanation}
        </p>
      </div>
    </div>
  )
}

function StrengthCard({ strength }: { strength: Strength }) {
  return (
    <div
      className="rounded-[14px] p-4 transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: "1px solid #BBF7D0",
        boxShadow: "0 2px 4px rgba(6, 95, 70, 0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(6, 95, 70, 0.12)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(6, 95, 70, 0.06)"
      }}
    >
      <h4
        className="text-[15px] font-semibold"
        style={{ color: "#065F46" }}
      >
        {strength.title}
      </h4>
      <p
        className="mt-1 text-[13px] leading-relaxed"
        style={{ color: "#475569" }}
      >
        {strength.explanation}
      </p>
    </div>
  )
}

function AlignmentPill({ alignment }: { alignment: "well" | "partial" | "poor" }) {
  const config = {
    well: { text: "Well aligned", bg: "#ECFDF5", color: "#065F46" },
    partial: { text: "Partially aligned", bg: "#FFF7ED", color: "#9A3412" },
    poor: { text: "Poorly aligned", bg: "#FEF2F2", color: "#991B1B" },
  }
  
  const { text, bg, color } = config[alignment]
  
  return (
    <span
      className="rounded-full px-2 py-0.5 text-xs font-medium"
      style={{ background: bg, color }}
    >
      {text}
    </span>
  )
}

function EmptyState() {
  return (
    <div
      className="rounded-2xl p-8 text-center transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
      }}
    >
      <h3
        className="text-lg font-semibold"
        style={{ color: "#0F172A" }}
      >
        Your profile isn't set up yet
      </h3>
      <p
        className="mx-auto mt-2 max-w-md text-sm"
        style={{ color: "#64748B" }}
      >
        We need a bit more information to personalize your opportunities and actions.
      </p>
      <button
        className="mt-6 h-11 cursor-pointer rounded-[10px] px-5 text-sm font-medium transition-all"
        style={{
          background: "#1A73E8",
          color: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(26, 115, 232, 0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1557B0"
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(26, 115, 232, 0.3)"
          e.currentTarget.style.transform = "translateY(-2px)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#1A73E8"
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(26, 115, 232, 0.2)"
          e.currentTarget.style.transform = "translateY(0)"
        }}
      >
        Set up my profile
      </button>
    </div>
  )
}

export default function ProfilePage() {
  const { hasProfileData, healthStatus, healthExplanation, blockers, strengths, targetRoles } = profileData

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-8 pb-16">
        {/* Page Header */}
        <header className="mb-8 flex items-start justify-between">
          <div>
            <h1
              className="text-2xl font-semibold"
              style={{ color: "#0F172A" }}
            >
              Profile
            </h1>
          </div>
          <button
            className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all"
            style={{ 
              color: "#FFFFFF", 
              background: "#1D4ED8",
              boxShadow: "0 2px 8px rgba(29, 78, 216, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1E40AF"
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(29, 78, 216, 0.3)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1D4ED8"
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(29, 78, 216, 0.2)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.333 2.00004C11.5081 1.82494 11.7169 1.68605 11.9473 1.59129C12.1777 1.49653 12.4251 1.44775 12.675 1.44775C12.9249 1.44775 13.1723 1.49653 13.4027 1.59129C13.6331 1.68605 13.8419 1.82494 14.017 2.00004C14.1921 2.17513 14.331 2.38394 14.4257 2.61436C14.5205 2.84478 14.5693 3.09219 14.5693 3.34204C14.5693 3.59188 14.5205 3.83929 14.4257 4.06971C14.331 4.30013 14.1921 4.50894 14.017 4.68404L5.00001 13.701L1.33334 14.6667L2.29901 11.0007L11.333 2.00004Z" stroke="#FFFFFF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Edit profile
          </button>
        </header>

        {!hasProfileData ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-8">
            {/* Diploma */}
            <section>
              <h2
                className="mb-3 text-base font-semibold"
                style={{ color: "#475569" }}
              >
                Diploma
              </h2>
              <div
                className="rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
                  e.currentTarget.style.borderColor = "#CBD5E1"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.borderColor = "#E5E7EB"
                }}
              >
                <p className="text-sm" style={{ color: "#0F172A" }}>
                  Master's in Business Analytics
                </p>
                <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                  University of Paris, 2023
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2
                className="mb-3 text-base font-semibold"
                style={{ color: "#475569" }}
              >
                Experience
              </h2>
              <div
                className="rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
                  e.currentTarget.style.borderColor = "#CBD5E1"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.borderColor = "#E5E7EB"
                }}
              >
                <p className="text-sm" style={{ color: "#0F172A" }}>
                  Data Analyst Intern
                </p>
                <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                  TechCorp, 6 months
                </p>
              </div>
            </section>

            {/* Dream Jobs */}
            <section>
              <h2
                className="mb-3 text-base font-semibold"
                style={{ color: "#475569" }}
              >
                Dream jobs
              </h2>
              <div
                className="rounded-2xl p-4 transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
                  e.currentTarget.style.borderColor = "#CBD5E1"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.borderColor = "#E5E7EB"
                }}
              >
                <div className="flex flex-col gap-3">
                  {targetRoles.slice(0, 3).map((role, index) => (
                    <div
                      key={role.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                          style={{ background: "#E5E7EB", color: "#475569" }}
                        >
                          #{index + 1}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#0F172A" }}
                        >
                          {role.name}
                        </span>
                      </div>
                      {role.salary && (
                        <span
                          className="text-sm"
                          style={{ color: "#64748B" }}
                        >
                          {role.salary} EUR
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Career Preferences */}
            <section>
              <h2
                className="mb-3 text-base font-semibold"
                style={{ color: "#475569" }}
              >
                Career preferences
              </h2>
              <div
                className="rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
                  e.currentTarget.style.borderColor = "#CBD5E1"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.borderColor = "#E5E7EB"
                }}
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {/* Contract Type */}
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>
                      Contract type
                    </p>
                    <p className="mt-1 text-sm" style={{ color: "#0F172A" }}>
                      Full-time
                    </p>
                  </div>

                  {/* Work Style */}
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>
                      Work style
                    </p>
                    <p className="mt-1 text-sm" style={{ color: "#0F172A" }}>
                      Remote / Hybrid
                    </p>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>
                      Location(s)
                    </p>
                    <p className="mt-1 text-sm" style={{ color: "#0F172A" }}>
                      Paris, London, Remote EU
                    </p>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>
                      Salary range
                    </p>
                    <p className="mt-1 text-sm" style={{ color: "#0F172A" }}>
                      45k - 55k EUR
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Company Preferences */}
            <section>
              <h2
                className="mb-3 text-base font-semibold"
                style={{ color: "#475569" }}
              >
                Company preferences
              </h2>
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div className="flex flex-col gap-3">
                  {/* JP Morgan */}
                  <a
                    href="https://www.jpmorganchase.com/careers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg p-3 transition-colors"
                    style={{ background: "#F8FAFC" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#F1F5F9"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#F8FAFC"}
                  >
                    <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                      JP Morgan Chase
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>

                  {/* PWC */}
                  <a
                    href="https://carrieres.pwc.fr/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg p-3 transition-colors"
                    style={{ background: "#F8FAFC" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#F1F5F9"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#F8FAFC"}
                  >
                    <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                      PwC
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}
