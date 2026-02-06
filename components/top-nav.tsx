"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Bell, ChevronDown, Menu, X } from "lucide-react"

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const tabs = useMemo(() => [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Application", href: "/actions" },
    { label: "Profile", href: "/profile" },
  ], [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="topnav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 64,
        width: "100%",
        background: "var(--bg-card)",
        borderBottom: "1px solid var(--border-default)",
        boxShadow: isScrolled ? "var(--shadow-nav)" : "none",
        transition: "box-shadow 120ms ease",
      }}
    >
      <div
        className="topnav__inner"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          height: 64,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side */}
        <div
          className="topnav__left"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Brand */}
          <Link
            href="/dashboard"
            className="brand"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 8px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {/* Logo SVG */}
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={28} height={28} rx={6} fill="var(--primary-600)" />
              <path
                d="M8 14L12 18L20 10"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.2px",
                color: "var(--text-primary)",
              }}
            >
              JobTrack
            </span>
          </Link>

          {/* Tab Strip - Desktop */}
          <nav
            className="tabs"
            aria-label="Primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              height: 40,
            }}
          >
            {mounted && tabs.map((tab) => {
              const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/") || (pathname === "/" && tab.href === "/dashboard")
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="tab"
                  style={{
                    height: 36,
                    padding: "0 12px",
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--primary-600)" : "var(--text-secondary)",
                    background: isActive ? "var(--primary-100)" : "transparent",
                    border: isActive ? "1px solid rgba(26,115,232,0.25)" : "1px solid transparent",
                    transition: "all 120ms ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "var(--bg-muted)"
                      e.currentTarget.style.color = "var(--text-primary)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent"
                      e.currentTarget.style.color = "var(--text-secondary)"
                    }
                  }}
                >
                  {tab.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Right Side */}
        <div
          className="topnav__right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Search Button */}
          <button
            className="iconbtn"
            aria-label="Search"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "transparent",
              border: "1px solid transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Search size={18} color="var(--text-secondary)" />
          </button>

          {/* Notifications Button */}
          <button
            className="iconbtn"
            aria-label="Notifications"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "transparent",
              border: "1px solid transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 120ms ease",
              position: "relative",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Bell size={18} color="var(--text-secondary)" />
            {/* Notification badge */}
            <span
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#EF4444",
              }}
            />
          </button>

          {/* User Menu */}
          <button
            className="usermenu"
            style={{
              height: 36,
              padding: "0 10px 0 6px",
              borderRadius: 999,
              background: "transparent",
              border: "1px solid var(--border-default)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              transition: "background 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {/* Avatar */}
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: 999,
                background: "#CBD5E1",
              }}
            />
            {/* Name */}
            <span
              className="username"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--text-primary)",
                maxWidth: 140,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Account
            </span>
            {/* Caret */}
            <ChevronDown size={14} color="var(--text-muted)" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="iconbtn mobile-menu-btn"
            aria-label="Menu"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "transparent",
              border: "1px solid transparent",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 120ms ease",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={18} color="var(--text-secondary)" />
            ) : (
              <Menu size={18} color="var(--text-secondary)" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: 64,
            right: 16,
            background: "var(--bg-card)",
            border: "1px solid var(--border-default)",
            borderRadius: 12,
            padding: 8,
            boxShadow: "var(--shadow-nav)",
            zIndex: 100,
          }}
        >
          {mounted && tabs.map((tab) => {
            const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/") || (pathname === "/" && tab.href === "/dashboard")
            return (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 44,
                  padding: "0 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--primary-600)" : "var(--text-secondary)",
                  background: isActive ? "var(--primary-100)" : "transparent",
                }}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .tabs {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .username {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
