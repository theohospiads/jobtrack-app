'use client';

import { TopNav } from "@/components/top-nav"

export default function ProfilePage() {
  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-8 pb-16">
        {/* Page Header */}
        <header className="mb-8">
          <h1
            className="text-2xl font-semibold"
            style={{ color: "#0F172A" }}
          >
            Profile
          </h1>
        </header>

        <div className="flex flex-col gap-8">
          {/* 1. Profile Strength */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "none"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <h2 className="text-base font-semibold" style={{ color: "#0F172A", marginBottom: "16px" }}>
              Profile Strength
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <span
                style={{
                  color: "#2563EB",
                  fontSize: "32px",
                  fontWeight: "700",
                }}
              >
                72%
              </span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", margin: "0 0 8px 0" }}>
                  Your profile is optimized for Product & Data roles in EU startups.
                </p>
                <p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>
                  Adding 2-3 quantified results would boost visibility by ~15%.
                </p>
              </div>
            </div>
            <button
              style={{
                background: "#FFFFFF",
                color: "#2563EB",
                border: "1px solid #2563EB",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#EFF6FF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF"
              }}
            >
              Improve profile inputs
            </button>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Target 1 */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Product Analyst
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                    Strong alignment with your background
                  </p>
                </div>
                <div
                  style={{
                    background: "#ECFDF5",
                    color: "#065F46",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                    flexShrink: 0,
                  }}
                >
                  Strong
                </div>
              </div>

              {/* Target 2 */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Data Analyst
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                    Solid match with some gaps
                  </p>
                </div>
                <div
                  style={{
                    background: "#FFF7ED",
                    color: "#9A3412",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                    flexShrink: 0,
                  }}
                >
                  Moderate
                </div>
              </div>

              {/* Target 3 */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Business Intelligence Analyst
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                    Growing opportunity aligned with skills
                  </p>
                </div>
                <div
                  style={{
                    background: "#ECFDF5",
                    color: "#065F46",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                    flexShrink: 0,
                  }}
                >
                  Strong
                </div>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 className="text-base font-semibold" style={{ color: "#0F172A" }}>
                Profile Quality Signals
              </h2>
              <button
                style={{
                  background: "#2563EB",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "13px",
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
                Improve profile
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#F8FAFC", borderRadius: "8px" }}>
                <p style={{ fontSize: "14px", color: "#0F172A", margin: 0 }}>Quantified experience</p>
                <span style={{ fontSize: "18px" }}>✅</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#F8FAFC", borderRadius: "8px" }}>
                <p style={{ fontSize: "14px", color: "#0F172A", margin: 0 }}>Role clarity</p>
                <span style={{ fontSize: "18px" }}>✅</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#F8FAFC", borderRadius: "8px" }}>
                <p style={{ fontSize: "14px", color: "#0F172A", margin: 0 }}>Skill depth</p>
                <span style={{ fontSize: "18px" }}>⚠️</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#F8FAFC", borderRadius: "8px" }}>
                <p style={{ fontSize: "14px", color: "#0F172A", margin: 0 }}>Market positioning</p>
                <span style={{ fontSize: "18px" }}>✅</span>
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
