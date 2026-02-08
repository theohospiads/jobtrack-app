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
        <div className="mb-10">
          <h1 
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Profile
          </h1>
        </div>

        <div className="flex flex-col gap-8">
          {/* 1. WHO ARE YOU? */}
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
            <h2 className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: "#64748B", letterSpacing: "0.5px", margin: 0 }}>
              Who Are You?
            </h2>
            
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
              <div style={{ flex: 1 }}>
                <p className="text-lg font-semibold mb-6" style={{ color: "#0F172A", margin: 0 }}>
                  Senior Product Analyst
                </p>
                <p className="text-sm mb-4" style={{ color: "#64748B", margin: 0, lineHeight: "1.6" }}>
                  4 years of experience. Data-driven. Specialized in product analytics, experimentation, and metrics strategy.
                </p>
                
                <div style={{ display: "flex", gap: "32px", marginBottom: "16px" }}>
                  <div>
                    <p className="text-xs font-medium mb-1" style={{ color: "#94A3B8", textTransform: "uppercase", margin: 0 }}>Experience</p>
                    <p className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>4 years</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-1" style={{ color: "#94A3B8", textTransform: "uppercase", margin: 0 }}>Location</p>
                    <p className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>Remote EU</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.push('/profile/edit')}
                style={{
                  background: "#F1F5F9",
                  color: "#64748B",
                  border: "1px solid #E5E7EB",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E2E8F0"
                  e.currentTarget.style.color = "#475569"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F1F5F9"
                  e.currentTarget.style.color = "#64748B"
                }}
              >
                Edit
              </button>
            </div>
          </section>

          {/* 2. WHAT DO YOU WANT? */}
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
            <h2 className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: "#64748B", letterSpacing: "0.5px", margin: 0 }}>
              What Do You Want?
            </h2>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {/* Primary */}
                  <div style={{ padding: "12px 16px", background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#0369A1", textTransform: "uppercase", margin: "0 0 4px 0" }}>
                      Primary
                    </p>
                    <p className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
                      Senior Product Analyst
                    </p>
                  </div>

                  {/* Secondary */}
                  <div style={{ padding: "12px 16px", background: "#F8FAFC", border: "1px solid #E5E7EB", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#64748B", textTransform: "uppercase", margin: "0 0 4px 0" }}>
                      Also open to
                    </p>
                    <p className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
                      Product Manager
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.push('/profile/edit')}
                style={{
                  background: "#F1F5F9",
                  color: "#64748B",
                  border: "1px solid #E5E7EB",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  height: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E2E8F0"
                  e.currentTarget.style.color = "#475569"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F1F5F9"
                  e.currentTarget.style.color = "#64748B"
                }}
              >
                Edit
              </button>
            </div>
          </section>

          {/* 3. WHAT MAKES YOU STAND OUT? */}
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
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
              <div style={{ flex: 1 }}>
                <h2 className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: "#64748B", letterSpacing: "0.5px", margin: 0 }}>
                  What Makes You Stand Out?
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["A/B Testing", "SQL", "User Research", "Data Viz", "Leadership", "Strategy"].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "8px 12px",
                        background: "#F8FAFC",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#0F172A",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => router.push('/profile/edit')}
                style={{
                  background: "#F1F5F9",
                  color: "#64748B",
                  border: "1px solid #E5E7EB",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E2E8F0"
                  e.currentTarget.style.color = "#475569"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F1F5F9"
                  e.currentTarget.style.color = "#64748B"
                }}
              >
                Edit
              </button>
            </div>
          </section>

          {/* 4. WHAT ARE YOU LOOKING FOR? */}
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
            <h2 className="text-xs font-semibold mb-6 uppercase tracking-wide" style={{ color: "#64748B", letterSpacing: "0.5px", margin: 0 }}>
              What Are You Looking For?
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
              <div>
                <p className="text-xs font-medium mb-2" style={{ color: "#94A3B8", textTransform: "uppercase", margin: 0 }}>
                  Salary
                </p>
                <p className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
                  €80k – €120k
                </p>
              </div>

              <div>
                <p className="text-xs font-medium mb-2" style={{ color: "#94A3B8", textTransform: "uppercase", margin: 0 }}>
                  Company Type
                </p>
                <p className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
                  B2B SaaS
                </p>
              </div>

              <div>
                <p className="text-xs font-medium mb-2" style={{ color: "#94A3B8", textTransform: "uppercase", margin: 0 }}>
                  Flexibility
                </p>
                <p className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
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
