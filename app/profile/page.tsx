'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        {/* Page Header */}
        <header className="mb-12">
          <h1
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Profile
          </h1>
          <p style={{ fontSize: "14px", color: "#64748B", margin: "8px 0 0 0" }}>
            Who you are, what you want — so the system makes better decisions for you
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {/* 1. Identity Hero Section */}
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
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Who You Are
                </p>
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#0F172A", margin: "0 0 8px 0" }}>
                  Senior Product Analyst
                </h2>
                <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 12px 0", lineHeight: "1.6" }}>
                  Data-driven strategist with 4 years in product analytics. Specialized in user research, experimentation, and metrics-driven decision making at B2B SaaS companies.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748B", textTransform: "uppercase" }}>Experience</span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>4 years</span>
                  </div>
                  <div style={{ width: "1px", background: "#E5E7EB" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748B", textTransform: "uppercase" }}>Location</span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>Remote EU</span>
                  </div>
                  <div style={{ width: "1px", background: "#E5E7EB" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748B", textTransform: "uppercase" }}>Employment</span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>Full-time</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => router.push('/profile/edit')}
                style={{
                  background: "#2563EB",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "11px 20px",
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
                Edit profile
              </button>
            </div>
          </section>

          {/* 2. What You're Looking For */}
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
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                What You're Looking For
              </p>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                Career Targets
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Target 1 */}
              <div
                style={{
                  padding: "16px",
                  background: "#F0F9FF",
                  border: "2px solid #2563EB",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "4px",
                      background: "#2563EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    1
                  </div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#2563EB", margin: 0, textTransform: "uppercase" }}>
                    Primary
                  </p>
                </div>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Senior Product Analyst
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Best fit for your background
                </p>
              </div>

              {/* Target 2 */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "4px",
                      background: "#64748B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    2
                  </div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", margin: 0, textTransform: "uppercase" }}>
                    Secondary
                  </p>
                </div>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Product Manager
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Growth opportunity
                </p>
              </div>
            </div>

            <p style={{ fontSize: "12px", color: "#64748B", margin: "16px 0 0 0", fontStyle: "italic" }}>
              Add or modify targets to change the opportunities you see
            </p>
          </section>

          {/* 3. Key Strengths */}
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
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                What Makes You Stand Out
              </p>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                Core Strengths
              </h2>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["User Research", "A/B Testing", "SQL & Analytics", "Data Visualization", "Cross-functional Leadership", "Metrics Strategy"].map((strength) => (
                <div
                  key={strength}
                  style={{
                    padding: "8px 12px",
                    background: "#F1F5F9",
                    border: "1px solid #E5E7EB",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#0F172A",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  ✓ {strength}
                </div>
              ))}
            </div>
          </section>

          {/* 4. Preferences & Search Settings */}
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
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Job Search Preferences
              </p>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                Settings
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
              {/* Salary Range */}
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0" }}>
                  Salary Range
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  €80k – €120k
                </p>
                <p style={{ fontSize: "12px", color: "#94A3B8", margin: "4px 0 0 0" }}>
                  Annual
                </p>
              </div>

              {/* Company Size */}
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0" }}>
                  Company Size
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Series A – Unicorn
                </p>
                <p style={{ fontSize: "12px", color: "#94A3B8", margin: "4px 0 0 0" }}>
                  Fast-growing
                </p>
              </div>

              {/* Industry Focus */}
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0" }}>
                  Industry Focus
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  B2B SaaS
                </p>
                <p style={{ fontSize: "12px", color: "#94A3B8", margin: "4px 0 0 0" }}>
                  Open to others
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #E5E7EB", marginTop: "20px", paddingTop: "20px" }}>
              <button
                style={{
                  background: "transparent",
                  color: "#2563EB",
                  border: "1px solid #E5E7EB",
                  padding: "10px 16px",
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
              >
                Edit preferences
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
