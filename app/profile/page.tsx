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
            className="rounded-2xl p-8 transition-all duration-300"
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
            {/* Section Header */}
            <div style={{ marginBottom: "28px" }}>
              <h2 className="text-xl font-semibold" style={{ color: "#0F172A", margin: "0 0 8px 0" }}>
                Search Readiness
              </h2>
              <p style={{ fontSize: "14px", color: "#64748B", margin: 0 }}>
                How your profile currently performs in the job market
              </p>
            </div>

            {/* Main Score Card with Visual Progress */}
            <div
              style={{
                background: "#F0F9FF",
                border: "1px solid #BFDBFE",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              {/* Circular Progress Indicator */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", width: "100px", height: "100px" }}>
                <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="8"
                    strokeDasharray={`${(78 / 100) * 2 * Math.PI * 42} ${2 * Math.PI * 42}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div style={{ position: "absolute", textAlign: "center" }}>
                  <p style={{ fontSize: "28px", fontWeight: "700", color: "#2563EB", margin: 0 }}>78%</p>
                  <p style={{ fontSize: "11px", fontWeight: "600", color: "#64748B", margin: "4px 0 0 0" }}>
                    READY
                  </p>
                </div>
              </div>

              {/* Score Interpretation */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 6px 0" }}>
                  Good — but missing signals for senior roles
                </p>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: "1.6" }}>
                  Your profile shows strong alignment with early-to-mid career roles. Adding signals for seniority (e.g., advanced experimentation, project leadership) would unlock higher-seniority matches.
                </p>
              </div>
            </div>

            {/* Two-Column Layout: Impact + Strengths */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
              {/* What this affects */}
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3 style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", margin: "0 0 14px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  What This Affects
                </h3>
                <ul style={{ margin: 0, paddingLeft: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li style={{ fontSize: "13px", color: "#0F172A", margin: 0, paddingLeft: "24px", position: "relative", fontWeight: "500" }}>
                    <span style={{ position: "absolute", left: "0", color: "#2563EB", fontWeight: "600" }}>→</span>
                    Ranking in Opportunities
                  </li>
                  <li style={{ fontSize: "13px", color: "#0F172A", margin: 0, paddingLeft: "24px", position: "relative", fontWeight: "500" }}>
                    <span style={{ position: "absolute", left: "0", color: "#2563EB", fontWeight: "600" }}>→</span>
                    Match confidence (72–92%)
                  </li>
                  <li style={{ fontSize: "13px", color: "#0F172A", margin: 0, paddingLeft: "24px", position: "relative", fontWeight: "500" }}>
                    <span style={{ position: "absolute", left: "0", color: "#2563EB", fontWeight: "600" }}>→</span>
                    CV strength during Apply
                  </li>
                  <li style={{ fontSize: "13px", color: "#0F172A", margin: 0, paddingLeft: "24px", position: "relative", fontWeight: "500" }}>
                    <span style={{ position: "absolute", left: "0", color: "#2563EB", fontWeight: "600" }}>→</span>
                    Interview likelihood
                  </li>
                </ul>
              </div>

              {/* Strengths */}
              <div
                style={{
                  background: "#ECFDF5",
                  border: "1px solid #A7F3D0",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3 style={{ fontSize: "11px", fontWeight: "700", color: "#047857", margin: "0 0 14px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Strengths
                </h3>
                <ul style={{ margin: 0, paddingLeft: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li style={{ fontSize: "13px", color: "#065F46", margin: 0, paddingLeft: "24px", position: "relative", fontWeight: "500" }}>
                    <span style={{ position: "absolute", left: "0" }}>✓</span>
                    Strong Product Analyst alignment
                  </li>
                  <li style={{ fontSize: "13px", color: "#065F46", margin: 0, paddingLeft: "24px", position: "relative", fontWeight: "500" }}>
                    <span style={{ position: "absolute", left: "0" }}>✓</span>
                    Remote EU market well-covered
                  </li>
                  <li style={{ fontSize: "13px", color: "#065F46", margin: 0, paddingLeft: "24px", position: "relative", fontWeight: "500" }}>
                    <span style={{ position: "absolute", left: "0" }}>✓</span>
                    Consistent match quality
                  </li>
                </ul>
              </div>
            </div>

            {/* Current Blockers - Compact Cards */}
            <div style={{ marginBottom: "28px" }}>
              <h3 style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", margin: "0 0 14px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Current Blockers
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Blocker 1 */}
                <div
                  style={{
                    padding: "16px",
                    background: "#FEF3C7",
                    borderRadius: "10px",
                    border: "1px solid #FCD34D",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "13px", color: "#92400E", margin: "0 0 2px 0", fontWeight: "600" }}>
                      Missing: Advanced experimentation
                    </p>
                    <p style={{ fontSize: "12px", color: "#B45309", margin: 0 }}>
                      +6–8% to Data Analyst fit
                    </p>
                  </div>
                  <button
                    style={{
                      background: "#FBBF24",
                      color: "#78350F",
                      border: "none",
                      padding: "7px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#F59E0B"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#FBBF24"
                    }}
                  >
                    Learn
                  </button>
                </div>

                {/* Blocker 2 */}
                <div
                  style={{
                    padding: "16px",
                    background: "#FEF3C7",
                    borderRadius: "10px",
                    border: "1px solid #FCD34D",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "13px", color: "#92400E", margin: "0 0 2px 0", fontWeight: "600" }}>
                      Data Analyst capped at 88% fit
                    </p>
                    <p style={{ fontSize: "12px", color: "#B45309", margin: 0 }}>
                      Senior-level experience gap
                    </p>
                  </div>
                  <button
                    style={{
                      background: "#FBBF24",
                      color: "#78350F",
                      border: "none",
                      padding: "7px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#F59E0B"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#FBBF24"
                    }}
                  >
                    Add exp
                  </button>
                </div>

                {/* Blocker 3 */}
                <div
                  style={{
                    padding: "16px",
                    background: "#FEF3C7",
                    borderRadius: "10px",
                    border: "1px solid #FCD34D",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "13px", color: "#92400E", margin: "0 0 2px 0", fontWeight: "600" }}>
                      Senior roles downranked
                    </p>
                    <p style={{ fontSize: "12px", color: "#B45309", margin: 0 }}>
                      Gain 1+ year of focused experience
                    </p>
                  </div>
                  <button
                    style={{
                      background: "#FBBF24",
                      color: "#78350F",
                      border: "none",
                      padding: "7px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#F59E0B"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#FBBF24"
                    }}
                  >
                    Adjust
                  </button>
                </div>
              </div>
            </div>

            {/* Recommended Focus - Bottom Section */}
            <div
              style={{
                background: "#F9FAFB",
                borderTop: "1px solid #E5E7EB",
                marginLeft: "-32px",
                marginRight: "-32px",
                marginBottom: "-32px",
                padding: "24px 32px",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            >
              <h3 style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Your Focus Strategy
              </h3>
              <div style={{ display: "flex", gap: "16px" }}>
                {/* Primary Focus */}
                <div
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    border: "2px solid #2563EB",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "6px",
                        background: "#2563EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      1
                    </div>
                    <p style={{ fontSize: "12px", fontWeight: "700", color: "#2563EB", margin: 0, textTransform: "uppercase" }}>
                      Primary
                    </p>
                  </div>
                  <p style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Product Analyst
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                    92% avg match
                  </p>
                </div>

                {/* Secondary Focus */}
                <div
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "6px",
                        background: "#64748B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      2
                    </div>
                    <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: 0, textTransform: "uppercase" }}>
                      Secondary
                    </p>
                  </div>
                  <p style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    BI Analyst
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                    85% avg match
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#64748B", margin: "12px 0 0 0", fontStyle: "italic" }}>
                This focus improves relevance but reduces diversity. Add Data Analyst signals to broaden reach.
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
