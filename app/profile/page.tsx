'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProfilePage() {
  const router = useRouter()
  const [showProfileDetails, setShowProfileDetails] = useState(false)
  const [careerTargets, setCareerTargets] = useState({
    productAnalyst: true,
    biAnalyst: false,
    dataAnalyst: false,
  })

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        {/* Page Header */}
        <header className="mb-8">
          <h1
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Profile
          </h1>
        </header>

        <div className="flex flex-col gap-8">
          {/* 1. Search Readiness & Impact */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
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
            <h2 className="text-base font-semibold" style={{ color: "#0F172A", marginBottom: "4px" }}>
              Search Readiness
            </h2>
            <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 16px 0" }}>
              How your profile currently performs in the job market
            </p>

            {/* Readiness Score */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontSize: "24px", fontWeight: "700", color: "#2563EB" }}>78%</span>
                <span style={{ fontSize: "13px", color: "#F59E0B", fontWeight: "600" }}>🟡</span>
              </div>
              <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                Good — but missing signals for senior roles
              </p>
            </div>

            {/* What this affects */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 10px 0", textTransform: "uppercase" }}>
                What this affects
              </p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li style={{ fontSize: "13px", color: "#0F172A", margin: 0 }}>Ranking in Opportunities</li>
                <li style={{ fontSize: "13px", color: "#0F172A", margin: 0 }}>Match confidence scores (72–92%)</li>
                <li style={{ fontSize: "13px", color: "#0F172A", margin: 0 }}>CV strength during Apply</li>
                <li style={{ fontSize: "13px", color: "#0F172A", margin: 0 }}>Interview likelihood</li>
              </ul>
            </div>

            {/* Strengths */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 10px 0", textTransform: "uppercase" }}>
                Strengths
              </p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li style={{ fontSize: "13px", color: "#0F172A", margin: 0 }}>✓ Strong alignment with Product Analyst</li>
                <li style={{ fontSize: "13px", color: "#0F172A", margin: 0 }}>✓ Remote EU market well-covered</li>
                <li style={{ fontSize: "13px", color: "#0F172A", margin: 0 }}>✓ Good match consistency across roles</li>
              </ul>
            </div>

            {/* Current Blockers */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 10px 0", textTransform: "uppercase" }}>
                Current Blockers
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "12px", background: "#FEF3C7", borderRadius: "8px", border: "1px solid #FCD34D" }}>
                  <p style={{ fontSize: "13px", color: "#0F172A", margin: "0 0 4px 0", fontWeight: "500" }}>
                    ⚠ Missing signal: Advanced experimentation
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#2563EB",
                      border: "none",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Learn skill →
                  </button>
                </div>
                <div style={{ padding: "12px", background: "#FEF3C7", borderRadius: "8px", border: "1px solid #FCD34D" }}>
                  <p style={{ fontSize: "13px", color: "#0F172A", margin: "0 0 4px 0", fontWeight: "500" }}>
                    ⚠ Data Analyst roles capped at ~88% fit
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#2563EB",
                      border: "none",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Add experience →
                  </button>
                </div>
                <div style={{ padding: "12px", background: "#FEF3C7", borderRadius: "8px", border: "1px solid #FCD34D" }}>
                  <p style={{ fontSize: "13px", color: "#0F172A", margin: "0 0 4px 0", fontWeight: "500" }}>
                    ⚠ Senior roles downranked
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#2563EB",
                      border: "none",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Adjust target →
                  </button>
                </div>
              </div>
            </div>

            {/* Primary Optimization Focus */}
            <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 10px 0", textTransform: "uppercase" }}>
                Primary Optimization Focus
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "16px" }}>🎯</span>
                  <p style={{ fontSize: "13px", color: "#0F172A", margin: 0, fontWeight: "500" }}>Product Analyst (Primary)</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "16px" }}>🧭</span>
                  <p style={{ fontSize: "13px", color: "#0F172A", margin: 0, fontWeight: "500" }}>BI Analyst (Secondary)</p>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#64748B", margin: "10px 0 0 0", fontStyle: "italic" }}>
                This improves relevance but reduces role diversity
              </p>
            </div>
          </section>

          {/* 2. View profile information */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: "1.5", flex: 1 }}>
              This information is used to build your profile and generate your CV.
            </p>
            <button
              onClick={() => setShowProfileDetails(!showProfileDetails)}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "11px 18px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "-0.2px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              View profile details
            </button>
          </section>

          {/* Profile Details Modal/Expandable Section */}
          {showProfileDetails && (
            <section
              className="rounded-2xl p-6 transition-all duration-300"
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div>
                  <h2 className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
                    Profile Strength
                  </h2>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: "4px 0 0 0" }}>
                    Strong profile for Product & Data roles in EU startups
                  </p>
                </div>
                <button
                  onClick={() => setShowProfileDetails(false)}
                  style={{
                    background: "transparent",
                    color: "#64748B",
                    border: "none",
                    padding: "0",
                    fontSize: "18px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0F172A"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#64748B"
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "20px" }}>
                {/* Score Card */}
                <div
                  style={{
                    padding: "16px",
                    background: "#F8FAFC",
                    borderRadius: "12px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <p style={{ fontSize: "32px", fontWeight: "700", color: "#2563EB", margin: 0 }}>72%</p>
                  <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "8px 0 0 0", textTransform: "uppercase" }}>
                    Overall Score
                  </p>
                </div>

                {/* Career Stage */}
                <div
                  style={{
                    padding: "16px",
                    background: "#F8FAFC",
                    borderRadius: "12px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Early Career
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                    0–3 years in field
                  </p>
                </div>

                {/* Location */}
                <div
                  style={{
                    padding: "16px",
                    background: "#F8FAFC",
                    borderRadius: "12px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Remote EU
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                    Work location preference
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() => router.push('/profile/preferences')}
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "11px 18px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    letterSpacing: "-0.2px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1E40AF"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#2563EB"
                  }}
                >
                  Edit profile details
                </button>
                <button
                  style={{
                    background: "transparent",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "11px 18px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F1F5F9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent"
                  }}
                  onClick={() => setShowProfileDetails(false)}
                >
                  Close
                </button>
              </div>
            </section>
          )}

          <section
            className="rounded-2xl p-6 transition-all duration-300"
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
            <h2 className="text-base font-semibold" style={{ color: "#0F172A", marginBottom: "20px" }}>
              Career Targets
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Primary Focus */}
              <div
                style={{
                  padding: "20px",
                  background: "#F0F9FF",
                  borderRadius: "12px",
                  border: "2px solid #2563EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span
                      style={{
                        background: "#2563EB",
                        color: "#FFFFFF",
                        padding: "3px 10px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: "700",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      PRIMARY
                    </span>
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Product Analyst
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    Best match for your profile
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={careerTargets.productAnalyst}
                    onChange={(e) => setCareerTargets({ ...careerTargets, productAnalyst: e.target.checked })}
                    style={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                      accentColor: "#2563EB",
                    }}
                  />
                  <label style={{ fontSize: "13px", color: "#0F172A", fontWeight: "500", cursor: "pointer", margin: 0 }}>
                    Include in job search
                  </label>
                </div>
              </div>

              {/* Secondary Option */}
              <div
                style={{
                  padding: "20px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    BI Analyst
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    Growing demand, strong fit
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={careerTargets.biAnalyst}
                    onChange={(e) => setCareerTargets({ ...careerTargets, biAnalyst: e.target.checked })}
                    style={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                      accentColor: "#2563EB",
                    }}
                  />
                  <label style={{ fontSize: "13px", color: "#0F172A", fontWeight: "500", cursor: "pointer", margin: 0 }}>
                    Include in job search
                  </label>
                </div>
              </div>

              {/* Stretch Option */}
              <div
                style={{
                  padding: "20px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Data Analyst
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 8px 0" }}>
                    Skill gap: Advanced experimentation
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#2563EB",
                      border: "none",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "none"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "underline"
                    }}
                  >
                    Learn skill →
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={careerTargets.dataAnalyst}
                    onChange={(e) => setCareerTargets({ ...careerTargets, dataAnalyst: e.target.checked })}
                    style={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                      accentColor: "#2563EB",
                    }}
                  />
                  <label style={{ fontSize: "13px", color: "#0F172A", fontWeight: "500", cursor: "pointer", margin: 0 }}>
                    Include in job search
                  </label>
                </div>
              </div>
            </div>
          </section>



          {/* 6. CV Generator */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
              <div>
                <h2 className="text-base font-semibold" style={{ color: "#0F172A", margin: "0 0 4px 0" }}>
                  CV Generator
                </h2>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                  Your baseline, system-generated CV
                </p>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 16px 0" }}>
              This is a professional CV generated from your profile. It's not tailored to specific jobs — per-job optimization happens during the application process.
            </p>
            <button
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              Download CV
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11L4 7M8 11L12 7M8 11V2M2 13H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
