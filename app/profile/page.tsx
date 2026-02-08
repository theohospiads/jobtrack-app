'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-8 pb-10">
        {/* Page Header */}
        <header className="mb-16">
          <h1
            className="text-5xl font-bold"
            style={{ color: "#0F172A", letterSpacing: "-1px", marginBottom: "16px" }}
          >
            Your Profile
          </h1>
          <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "600px", lineHeight: "1.6" }}>
            Tell the system who you are and what job you want. That's it. Everything else follows.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {/* 1. WHO AM I */}
          <section
            className="rounded-2xl p-12 transition-all duration-300"
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
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "32px" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 16px 0" }}>
                  Who Are You?
                </p>
                <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#0F172A", margin: "0 0 24px 0", lineHeight: "1.1" }}>
                  Senior Product Analyst
                </h2>
                <p style={{ fontSize: "16px", color: "#64748B", margin: "0 0 32px 0", lineHeight: "1.7", maxWidth: "600px" }}>
                  4 years of experience. Data-driven. Specialized in product analytics, experimentation, and metrics strategy.
                </p>
                
                <div style={{ display: "flex", gap: "48px", marginBottom: "32px" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 6px 0" }}>Experience</p>
                    <p style={{ fontSize: "20px", fontWeight: "600", color: "#0F172A", margin: 0 }}>4 years</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 6px 0" }}>Location</p>
                    <p style={{ fontSize: "20px", fontWeight: "600", color: "#0F172A", margin: 0 }}>Remote EU</p>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/profile/edit')}
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "14px 28px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
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
                  Update my info
                </button>
              </div>
            </div>
          </section>

          {/* 2. WHAT DO YOU WANT */}
          <section
            className="rounded-2xl p-12 transition-all duration-300"
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
            <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 16px 0" }}>
              What Do You Want?
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#0F172A", margin: "0 0 32px 0" }}>
              Your Target Roles
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Primary */}
              <div
                style={{
                  padding: "24px",
                  background: "#F0F9FF",
                  border: "2px solid #2563EB",
                  borderRadius: "12px",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#2563EB", textTransform: "uppercase", margin: "0 0 12px 0" }}>
                  🎯 Primary Target
                </p>
                <p style={{ fontSize: "28px", fontWeight: "700", color: "#0F172A", margin: 0 }}>
                  Senior Product Analyst
                </p>
              </div>

              {/* Secondary */}
              <div
                style={{
                  padding: "24px",
                  background: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", textTransform: "uppercase", margin: "0 0 12px 0" }}>
                  Also open to:
                </p>
                <p style={{ fontSize: "28px", fontWeight: "700", color: "#0F172A", margin: 0 }}>
                  Product Manager
                </p>
              </div>
            </div>
          </section>

          {/* 3. YOUR STRENGTHS */}
          <section
            className="rounded-2xl p-12 transition-all duration-300"
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
            <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 16px 0" }}>
              What Makes You Stand Out
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#0F172A", margin: "0 0 32px 0" }}>
              Your Strengths
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {["A/B Testing", "SQL", "User Research", "Data Visualization", "Leadership", "Strategy"].map((skill, i) => (
                <div
                  key={skill}
                  style={{
                    padding: "14px 20px",
                    background: "#F1F5F9",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#0F172A",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* 4. PREFERENCES */}
          <section
            className="rounded-2xl p-12 transition-all duration-300"
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
            <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 16px 0" }}>
              What You're Looking For
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#0F172A", margin: "0 0 40px 0" }}>
              Job Preferences
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "48px" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 12px 0" }}>
                  Salary
                </p>
                <p style={{ fontSize: "24px", fontWeight: "700", color: "#0F172A", margin: 0 }}>
                  €80k – €120k
                </p>
              </div>

              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 12px 0" }}>
                  Company Type
                </p>
                <p style={{ fontSize: "24px", fontWeight: "700", color: "#0F172A", margin: 0 }}>
                  B2B SaaS
                </p>
              </div>

              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 12px 0" }}>
                  Flexibility
                </p>
                <p style={{ fontSize: "24px", fontWeight: "700", color: "#0F172A", margin: 0 }}>
                  Remote only
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
