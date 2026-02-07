'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        {/* Page Header with Create Profile Button */}
        <header className="mb-8 flex items-center justify-between">
          <h1
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Profile
          </h1>
          <button
            onClick={() => router.push('/profile/create')}
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
            Create profile
          </button>
        </header>

        <div className="flex flex-col gap-8">
          {/* 1. Profile Strength - Compact Merged Card */}
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
            {/* Inline metric with headline */}
            <p style={{ fontSize: "15px", color: "#0F172A", margin: "0 0 14px 0", fontWeight: "500", lineHeight: "1.5" }}>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#2563EB" }}>72%</span> — Strong profile for Product & Data roles in EU startups
            </p>

            {/* Career positioning info */}
            <p style={{ fontSize: "13px", color: "#0F172A", margin: "0 0 2px 0", fontWeight: "500" }}>
              Early-career Product Analyst · Remote EU · Full-time
            </p>
            <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 16px 0" }}>
              Optimized for Product & BI roles
            </p>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <button
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
                Improve profile (3 quick wins)
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "#2563EB",
                  border: "none",
                  padding: "0",
                  fontSize: "13px",
                  fontWeight: "500",
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
              <span style={{ fontSize: "13px", color: "#94A3B8" }}>·</span>
              <button
                onClick={() => router.push('/profile/preferences')}
                style={{
                  background: "transparent",
                  color: "#64748B",
                  border: "none",
                  padding: "0",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#2563EB"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#64748B"
                }}
              >
                Edit career & preferences →
              </button>
            </div>
          </section>

          {/* 2. How Your Profile Is Interpreted - Merged Summary */}
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
            <h2 className="text-base font-semibold" style={{ color: "#0F172A", marginBottom: "16px" }}>
              How your profile is interpreted
            </h2>
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "14px", color: "#0F172A", margin: "0 0 4px 0", fontWeight: "500", lineHeight: "1.5" }}>
                Early-career Product Analyst · Remote EU · Full-time
              </p>
              <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: "1.5" }}>
                Optimized for Product & BI roles — targeting fast-growing European startups with data-driven cultures
              </p>
            </div>
            <button
              onClick={() => router.push('/profile/preferences')}
              style={{
                background: "transparent",
                color: "#2563EB",
                border: "none",
                padding: "0",
                fontSize: "13px",
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
              Edit career & preferences →
            </button>
          </section>

          {/* 3. Career Targets - 3 Column Grid */}
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
                <button
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
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
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
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
                  <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 6px 0" }}>
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
                      marginTop: "4px",
                    }}
                  >
                    Learn skill
                  </button>
                </div>
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
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
                  Add to search
                </button>
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
