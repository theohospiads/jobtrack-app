"use client"

import { TopNav } from "@/components/top-nav"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

const actionJobs: Record<string, any> = {
  "1": {
    id: "1",
    title: "Product Analyst Intern",
    company: "Acme Corp",
    stage: "Phone Screen",
    appliedDate: "3 days ago",
  },
  "2": {
    id: "2",
    title: "Data Analyst",
    company: "TechStart Inc",
    stage: "Technical Assessment",
    appliedDate: "5 days ago",
  },
  "3": {
    id: "3",
    title: "Business Analyst",
    company: "DataFlow",
    stage: "Initial Review",
    appliedDate: "2 days ago",
  },
}

export default function SendFollowUpPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const job = actionJobs[id] || actionJobs["1"]

  const [message, setMessage] = useState(
    "Hi, I wanted to follow up on my application for the " + job.title + " position at " + job.company + ". I remain very interested in this opportunity and would love to discuss how my skills can contribute to your team. Thank you for considering my application."
  )
  const [state, setState] = useState<"ready" | "sent" | "cancelled">("ready")

  const handleSendFollowUp = () => {
    setState("sent")
  }

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <TopNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 16px" }}>
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
          Back to Application
        </button>

        {state === "ready" && (
          <>
            {/* Page Title */}
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 24px 0" }}>
              Send a follow-up
            </h1>

            {/* Job Context Card */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: 20,
                marginBottom: 24,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                    Role
                  </p>
                  <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                    {job.title}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                    Company
                  </p>
                  <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                    {job.company}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                    Stage
                  </p>
                  <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                    {job.stage}
                  </p>
                </div>
              </div>
              <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: 12 }}>
                <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
                  Applied on: <span style={{ fontWeight: 600, color: "#0F172A" }}>{job.appliedDate}</span>
                </p>
              </div>
            </div>

            {/* Follow-up Message Section */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: 24,
                marginBottom: 24,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                Suggested follow-up message
              </p>
              <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 16px 0" }}>
                Polite, concise, and optimized for your current application stage
              </p>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: 120,
                  padding: 12,
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  fontSize: 14,
                  fontFamily: "inherit",
                  color: "#0F172A",
                  lineHeight: "1.6",
                  marginBottom: 16,
                }}
              />

              {/* Timing Indicator */}
              <div
                style={{
                  background: "#F0F9FF",
                  border: "1px solid #BFDBFE",
                  borderRadius: 8,
                  padding: 12,
                }}
              >
                <p style={{ fontSize: 12, fontWeight: 600, color: "#2563EB", margin: "0 0 4px 0" }}>
                  Recommended timing
                </p>
                <p style={{ fontSize: 12, color: "#0F172A", margin: 0 }}>
                  5–7 days after application
                </p>
              </div>
            </div>

            {/* System Notes */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0" }}>
                • Sending a follow-up increases response likelihood
              </p>
              <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
                • One follow-up per application stage
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => setState("cancelled")}
                style={{
                  flex: 1,
                  background: "#FFFFFF",
                  color: "#64748B",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F8FAFC"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFFFFF"
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  flex: 1,
                  background: "#FFFFFF",
                  color: "#2563EB",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F8FAFC"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFFFFF"
                }}
              >
                Edit message
              </button>
              <button
                onClick={handleSendFollowUp}
                style={{
                  flex: 1,
                  background: "#2563EB",
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1E40AF"
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 99, 235, 0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB"
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.3)"
                }}
              >
                Send follow-up
              </button>
            </div>
          </>
        )}

        {state === "sent" && (
          <div
            style={{
              background: "#F0FDF4",
              border: "1px solid #BBEAD5",
              borderRadius: 12,
              padding: 32,
              textAlign: "center",
              marginTop: 32,
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto 16px" }}>
              <circle cx="24" cy="24" r="22" fill="#D1FAE5" stroke="#10B981" strokeWidth="2"/>
              <path d="M18 24L22 28L30 20" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
              Follow-up sent successfully
            </h2>
            <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 24px 0" }}>
              Your follow-up message has been sent. You'll be notified if there's a response.
            </p>
            <button
              onClick={() => router.push(`/actions/${id}`)}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 400,
                padding: "12px 24px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              Back to Application Details
            </button>
          </div>
        )}

        {state === "cancelled" && (
          <div
            style={{
              background: "#F8FAFC",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 32,
              textAlign: "center",
              marginTop: 32,
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
              Follow-up cancelled
            </h2>
            <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 24px 0" }}>
              You can send a follow-up later when you're ready.
            </p>
            <button
              onClick={() => router.push(`/actions/${id}`)}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 400,
                padding: "12px 24px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              Back to Application Details
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
