'use client';

import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"

export default function DashboardPage() {
  return (
    <div 
      className="min-h-screen min-w-[1280px]"
      style={{
        backgroundColor: '#F8FAFC'
      }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        <PageHeader />
        
        {/* Dashboard Header with Date Range */}
        <div className="mb-8 flex items-center justify-between">
          <h1 
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Dashboard
          </h1>
          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all"
            style={{ 
              background: "#F1F5F9", 
              color: "#64748B",
              border: "1px solid #E5E7EB",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E2E8F0";
              e.currentTarget.style.color = "#475569";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#F1F5F9";
              e.currentTarget.style.color = "#64748B";
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-sm font-medium">Jan 20, 2023 - Feb 09, 2023</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V13M15.5 2.5L21 8M22 7L17 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        
        <div className="mb-12 grid grid-cols-4 gap-4">
          {/* Matches Found */}
          <div
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                Matches Found
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              10
            </p>
            <p className="text-xs" style={{ color: "#2563EB" }}>
              +18% from last week
            </p>
          </div>

          {/* Outreach Sent */}
          <div
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                Outreach Sent
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              42
            </p>
            <p className="text-xs" style={{ color: "#2563EB" }}>
              +7 from last week
            </p>
          </div>

          {/* Responses Received */}
          <div
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                Responses Received
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              4
            </p>
            <p className="text-xs" style={{ color: "#2563EB" }}>
              +2 new responses
            </p>
          </div>

          {/* Interview Rate */}
          <div
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                Interview Rate
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              +3.2%
            </p>
            <p className="text-xs" style={{ color: "#2563EB" }}>
              +2.1% reply rate
            </p>
          </div>
        </div>

        {/* Recent Responses Section - Above Tutorials */}
        <div 
          className="mb-12 rounded-2xl p-8 transition-all duration-300"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#CBD5E1";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E5E7EB";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
          }}
        >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>
                Recent Responses
              </h3>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Latest responses you got
              </p>
            </div>

            {/* Responses List */}
            <div className="flex flex-col gap-4">
              {/* Response 1 */}
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0 text-sm font-semibold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#E0E7FF",
                      color: "#2563EB",
                    }}
                  >
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Jane Doe</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>Acme Inc.</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#E2E8F0";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F1F5F9";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  View
                </button>
              </div>

              {/* Response 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0 text-sm font-semibold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#E0E7FF",
                      color: "#2563EB",
                    }}
                  >
                    MR
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Mike Roberts</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>StartupXYZ</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#E2E8F0";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F1F5F9";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  View
                </button>
              </div>
            </div>
        </div>

        {/* Tutorials Section */}
        <div className="flex flex-col gap-6">
          {/* Tutorial 1 - Image Left, Content Right */}
          <div
            className="flex gap-6 overflow-hidden rounded-2xl transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Image */}
            <div 
              className="w-2/5 flex-shrink-0 overflow-hidden"
              style={{ 
                aspectRatio: "16/9",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PsK7JNW18g0gq6loRNUX661o8gJHb6.png"
                alt="Tutorial 1: How to use the app"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex w-3/5 flex-col items-start justify-center pr-6">
              <h3
                className="text-lg font-semibold"
                style={{ color: "#0F172A" }}
              >
                Tutorial #1: How to use the app
              </h3>
              <p 
                className="mt-2 text-xs"
                style={{ color: "#64748B" }}
              >
                3 min · Beginner
              </p>
              <button
                className="mt-4 flex items-center gap-1 cursor-pointer text-sm font-medium transition-all rounded-lg px-3 py-2"
                style={{ 
                  background: "#EC9F55",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(236, 159, 85, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#D88A3D";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(236, 159, 85, 0.3)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#EC9F55";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(236, 159, 85, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Watch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Tutorial 2 - Content Left, Image Right */}
          <div
            className="flex gap-6 overflow-hidden rounded-2xl transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Content */}
            <div className="flex w-3/5 flex-col items-start justify-center pl-6">
              <h3
                className="text-lg font-semibold"
                style={{ color: "#0F172A" }}
              >
                Tutorial #2: Set up your profile for better matches
              </h3>
              <p 
                className="mt-2 text-xs"
                style={{ color: "#64748B" }}
              >
                5 min · Quick win
              </p>
              <button
                className="mt-4 flex items-center gap-1 cursor-pointer text-sm font-medium transition-all rounded-lg px-3 py-2"
                style={{ 
                  background: "#EC9F55",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(236, 159, 85, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#D88A3D";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(236, 159, 85, 0.3)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#EC9F55";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(236, 159, 85, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Watch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Image */}
            <div 
              className="w-2/5 flex-shrink-0 overflow-hidden"
              style={{ 
                aspectRatio: "16/9",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51af03a8-3f10-426a-9e2c-16e47811bab1-removebg-preview-KCufpWooZsUJT7EDzCwmI1w8Ii8Hls.png"
                alt="Tutorial 2: Set up your profile for better matches"
                className="w-full h-full object-cover"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </div>
          </div>
        </div>

        {/* Recent Responses Section */}
        <div 
          className="mt-12 rounded-2xl p-8 transition-all duration-300"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#CBD5E1";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E5E7EB";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)";
          }}
        >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>
                Top matches
              </h3>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Best fits for you
              </p>
            </div>

            {/* Responses List */}
            <div className="flex flex-col gap-4">
              {/* Response 1 */}
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0 text-sm font-semibold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#E0E7FF",
                      color: "#2563EB",
                    }}
                  >
                    PA
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Product Analyst Intern</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>Acme Corp</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
                >
                  View
                </button>
              </div>

              {/* Response 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0 text-sm font-semibold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#E0E7FF",
                      color: "#2563EB",
                    }}
                  >
                    DA
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Data Analyst</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>TechStart Inc</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
                >
                  View
                </button>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
