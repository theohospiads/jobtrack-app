'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { useState, useEffect } from 'react'

const PLATFORMS = [
  // Recommended Job Boards
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Auto-fill applications, track interactions & responses',
    recommended: true,
    category: 'Job Boards',
  },
  {
    id: 'indeed',
    name: 'Indeed',
    description: 'Instant job alerts & application tracking',
    recommended: true,
    category: 'Job Boards',
  },
  // Email
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Track offer emails & auto-organize job correspondence',
    recommended: true,
    category: 'Email',
  },
  {
    id: 'outlook',
    name: 'Outlook',
    description: 'Outlook integration with email tracking',
    recommended: false,
    category: 'Email',
  },
  // Additional Job Boards
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    description: 'Compare companies & track applications',
    recommended: false,
    category: 'Job Boards',
  },
  {
    id: 'monster',
    name: 'Monster',
    description: 'Job search & resume management',
    recommended: false,
    category: 'Job Boards',
  },
  {
    id: 'ziprecruiter',
    name: 'ZipRecruiter',
    description: 'Job matching & application tracking',
    recommended: false,
    category: 'Job Boards',
  },
  {
    id: 'angel-list',
    name: 'AngelList',
    description: 'Startup job opportunities & networking',
    recommended: false,
    category: 'Job Boards',
  },
  {
    id: 'builtin',
    name: 'Built In',
    description: 'Tech & startup job board tracking',
    recommended: false,
    category: 'Job Boards',
  },
  {
    id: 'levels-fyi',
    name: 'Levels.fyi',
    description: 'Salary data & comp analysis',
    recommended: false,
    category: 'Job Boards',
  },
  // Portfolio & Professional
  {
    id: 'github',
    name: 'GitHub',
    description: 'Sync portfolio & showcase your projects',
    recommended: false,
    category: 'Portfolio',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Site',
    description: 'Connect your personal portfolio',
    recommended: false,
    category: 'Portfolio',
  },
  {
    id: 'behance',
    name: 'Behance',
    description: 'Design portfolio & creative work',
    recommended: false,
    category: 'Portfolio',
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    description: 'Design portfolio platform',
    recommended: false,
    category: 'Portfolio',
  },
  // Networking
  {
    id: 'twitter',
    name: 'X (Twitter)',
    description: 'Build professional network & visibility',
    recommended: false,
    category: 'Social',
  },
  {
    id: 'threads',
    name: 'Threads',
    description: 'Professional social networking',
    recommended: false,
    category: 'Social',
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    description: 'Alternative social network',
    recommended: false,
    category: 'Social',
  },
  // Scheduling & Communication
  {
    id: 'calendly',
    name: 'Calendly',
    description: 'Share availability for interview scheduling',
    recommended: false,
    category: 'Scheduling',
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Get job alerts & updates in Slack',
    recommended: false,
    category: 'Communication',
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Community & networking on Discord',
    recommended: false,
    category: 'Communication',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Job alerts & notifications',
    recommended: false,
    category: 'Communication',
  },
  // Interview Prep
  {
    id: 'pramp',
    name: 'Pramp',
    description: 'Interview preparation & practice',
    recommended: false,
    category: 'Interview Prep',
  },
  {
    id: 'interviewing-io',
    name: 'Interviewing.io',
    description: 'Mock interviews & prep',
    recommended: false,
    category: 'Interview Prep',
  },
  {
    id: 'leet-code',
    name: 'LeetCode',
    description: 'Coding interview preparation',
    recommended: false,
    category: 'Interview Prep',
  },
  // Research & Company Info
  {
    id: 'crunchbase',
    name: 'Crunchbase',
    description: 'Company research & funding info',
    recommended: false,
    category: 'Research',
  },
  {
    id: 'blind',
    name: 'Blind',
    description: 'Anonymous company reviews & salary data',
    recommended: false,
    category: 'Research',
  },
  {
    id: 'levels-compensation',
    name: 'Levels Compensation',
    description: 'Tech salary & compensation database',
    recommended: false,
    category: 'Research',
  },
  {
    id: 'paysa',
    name: 'Paysa',
    description: 'Salary & career insights',
    recommended: false,
    category: 'Research',
  },
  // Document Management
  {
    id: 'google-drive',
    name: 'Google Drive',
    description: 'Store resumes & documents',
    recommended: false,
    category: 'Documents',
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'File storage & organization',
    recommended: false,
    category: 'Documents',
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Job search tracking & notes',
    recommended: false,
    category: 'Documents',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    description: 'Personal knowledge management',
    recommended: false,
    category: 'Documents',
  },
  // Productivity
  {
    id: 'asana',
    name: 'Asana',
    description: 'Track job search tasks & timeline',
    recommended: false,
    category: 'Productivity',
  },
  {
    id: 'monday',
    name: 'Monday.com',
    description: 'Project & job search management',
    recommended: false,
    category: 'Productivity',
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Technical job search tracking',
    recommended: false,
    category: 'Productivity',
  },
  {
    id: 'todoist',
    name: 'Todoist',
    description: 'Task management & reminders',
    recommended: false,
    category: 'Productivity',
  },
]

export default function ConnectAccountsPage() {
  const router = useRouter()
  const { updateProfile } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [connectedPlatforms, setConnectedPlatforms] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnect = (platformId: string) => {
    setConnectedPlatforms((prev) => new Set([...prev, platformId]))
  }

  const handleDisconnect = (platformId: string) => {
    setConnectedPlatforms((prev) => {
      const newSet = new Set(prev)
      newSet.delete(platformId)
      return newSet
    })
  }

  const handleSkip = () => {
    const connectedList = Array.from(connectedPlatforms)
    updateProfile({ connected_platforms: connectedList.join(',') })
    router.push('/dashboard')
  }

  const handleContinue = () => {
    setLoading(true)
    setTimeout(() => {
      const connectedList = Array.from(connectedPlatforms)
      updateProfile({ connected_platforms: connectedList.join(',') })
      router.push('/dashboard')
    }, 1000)
  }

  if (!mounted) return null

  // Filter platforms based on search
  const filteredPlatforms = PLATFORMS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const recommendedPlatforms = filteredPlatforms.filter((p) => p.recommended)
  const otherPlatforms = filteredPlatforms.filter((p) => !p.recommended)

  const groupedPlatforms = otherPlatforms.reduce(
    (acc, platform) => {
      const category = platform.category
      if (!acc[category]) acc[category] = []
      acc[category].push(platform)
      return acc
    },
    {} as Record<string, typeof PLATFORMS>
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#0F172A',
              margin: '0 0 16px 0',
              letterSpacing: '-0.5px',
            }}
          >
            Connect your accounts
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#64748B',
              margin: '0 0 24px 0',
              lineHeight: '1.6',
              maxWidth: '550px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Sync with your job search platforms to track applications, get alerts, and organize your job hunt.
          </p>

          {/* Search Bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <input
              type="text"
              placeholder="Search platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 40px',
                fontSize: '14px',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                background: '#F8FAFC',
                color: '#0F172A',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#2563EB'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)'
                e.currentTarget.style.background = '#FFFFFF'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.background = '#F8FAFC'
              }}
            />
            <svg
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#94A3B8',
                pointerEvents: 'none',
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>

        {/* Results Info */}
        {searchQuery && (
          <p
            style={{
              fontSize: '12px',
              color: '#64748B',
              margin: '0 0 32px 0',
              textAlign: 'center',
            }}
          >
            Found {filteredPlatforms.length} platform{filteredPlatforms.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Recommended Section */}
        {recommendedPlatforms.length > 0 && (
          <div style={{ marginBottom: '48px' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#64748B',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              ⭐ Recommended for maximum impact
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {recommendedPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  style={{
                    padding: '20px',
                    background: '#FFFFFF',
                    border: connectedPlatforms.has(platform.id)
                      ? '2px solid #2563EB'
                      : '1px solid #E5E7EB',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: connectedPlatforms.has(platform.id)
                      ? '0 8px 24px rgba(37, 99, 235, 0.15)'
                      : '0 1px 3px rgba(0, 0, 0, 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.borderColor = '#CBD5E1'
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#F1F5F9',
                        borderRadius: '8px',
                        color: '#2563EB',
                        fontSize: '20px',
                      }}
                    >
                      {platform.id === 'linkedin' && '🔗'}
                      {platform.id === 'indeed' && '💼'}
                      {platform.id === 'gmail' && '📧'}
                    </div>
                    {connectedPlatforms.has(platform.id) && (
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          background: '#2563EB',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          fontSize: '14px',
                          fontWeight: '700',
                        }}
                      >
                        ✓
                      </div>
                    )}
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#0F172A',
                        margin: '0 0 4px 0',
                      }}
                    >
                      {platform.name}
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#64748B',
                        margin: 0,
                        lineHeight: '1.4',
                      }}
                    >
                      {platform.description}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      connectedPlatforms.has(platform.id)
                        ? handleDisconnect(platform.id)
                        : handleConnect(platform.id)
                    }
                    style={{
                      background: connectedPlatforms.has(platform.id) ? '#EFF6FF' : '#2563EB',
                      color: connectedPlatforms.has(platform.id) ? '#0369A1' : '#FFFFFF',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (connectedPlatforms.has(platform.id)) {
                        e.currentTarget.style.background = '#DBEAFE'
                      } else {
                        e.currentTarget.style.background = '#1E40AF'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (connectedPlatforms.has(platform.id)) {
                        e.currentTarget.style.background = '#EFF6FF'
                      } else {
                        e.currentTarget.style.background = '#2563EB'
                      }
                    }}
                  >
                    {connectedPlatforms.has(platform.id) ? 'Connected' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Platforms by Category */}
        {Object.entries(groupedPlatforms).map(([category, platforms]) => (
          <div key={category} style={{ marginBottom: '40px' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#64748B',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {category} ({platforms.length})
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  style={{
                    padding: '14px 16px',
                    background: '#FFFFFF',
                    border: connectedPlatforms.has(platform.id)
                      ? '2px solid #2563EB'
                      : '1px solid #E5E7EB',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.borderColor = '#CBD5E1'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#0F172A',
                        margin: '0 0 2px 0',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {platform.name}
                    </p>
                    <p
                      style={{
                        fontSize: '12px',
                        color: '#94A3B8',
                        margin: 0,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {platform.description}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      connectedPlatforms.has(platform.id)
                        ? handleDisconnect(platform.id)
                        : handleConnect(platform.id)
                    }
                    style={{
                      background: connectedPlatforms.has(platform.id) ? '#EFF6FF' : '#F1F5F9',
                      color: connectedPlatforms.has(platform.id) ? '#0369A1' : '#64748B',
                      border: connectedPlatforms.has(platform.id)
                        ? '1px solid #BFDBFE'
                        : '1px solid #E5E7EB',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap',
                      marginLeft: '8px',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (connectedPlatforms.has(platform.id)) {
                        e.currentTarget.style.background = '#DBEAFE'
                      } else {
                        e.currentTarget.style.background = '#E2E8F0'
                        e.currentTarget.style.borderColor = '#CBD5E1'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (connectedPlatforms.has(platform.id)) {
                        e.currentTarget.style.background = '#EFF6FF'
                      } else {
                        e.currentTarget.style.background = '#F1F5F9'
                        e.currentTarget.style.borderColor = '#E5E7EB'
                      }
                    }}
                  >
                    {connectedPlatforms.has(platform.id) ? '✓' : 'Add'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* No results */}
        {filteredPlatforms.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p
              style={{
                fontSize: '15px',
                color: '#64748B',
                margin: 0,
              }}
            >
              No platforms found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{ marginTop: '56px', paddingTop: '24px', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleSkip}
              style={{
                flex: 1,
                background: '#F8FAFC',
                color: '#64748B',
                border: '1px solid #E5E7EB',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F1F5F9'
                e.currentTarget.style.borderColor = '#CBD5E1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F8FAFC'
                e.currentTarget.style.borderColor = '#E5E7EB'
              }}
            >
              Skip for now
            </button>
            <button
              onClick={handleContinue}
              disabled={connectedPlatforms.size === 0 || loading}
              style={{
                flex: 1,
                background: connectedPlatforms.size === 0 ? '#E5E7EB' : '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: connectedPlatforms.size === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: loading ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (connectedPlatforms.size > 0) {
                  e.currentTarget.style.background = '#1E40AF'
                }
              }}
              onMouseLeave={(e) => {
                if (connectedPlatforms.size > 0) {
                  e.currentTarget.style.background = '#2563EB'
                }
              }}
            >
              {loading ? 'Setting up...' : `Continue (${connectedPlatforms.size} selected)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
