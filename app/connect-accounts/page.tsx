'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { useState, useEffect } from 'react'

const PLATFORMS = [
  // Recommended
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Auto-fill applications & track recruiter interactions',
    recommended: true,
    category: 'Job Boards',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.783 0-9.69h3.554v1.374c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.393 3.745 4.386v5.538zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.955-1.71 1.187 0 1.916.755 1.916 1.71 0 .951-.729 1.71-1.956 1.71zm1.581 11.019H3.757V9.762h3.161v10.69zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Track offer emails & auto-organize correspondence',
    recommended: true,
    category: 'Email',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#EA4335]">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    id: 'indeed',
    name: 'Indeed',
    description: 'Instant job alerts & application tracking',
    recommended: true,
    category: 'Job Boards',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#003A9B]">
        <circle cx="5" cy="12" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="19" cy="12" r="2"/>
      </svg>
    ),
  },
  // Job Boards
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    description: 'Compare salaries, reviews & track applications',
    category: 'Job Boards',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#0CAA41]">
        <path d="M12 2L2 8v8c0 8 10 6 10 6s10 2 10-6V8l-10-6z"/>
      </svg>
    ),
  },
  {
    id: 'monster',
    name: 'Monster',
    description: 'Job search platform & resume management',
    category: 'Job Boards',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#63B6D5]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    ),
  },
  {
    id: 'ziprecruiter',
    name: 'ZipRecruiter',
    description: 'Job aggregator & application tracking',
    category: 'Job Boards',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#4A90E2]">
        <rect x="3" y="6" width="18" height="12" rx="2"/>
      </svg>
    ),
  },
  {
    id: 'linkedin-jobs',
    name: 'LinkedIn Jobs',
    description: 'LinkedIn job board integration',
    category: 'Job Boards',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2]">
        <circle cx="12" cy="6" r="2"/>
        <path d="M9 9h6v9H9z"/>
        <path d="M5 9h2v9H5z"/>
      </svg>
    ),
  },
  // Email
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    description: 'Email tracking & calendar sync',
    category: 'Email',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#0078D4]">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
      </svg>
    ),
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    description: 'Workspace email & calendar integration',
    category: 'Email',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" viewBox="0 0 24 24">
        <g>
          <path fill="#4285F4" d="M3 11h8V3H3z"/>
          <path fill="#34A853" d="M13 3v8h8V3z"/>
          <path fill="#FBBC04" d="M3 13h8v8H3z"/>
          <path fill="#EA4335" d="M13 13h8v8h-8z"/>
        </g>
      </svg>
    ),
  },
  // Portfolio
  {
    id: 'github',
    name: 'GitHub',
    description: 'Sync your portfolio & showcase projects',
    category: 'Portfolio',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#333]">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    id: 'behance',
    name: 'Behance',
    description: 'Design portfolio & creative showcase',
    category: 'Portfolio',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#1769FF]">
        <path d="M6.5 7h5v1.5h-5V7zm0 4h5v1.5h-5v-1.5zM19 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
      </svg>
    ),
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    description: 'Design work portfolio platform',
    category: 'Portfolio',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#EA4C89]">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M8.56 2.75c3.61 6.84 6.75 11.32 10.44 16.62M10.05 15.62c3.57-3.57 5.96-6.85 8.97-12.28"/>
      </svg>
    ),
  },
  // Communication
  {
    id: 'slack',
    name: 'Slack',
    description: 'Get notified about job updates in Slack',
    category: 'Communication',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#E01E5A]">
        <path d="M5 3C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5zm7 11c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2zm0-6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2z"/>
      </svg>
    ),
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Job opportunity alerts via Discord',
    category: 'Communication',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.009-.119c.125-.093.25-.19.371-.287a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.195.371.288a.072.072 0 0 1-.01.119a12.901 12.901 0 0 1-1.872.892a.07.07 0 0 0-.037.099a14.997 14.997 0 0 0 1.293 2.1a.078.078 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.079.079 0 0 0 .033-.057c.5-4.761-.838-8.9-3.549-12.571a.06.06 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.979-2.157 2.157-2.157c1.184 0 2.158.964 2.157 2.157c0 1.19-.973 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.979-2.157 2.157-2.157c1.184 0 2.158.964 2.157 2.157c0 1.19-.973 2.156-2.157 2.156z"/>
      </svg>
    ),
  },
  // Interview & Assessment
  {
    id: 'leetcode',
    name: 'LeetCode',
    description: 'Track coding interview prep & problems',
    category: 'Interview Prep',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#FFA116]">
        <path d="M16.102 17.93h-3.595v-5.308h3.597V17.93zM16.102 13.307H12.51V9.699h3.592v3.608zm-7.595 4.623h-3.596v-5.308h3.597v5.308zm0-4.623H4.912v-3.608h3.595v3.608zM21.06 24H2.94A2.96 2.96 0 0 1 0 21.061V2.939A2.96 2.96 0 0 1 2.94 0h18.12A2.96 2.96 0 0 1 24 2.939v18.122A2.96 2.96 0 0 1 21.06 24z"/>
      </svg>
    ),
  },
  {
    id: 'codewars',
    name: 'Codewars',
    description: 'Code challenge & programming practice',
    category: 'Interview Prep',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#8B0000]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/>
      </svg>
    ),
  },
  // Productivity
  {
    id: 'notion',
    name: 'Notion',
    description: 'Job tracking & interview notes workspace',
    category: 'Productivity',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#000]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    ),
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    description: 'Auto-fill job tracking spreadsheets',
    category: 'Productivity',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#0F9D58]">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
      </svg>
    ),
  },
  {
    id: 'airtable',
    name: 'Airtable',
    description: 'Structured job pipeline management',
    category: 'Productivity',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#13AEE9]">
        <rect x="3" y="3" width="5" height="5" fill="currentColor"/>
        <rect x="10" y="3" width="5" height="5" fill="currentColor"/>
        <rect x="17" y="3" width="4" height="5" fill="currentColor"/>
        <rect x="3" y="10" width="5" height="5" fill="currentColor"/>
        <rect x="10" y="10" width="5" height="5" fill="currentColor"/>
        <rect x="17" y="10" width="4" height="5" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function ConnectAccountsPage() {
  const router = useRouter()
  const { updateProfile } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [connectedPlatforms, setConnectedPlatforms] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredPlatforms = PLATFORMS.filter(platform =>
    platform.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    platform.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    platform.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const groupedPlatforms = filteredPlatforms.reduce((acc, platform) => {
    if (!acc[platform.category]) {
      acc[platform.category] = []
    }
    acc[platform.category].push(platform)
    return acc
  }, {} as Record<string, typeof PLATFORMS>)

  const handleConnect = (platformId: string) => {
    setConnectedPlatforms(new Set([...connectedPlatforms, platformId]))
  }

  const handleDisconnect = (platformId: string) => {
    const newSet = new Set(connectedPlatforms)
    newSet.delete(platformId)
    setConnectedPlatforms(newSet)
  }

  const handleContinue = () => {
    const connectedArray = Array.from(connectedPlatforms)
    updateProfile({ connected_platforms: connectedArray.join(',') })
    router.push('/dashboard')
  }

  if (!mounted) return null

  const recommended = PLATFORMS.filter(p => p.recommended)

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Top Navigation */}
      <div style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: '600', margin: '0', color: '#0F172A' }}>
            Connect Your Accounts
          </h1>
          <p style={{ fontSize: '14px', color: '#64748B', margin: '4px 0 0 0' }}>
            Link your job search platforms to auto-track applications & opportunities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Search Bar */}
        <div style={{ marginBottom: '40px' }}>
          <input
            type="text"
            placeholder="Search platforms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              color: '#0F172A',
              outline: 'none',
              transition: 'all 0.2s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#2563EB'
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#E2E8F0'
              e.currentTarget.style.boxShadow = 'none'
            }}
          />
          <p style={{ fontSize: '12px', color: '#94A3B8', margin: '8px 0 0 0' }}>
            Found {filteredPlatforms.length} platform{filteredPlatforms.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Recommended Section */}
        {!searchQuery && (
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 16px 0' }}>
              Recommended
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {recommended.map(platform => (
                <div
                  key={platform.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '20px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                    e.currentTarget.style.borderColor = '#D4D4D8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#F1F5F9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#2563EB',
                      }}>
                        {platform.logo}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', margin: '0', color: '#0F172A' }}>
                          {platform.name}
                        </h3>
                        <p style={{ fontSize: '12px', color: '#64748B', margin: '4px 0 0 0' }}>
                          {platform.description}
                        </p>
                      </div>
                    </div>
                    {connectedPlatforms.has(platform.id) ? (
                      <button
                        onClick={() => handleDisconnect(platform.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#E0E7FF',
                          color: '#2563EB',
                          border: '1px solid #C7D2FE',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#C7D2FE'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#E0E7FF'
                        }}
                      >
                        ✓ Connected
                      </button>
                    ) : (
                      <button
                        onClick={() => handleConnect(platform.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#2563EB',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1E40AF'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#2563EB'
                        }}
                      >
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Platforms by Category */}
        {Object.entries(groupedPlatforms).map(([category, platforms]) => (
          <div key={category} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 16px 0' }}>
              {category} ({platforms.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {platforms.map(platform => (
                <div
                  key={platform.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '20px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                    e.currentTarget.style.borderColor = '#D4D4D8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#F1F5F9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#2563EB',
                      }}>
                        {platform.logo}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', margin: '0', color: '#0F172A' }}>
                          {platform.name}
                        </h3>
                        <p style={{ fontSize: '12px', color: '#64748B', margin: '4px 0 0 0' }}>
                          {platform.description}
                        </p>
                      </div>
                    </div>
                    {connectedPlatforms.has(platform.id) ? (
                      <button
                        onClick={() => handleDisconnect(platform.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#E0E7FF',
                          color: '#2563EB',
                          border: '1px solid #C7D2FE',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#C7D2FE'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#E0E7FF'
                        }}
                      >
                        ✓ Connected
                      </button>
                    ) : (
                      <button
                        onClick={() => handleConnect(platform.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#F1F5F9',
                          color: '#64748B',
                          border: '1px solid #E2E8F0',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#E2E8F0'
                          e.currentTarget.style.color = '#334155'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F1F5F9'
                          e.currentTarget.style.color = '#64748B'
                        }}
                      >
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredPlatforms.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ fontSize: '16px', color: '#64748B', margin: '0' }}>
              No platforms found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #E2E8F0' }}>
          <button
            onClick={() => router.push('/dashboard')}
            style={{
              padding: '10px 24px',
              backgroundColor: '#F1F5F9',
              color: '#64748B',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E2E8F0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9'
            }}
          >
            Skip for now
          </button>
          <button
            onClick={handleContinue}
            style={{
              padding: '10px 24px',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1E40AF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563EB'
            }}
          >
            Continue to Dashboard
          </button>
        </div>

        {/* Footer Info */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <p style={{ fontSize: '12px', color: '#64748B', margin: '0', lineHeight: '1.6' }}>
            <strong>Privacy First:</strong> We'll never post, apply, or send messages on your behalf without explicit permission. You control every action. All connections use industry-standard OAuth 2.0 authentication.
          </p>
        </div>
      </div>
    </div>
  )
}
