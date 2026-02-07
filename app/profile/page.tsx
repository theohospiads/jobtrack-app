'use client';

import { TopNav } from "@/components/top-nav"

export default function ProfilePage() {
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
          {/* 1. Profile Strength */}
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
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "20px" }}>
              <span
                style={{
                  color: "#2563EB",
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "1",
                }}
              >
                72%
              </span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  Strong profile for Product & Data roles in EU startups
                </h3>
                <p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>
                  Adding 2–3 quantified results will increase your visibility by ~15%.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <button
                style={{
                  background: "#2563EB",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
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
                Improve profile (3 quick wins)
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "#2563EB",
                  border: "none",
                  padding: "12px 0",
                  borderRadius: "0",
                  fontSize: "14px",
                  fontWeight: "400",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                See what's missing →
              </button>
            </div>
          </section>

          {/* 2. Career DNA */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 className="text-base font-semibold" style={{ color: "#0F172A" }}>
                Career DNA
              </h2>
              <button
                style={{
                  background: "#F3F4F6",
                  color: "#2563EB",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E5E7EB"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F3F4F6"
                }}
              >
                Adjust inputs
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {/* Career Stage */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Career Stage
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Early Career
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "4px 0 0 0" }}>
                  0-3 years in field
                </p>
              </div>

              {/* Core Strengths */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Core Strengths
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Analytics & SQL
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "4px 0 0 0" }}>
                  Data-driven mindset
                </p>
              </div>

              {/* Primary Role Family */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Primary Role
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Product Analyst
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "4px 0 0 0" }}>
                  Best fit for you
                </p>
              </div>
            </div>
          </section>

          {/* 3. Career Targets */}
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {/* Primary Focus */}
              <div
                style={{
                  padding: "18px",
                  background: "#F0F9FF",
                  borderRadius: "12px",
                  border: "2px solid #2563EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                      Product Analyst
                    </p>
                    <span
                      style={{
                        background: "#2563EB",
                        color: "#FFFFFF",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      Primary Focus
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    Strong fit — prioritize this role in your job search.
                  </p>
                </div>
                <button
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
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
                  Search jobs
                </button>
              </div>

              {/* Secondary Option */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Business Intelligence Analyst
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    Strong fit — growing demand aligned with your skills.
                  </p>
                </div>
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F1F5F9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                  }}
                >
                  Include in search
                </button>
              </div>

              {/* Stretch Option */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Data Analyst
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 4px 0" }}>
                    Moderate fit — one skill gap identified.
                  </p>
                  <p style={{ fontSize: "12px", color: "#2563EB", margin: 0, fontWeight: "500" }}>
                    Missing: Advanced experimentation design
                  </p>
                </div>
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F1F5F9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                  }}
                >
                  Build skill
                </button>
              </div>
            </div>
          </section>

          {/* 4. Personalization Rules */}
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
              Personalization Rules
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {/* Contract Type */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Contract Type
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  Full-time
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects job visibility
                </p>
              </div>

              {/* Work Style */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Work Style
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  Remote / Hybrid
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects location filtering
                </p>
              </div>

              {/* Locations */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Locations
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  Paris, London, Remote EU
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects matching
                </p>
              </div>

              {/* Salary Flexibility */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Salary Flexibility
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  ±15% range
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects seniority range
                </p>
              </div>
            </div>
          </section>

          {/* 5. Profile Quality Signals */}
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
              Profile Quality Signals
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Quantified Experience - Good */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 16px", background: "#F8FAFC", borderRadius: "8px" }}>
                <div>
                  <p style={{ fontSize: "14px", color: "#0F172A", margin: "0 0 2px 0", fontWeight: "500" }}>Quantified experience</p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>Recruiters can quickly assess your impact.</p>
                </div>
                <span style={{ fontSize: "18px", flexShrink: 0 }}>✅</span>
              </div>

              {/* Role Clarity - Good */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 16px", background: "#F8FAFC", borderRadius: "8px" }}>
                <div>
                  <p style={{ fontSize: "14px", color: "#0F172A", margin: "0 0 2px 0", fontWeight: "500" }}>Role clarity</p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>Your profile clearly targets specific roles.</p>
                </div>
                <span style={{ fontSize: "18px", flexShrink: 0 }}>✅</span>
              </div>

              {/* Skill Depth - Warning with action */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 16px", background: "#FEF3C7", borderRadius: "8px", border: "1px solid #FCD34D" }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "14px", color: "#0F172A", margin: "0 0 2px 0", fontWeight: "500" }}>Skill depth</p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: "0 0 6px 0" }}>Add one advanced example (SQL, experimentation, or metrics ownership).</p>
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
                    Fix skill depth
                  </button>
                </div>
                <span style={{ fontSize: "18px", flexShrink: 0 }}>⚠️</span>
              </div>

              {/* Market Positioning - Good */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 16px", background: "#F8FAFC", borderRadius: "8px" }}>
                <div>
                  <p style={{ fontSize: "14px", color: "#0F172A", margin: "0 0 2px 0", fontWeight: "500" }}>Market positioning</p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>Aligned with current hiring demand.</p>
                </div>
                <span style={{ fontSize: "18px", flexShrink: 0 }}>✅</span>
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
