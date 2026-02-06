"use client"

import { TopNav } from "@/components/top-nav"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

interface ActionJob {
  id: string
  title: string
  company: string
  location: string
  workType: string
  appliedDate: string
  currentStage: number
  totalStages: number
  stages: {
    name: string
    status: "completed" | "current" | "upcoming"
    date?: string
  }[]
  tasks: {
    text: string
    completed: boolean
    duration: "15" | "30-45"
    impact: string
  }[]
  nextAction?: {
    title: string
    icon: string
    recommendation: boolean
  }
  recruiterSignals?: {
    reviewTime: string
    profileView: string
    ghostingProbability: string
  }
}

const actionJobs: Record<string, ActionJob> = {
  "1": {
    id: "1",
    title: "Product Analyst Intern",
    company: "Acme Corp",
    location: "Paris",
    workType: "Hybrid",
    appliedDate: "3 days ago",
    currentStage: 1,
    totalStages: 4,
    stages: [
      { name: "Application Submitted", status: "completed", date: "Jan 28, 2026" },
      { name: "Application Review", status: "current" },
      { name: "Interview", status: "upcoming" },
      { name: "Decision", status: "upcoming" }
    ],
    tasks: [
      { text: "Send follow-up email", completed: false, duration: "15", impact: "Increases response rate by 25%" },
      { text: "Prepare 2-3 interview questions", completed: false, duration: "30-45", impact: "Candidates who prepare increase success rate by ~30%" },
      { text: "Research company background", completed: true, duration: "30-45", impact: "Shows genuine interest to recruiters" },
      { text: "Tailor CV for this role", completed: false, duration: "30-45", impact: "+6% impact on Application Health" },
      { text: "Prepare 'Tell me about yourself' answer", completed: false, duration: "15", impact: "First impression matters most" }
    ],
    nextAction: {
      title: "Send follow-up email in 2 days",
      icon: "✉️",
      recommendation: true
    },
    recruiterSignals: {
      reviewTime: "5–7 days average",
      profileView: "Likely within 48 hours",
      ghostingProbability: "Low"
    }
  },
  "2": {
    id: "2",
    title: "Data Analyst",
    company: "TechStart Inc",
    location: "London",
    workType: "Remote",
    appliedDate: "5 days ago",
    currentStage: 2,
    totalStages: 4,
    stages: [
      { name: "Application Submitted", status: "completed", date: "Jan 26, 2026" },
      { name: "Application Review", status: "completed", date: "Jan 28, 2026" },
      { name: "Technical Assessment", status: "current" },
      { name: "Final Interview", status: "upcoming" }
    ],
    tasks: [
      { text: "Complete coding challenge", completed: false, duration: "30-45", impact: "Critical for advancement" },
      { text: "Schedule technical call", completed: false, duration: "15", impact: "Shows promptness and interest" }
    ],
    nextAction: {
      title: "Complete coding challenge",
      icon: "💻",
      recommendation: true
    },
    recruiterSignals: {
      reviewTime: "2–3 days for assessments",
      profileView: "Already confirmed",
      ghostingProbability: "Very Low"
    }
  },
  "3": {
    id: "3",
    title: "Business Analyst",
    company: "DataFlow",
    location: "New York",
    workType: "On-site",
    appliedDate: "2 days ago",
    currentStage: 1,
    totalStages: 3,
    stages: [
      { name: "Application Submitted", status: "completed", date: "Jan 29, 2026" },
      { name: "Screening Call", status: "current" },
      { name: "Final Round", status: "upcoming" }
    ],
    tasks: [
      { text: "Review job requirements", completed: false, duration: "15", impact: "Foundation for all prep" },
      { text: "Submit portfolio", completed: false, duration: "30-45", impact: "Differentiates you from 80% of candidates" }
    ],
    nextAction: {
      title: "Submit portfolio link",
      icon: "📂",
      recommendation: true
    },
    recruiterSignals: {
      reviewTime: "4–5 days for screening",
      profileView: "Likely today",
      ghostingProbability: "Low"
    }
  }
}

// Alternative jobs for the Plan B cards
const alternativeJobs = [
  {
    title: "Junior Data Analyst",
    company: "DataFlow",
    salary: "$65-75k",
  },
  {
    title: "Analytics Associate",
    company: "TechStart",
    salary: "$70-80k",
  },
  {
    title: "Business Intelligence Intern",
    company: "InsightCorp",
    salary: "$55-65k",
  },
]

export default function ActionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const job = actionJobs[id] || actionJobs["1"]
  const [completedTasks, setCompletedTasks] = useState<Record<number, boolean>>(
    job.tasks.reduce((acc, _, i) => ({ ...acc, [i]: false }), {})
  )

  const progressPercentage = (job.currentStage / job.totalStages) * 100
  const completedTaskCount = Object.values(completedTasks).filter(Boolean).length
  const taskCompletionPercent = (completedTaskCount / job.tasks.length) * 100

  // Application Health Score logic
  const getHealthScore = () => {
    const stageBonus = (job.currentStage / job.totalStages) * 50
    const taskBonus = taskCompletionPercent * 0.3
    const score = stageBonus + taskBonus
    if (score > 75) return { score: "Strong", color: "#2563EB" }
    if (score > 50) return { score: "Good", color: "#2563EB" }
    if (score > 25) return { score: "Fair", color: "#2563EB" }
    return { score: "Needs Work", color: "#2563EB" }
  }

  const health = getHealthScore()

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 100 }}>
      <TopNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
            padding: "8px 12px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2563EB",
            fontSize: 14,
            fontWeight: 400,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.7"
            e.currentTarget.style.transform = "translateX(-4px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1"
            e.currentTarget.style.transform = "translateX(0)"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Applications
        </button>

        {/* Job Summary Section */}
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Title */}
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
              {job.title}
            </h1>

            {/* Company info + Applied on same row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                {job.company} · {job.location} · {job.workType}
              </p>
              <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
                Applied {job.appliedDate}
              </p>
            </div>

            {/* Status messages - both in black */}
            <p style={{ fontSize: 14, color: "#0F172A", margin: "0 0 4px 0" }}>
              You're early — this is when smart candidates take the lead
            </p>
            <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
              Most successful candidates stay active at this stage — you're right on time.
            </p>
          </div>
        </div>

        {/* APPLICATION PROGRESS */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>
          Application Progress
        </p>
        <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
          Where you are in the process
        </p>
        <div
          style={{
            background: "#EFF6FF",
            border: "1px solid #2563EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(37, 99, 235, 0.08)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.2), 0 2px 6px rgba(37, 99, 235, 0.12)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(37, 99, 235, 0.08)"
          }}
        >
          {/* Delivery-tracker style timeline */}
          {(() => {
            const lastCompletedIdx = job.stages.reduce(
              (acc: number, s: { status: string }, i: number) => (s.status === "completed" ? i : acc),
              -1
            )
            const segments = job.stages.length - 1
            // Blue line stops ~70% of the way between the last completed and next circle
            const bluePct =
              lastCompletedIdx >= 0
                ? ((lastCompletedIdx + 0.7) / segments) * 100
                : 0

            return (
              <div>
                {/* Timeline Container */}
                <div style={{ position: "relative", width: "100%" }}>
                  {/* Connecting line background */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "#E5E7EB",
                      borderRadius: 2,
                      zIndex: 0,
                    }}
                  />
                  {/* Blue progress line */}
                  {lastCompletedIdx >= 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 0,
                        height: 3,
                        background: "#2563EB",
                        borderRadius: 2,
                        zIndex: 1,
                        width: `${((lastCompletedIdx + 0.7) / (job.stages.length - 1)) * 100}%`,
                        transition: "width 0.5s ease",
                      }}
                    />
                  )}

                  {/* Stages Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${job.stages.length}, 1fr)`,
                      gap: 0,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {job.stages.map(
                      (stage: { status: string; name: string; date?: string }, index: number) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          {/* Circle */}
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              background:
                                stage.status === "completed" ? "#2563EB" : "#FFFFFF",
                              border:
                                stage.status === "completed"
                                  ? "2px solid #2563EB"
                                  : stage.status === "current"
                                    ? "2px solid #2563EB"
                                    : "2px solid #E5E7EB",
                              color:
                                stage.status === "completed"
                                  ? "#FFFFFF"
                                  : stage.status === "current"
                                    ? "#2563EB"
                                    : "#94A3B8",
                              fontSize: 13,
                              fontWeight: 600,
                            }}
                          >
                            {index + 1}
                          </div>

                          {/* Label */}
                          <div style={{ textAlign: "center" }}>
                            <p
                              style={{
                                fontSize: 12,
                                color:
                                  stage.status === "upcoming" ? "#94A3B8" : "#0F172A",
                                margin: 0,
                                fontWeight: stage.status === "current" ? 600 : 400,
                                lineHeight: 1.4,
                              }}
                            >
                              {stage.status === "completed" ? "Your " : ""}
                              {stage.name}
                            </p>
                            {stage.date && (
                              <p
                                style={{
                                  fontSize: 11,
                                  color: "#64748B",
                                  margin: "4px 0 0 0",
                                }}
                              >
                                {stage.date}
                              </p>
                            )}
                            {stage.status === "current" && (
                              <p
                                style={{
                                  fontSize: 11,
                                  color: "#2563EB",
                                  margin: "4px 0 0 0",
                                  fontWeight: 500,
                                }}
                              >
                                In progress
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>

        {/* Application Signals */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          <div>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
              Competition Level
            </p>
            <p style={{ fontSize: 14, color: "#0F172A", margin: "0 0 4px 0" }}>
              Low (24 applicants)
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
              You're competing in a smaller-than-average pool for this role.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
              Estimated Salary
            </p>
            <p style={{ fontSize: 14, color: "#0F172A", margin: "0 0 4px 0" }}>
              {job.salary}
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
              $75,000 per year
            </p>
          </div>
        </div>

        {/* Recruiter Reality Signals */}
        {job.recruiterSignals && (
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
              What Usually Happens at This Stage
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
              {/* Average Review Time Card */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
                  e.currentTarget.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: 12, color: "#64748B", margin: 0, textTransform: "uppercase", fontWeight: 600 }}>
                  Average Review Time
                </p>
                <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                  {job.recruiterSignals.reviewTime}
                </p>
              </div>

              {/* Recruiter Profile View Card */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
                  e.currentTarget.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: 12, color: "#64748B", margin: 0, textTransform: "uppercase", fontWeight: 600 }}>
                  Recruiter Profile View
                </p>
                <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                  {job.recruiterSignals.profileView}
                </p>
              </div>

              {/* Ghosting Probability Card */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
                  e.currentTarget.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: 12, color: "#64748B", margin: 0, textTransform: "uppercase", fontWeight: 600 }}>
                  Ghosting Probability
                </p>
                <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                  {job.recruiterSignals.ghostingProbability}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tasks Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          Tasks to Do
        </p>

        {/* Progress Bar */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 500 }}>You're past the hardest part: applying.</span>
            <span style={{ fontSize: 12, color: "#0F172A" }}>{Math.round(progressPercentage)}%</span>
          </div>
          <div style={{ height: 8, background: "#E5E7EB", borderRadius: 4 }}>
            <div
              style={{
                width: `${progressPercentage}%`,
                height: "100%",
                background: "#2563EB",
                borderRadius: 4,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Application Health */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #E5E7EB" }}>
            <p style={{ fontSize: 12, color: "#64748B", fontWeight: 600, margin: "0 0 12px 0", textTransform: "uppercase" }}>
              Application Health
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
              Good — can be stronger (+10%)
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
              Two quick improvements can meaningfully increase your chances.
            </p>
          </div>

          {/* 15-minute actions */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: "#64748B", fontWeight: 600, margin: "0 0 12px 0", textTransform: "uppercase" }}>
              15-minute actions
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
              Quick wins that improve visibility and confidence
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {job.tasks.filter(t => t.duration === "15").map((task, index) => {
                const actualIndex = job.tasks.indexOf(task)
                return (
                  <div
                    key={actualIndex}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: completedTasks[actualIndex] ? "#94A3B8" : "#0F172A",
                      padding: "10px 12px",
                      background: completedTasks[actualIndex] ? "#F1F5F9" : "transparent",
                      borderRadius: 8,
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={completedTasks[actualIndex] || false}
                      onChange={(e) => setCompletedTasks({ ...completedTasks, [actualIndex]: e.target.checked })}
                      style={{ width: 20, height: 20, cursor: "pointer", marginTop: 2 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <p style={{ margin: 0, textDecoration: completedTasks[actualIndex] ? "line-through" : "none" }}>
                          {task.text}
                        </p>
                        {index === 0 && !completedTasks[actualIndex] && (
                          <span style={{ fontSize: 10, fontWeight: 600, color: "#2563EB", background: "#EFF6FF", padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                            Next best move
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                        {task.impact}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 30-45 minute actions */}
          <div>
            <p style={{ fontSize: 12, color: "#64748B", fontWeight: 600, margin: "0 0 12px 0", textTransform: "uppercase" }}>
              30–45 minute actions
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
              Higher-impact preparation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {job.tasks.filter(t => t.duration === "30-45").map((task, index) => {
                const actualIndex = job.tasks.indexOf(task)
                return (
                  <div
                    key={actualIndex}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: completedTasks[actualIndex] ? "#94A3B8" : "#0F172A",
                      padding: "10px 12px",
                      background: completedTasks[actualIndex] ? "#F1F5F9" : "transparent",
                      borderRadius: 8,
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={completedTasks[actualIndex] || false}
                      onChange={(e) => setCompletedTasks({ ...completedTasks, [actualIndex]: e.target.checked })}
                      style={{ width: 20, height: 20, cursor: "pointer", marginTop: 2 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <p style={{ margin: 0, textDecoration: completedTasks[actualIndex] ? "line-through" : "none" }}>
                          {task.text}
                        </p>
                        {index === 0 && !completedTasks[actualIndex] && (
                          <span style={{ fontSize: 10, fontWeight: 600, color: "#2563EB", background: "#EFF6FF", padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                            Next best move
                          </span>
                        )}
                        {task.text.includes("interview questions") && (
                          <button
                            onClick={() => console.log("Tips clicked for:", task.text)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: "transparent",
                              border: "1px solid #2563EB",
                              cursor: "pointer",
                              padding: 0,
                              color: "#2563EB",
                              fontSize: 14,
                              transition: "all 0.2s",
                              flexShrink: 0,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#EFF6FF"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent"
                            }}
                            title="Tips for interview questions"
                          >
                            💡
                          </button>
                        )}
                      </div>
                      <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                        {task.impact}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Plan B Section - Collapsible */}
        <div
          style={{
            background: "#EFF6FF",
            border: "1px solid #2563EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(37, 99, 235, 0.08)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.2), 0 2px 6px rgba(37, 99, 235, 0.12)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(37, 99, 235, 0.08)"
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 4 }}>
              If This Application Doesn't Work Out
            </div>
            <p style={{ fontSize: 12, color: "#2563EB", margin: 0, fontWeight: 400 }}>
              You'll still be ahead — here's what to do next.
            </p>
          </div>

          <div style={{ marginTop: 16 }}>
            {/* Job Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {alternativeJobs.map((job, index) => (
                  <div
                    key={index}
                    style={{
                      height: 180,
                      background: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      borderRadius: 12,
                      padding: "24px 20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
                      e.currentTarget.style.transform = "translateY(-6px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                      e.currentTarget.style.transform = "translateY(0)"
                    }}
                  >
                    {/* Arrow Icon */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 16,
                        right: 16,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#2563EB",
                        fontSize: 28,
                        fontWeight: 600,
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform: "translateX(0)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#1D4ED8";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#2563EB";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      →
                    </div>

                    <p style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
                      {job.title}
                    </p>
                    <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 16px 0" }}>
                      {job.company}
                    </p>
                    <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: 12, width: "100%" }}>
                      <p style={{ fontSize: 16, fontWeight: 700, color: "#2563EB", margin: 0 }}>
                        {job.salary}
                      </p>
                      <p style={{ fontSize: 11, color: "#94A3B8", margin: "4px 0 0 0" }}>
                        per year
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}
