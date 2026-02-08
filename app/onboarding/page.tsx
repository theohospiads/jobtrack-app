'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'

type ProfileType = 'student' | 'employed' | 'job-seeker' | 'career-change' | null

type Question = {
  id: string
  question: string
  subtitle: string
  type: 'choice' | 'input'
  options?: { label: string; value: string; hint?: string }[]
  placeholder?: string
  recommended?: string
}

const PROFILE_QUESTIONS: Question[] = [
  {
    id: 'profile_type',
    question: 'What describes you best?',
    subtitle: 'We will customize your job search experience',
    type: 'choice',
    options: [
      { label: 'Student', value: 'student', hint: 'Studying, looking for internship or entry-level' },
      { label: 'Employed', value: 'employed', hint: 'Currently working, open to new opportunities' },
      { label: 'Looking for a job', value: 'job-seeker', hint: 'Not currently working, actively searching' },
      { label: 'Career change', value: 'career-change', hint: 'Transitioning to a new field or role' },
    ],
  },
]

const ADAPTIVE_QUESTIONS: Record<ProfileType, Question[]> = {
  student: [
    {
      id: 'field_of_study',
      question: 'What is your field of study?',
      subtitle: 'Help us find the best opportunities for you',
      type: 'input',
      placeholder: 'e.g. Computer Science, Business, Design...',
    },
    {
      id: 'graduation',
      question: 'When do you graduate?',
      subtitle: 'We will prioritize opportunities that fit your timeline',
      type: 'choice',
      options: [
        { label: 'This year', value: 'this-year' },
        { label: 'Next year', value: 'next-year' },
        { label: 'More than 1 year away', value: 'later' },
      ],
      recommended: 'this-year',
    },
    {
      id: 'target_role',
      question: 'What type of role interests you?',
      subtitle: 'Internship, entry-level, or both?',
      type: 'choice',
      options: [
        { label: 'Internship (temporary)', value: 'internship' },
        { label: 'Entry-level full-time', value: 'entry-level' },
        { label: 'Both options', value: 'both' },
      ],
      recommended: 'both',
    },
    {
      id: 'work_location',
      question: 'Where would you like to work?',
      subtitle: 'Remote, on-site, or flexible?',
      type: 'choice',
      options: [
        { label: 'Remote only', value: 'remote' },
        { label: 'On-site', value: 'on-site' },
        { label: 'Hybrid or flexible', value: 'hybrid' },
      ],
      recommended: 'remote',
    },
  ],
  employed: [
    {
      id: 'current_role',
      question: "What's your current role?",
      subtitle: 'Help us understand your background',
      type: 'input',
      placeholder: 'e.g. Senior Product Manager, Data Scientist...',
    },
    {
      id: 'experience',
      question: 'Years of experience in your field?',
      subtitle: 'This helps us match senior-level opportunities',
      type: 'choice',
      options: [
        { label: '0-2 years', value: '0-2' },
        { label: '2-5 years', value: '2-5' },
        { label: '5-10 years', value: '5-10' },
        { label: '10+ years', value: '10+' },
      ],
    },
    {
      id: 'looking_for',
      question: 'What are you looking for?',
      subtitle: 'Similar role, growth, or change?',
      type: 'choice',
      options: [
        { label: 'Similar role at better company', value: 'similar' },
        { label: 'Growth/promotion opportunity', value: 'growth' },
        { label: 'Career change or pivot', value: 'change' },
      ],
      recommended: 'growth',
    },
    {
      id: 'work_location',
      question: 'Work location preference?',
      subtitle: 'Remote, on-site, or flexible?',
      type: 'choice',
      options: [
        { label: 'Remote only', value: 'remote' },
        { label: 'On-site', value: 'on-site' },
        { label: 'Flexible (no preference)', value: 'flexible' },
      ],
      recommended: 'remote',
    },
    {
      id: 'salary_expectations',
      question: 'Salary expectations?',
      subtitle: 'Helps us prioritize opportunities within your range',
      type: 'choice',
      options: [
        { label: '$80k - $120k', value: '80-120' },
        { label: '$120k - $180k', value: '120-180' },
        { label: '$180k - $250k', value: '180-250' },
        { label: '$250k+', value: '250+' },
      ],
    },
  ],
  'job-seeker': [
    {
      id: 'target_role',
      question: 'What role are you targeting?',
      subtitle: 'Your primary job search focus',
      type: 'input',
      placeholder: 'e.g. Product Manager, Data Analyst...',
    },
    {
      id: 'years_experience',
      question: 'Years of experience?',
      subtitle: 'Total professional experience',
      type: 'choice',
      options: [
        { label: '0-2 years', value: '0-2' },
        { label: '2-5 years', value: '2-5' },
        { label: '5-10 years', value: '5-10' },
        { label: '10+ years', value: '10+' },
      ],
    },
    {
      id: 'urgency',
      question: 'How urgently do you need a job?',
      subtitle: 'This helps prioritize your recommendations',
      type: 'choice',
      options: [
        { label: 'Immediately (within 1 month)', value: 'urgent' },
        { label: 'Soon (1-3 months)', value: 'soon' },
        { label: 'Not urgent (3+ months)', value: 'flexible' },
      ],
      recommended: 'soon',
    },
    {
      id: 'work_location',
      question: 'Where do you want to work?',
      subtitle: 'Remote, on-site, or flexible?',
      type: 'choice',
      options: [
        { label: 'Remote only', value: 'remote' },
        { label: 'On-site', value: 'on-site' },
        { label: 'Flexible (no preference)', value: 'flexible' },
      ],
      recommended: 'remote',
    },
  ],
  'career-change': [
    {
      id: 'previous_role',
      question: 'What was your previous role?',
      subtitle: 'Help us highlight transferable skills',
      type: 'input',
      placeholder: 'e.g. Marketing Manager, Software Engineer...',
    },
    {
      id: 'target_role',
      question: "What's your new target role?",
      subtitle: 'What field are you pivoting to?',
      type: 'input',
      placeholder: 'e.g. Product Manager, Data Science...',
    },
    {
      id: 'relevant_experience',
      question: 'Do you have experience in the new field?',
      subtitle: 'Internship, projects, or transition years?',
      type: 'choice',
      options: [
        { label: 'No experience yet', value: 'none' },
        { label: 'Some related experience', value: 'some' },
        { label: 'Yes, significant experience', value: 'significant' },
      ],
    },
    {
      id: 'work_location',
      question: 'Work location preference?',
      subtitle: 'Remote, on-site, or flexible?',
      type: 'choice',
      options: [
        { label: 'Remote only', value: 'remote' },
        { label: 'On-site', value: 'on-site' },
        { label: 'Flexible (no preference)', value: 'flexible' },
      ],
      recommended: 'remote',
    },
  ],
  null: [],
}

export default function OnboardingPage() {
  const router = useRouter()
  const { updateProfile } = useAuth()
  const [profileType, setProfileType] = useState<ProfileType>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get questions for current profile type
  const adaptiveQuestions = profileType ? ADAPTIVE_QUESTIONS[profileType] : []
  const allQuestions = profileType === null ? PROFILE_QUESTIONS : adaptiveQuestions
  const question = allQuestions[currentStep]

  // Calculate total steps: 1 for profile type + adaptive questions
  const totalSteps = 1 + (profileType ? adaptiveQuestions.length : 0)
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleChoice = (value: string) => {
    if (question.id === 'profile_type') {
      setProfileType(value as ProfileType)
      setAnswers({ ...answers, [question.id]: value })
      setCurrentStep(0) // Reset to first adaptive question
    } else {
      setAnswers({ ...answers, [question.id]: value })
      handleNext()
    }
  }

  const handleInputChange = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
  }

  const handleNext = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleComplete = async () => {
    setIsSubmitting(true)
    updateProfile(answers)
    setTimeout(() => {
      router.push('/dashboard')
    }, 300)
  }

  const canProceed = question.type === 'choice' || answers[question.id]?.trim().length > 0

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F8FAFC',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        {/* Progress Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '100%',
              height: '3px',
              background: '#E5E7EB',
              borderRadius: '100px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: '#2563EB',
                transition: 'width 300ms ease',
              }}
            />
          </div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#64748B',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Step {currentStep + 1} of {totalSteps}
          </p>
        </div>

        {/* Question */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#0F172A',
              margin: 0,
              lineHeight: '1.2',
            }}
          >
            {question.question}
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#64748B',
              margin: 0,
              lineHeight: '1.6',
            }}
          >
            {question.subtitle}
          </p>
        </div>

        {/* Input / Choices */}
        {question.type === 'input' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="text"
              value={answers[question.id] || ''}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={question.placeholder}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && canProceed) {
                  handleNext()
                }
              }}
              autoFocus
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '2px solid #E5E7EB',
                background: '#FFFFFF',
                fontSize: '15px',
                color: '#0F172A',
                fontFamily: 'inherit',
                transition: 'all 200ms ease',
                outline: 'none',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#2563EB')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            />
            <button
              onClick={handleNext}
              disabled={!canProceed || isSubmitting}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                background: canProceed ? '#2563EB' : '#E5E7EB',
                color: canProceed ? 'white' : '#94A3B8',
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                cursor: canProceed && !isSubmitting ? 'pointer' : 'not-allowed',
                transition: 'all 200ms ease',
                letterSpacing: '-0.2px',
              }}
              onMouseEnter={(e) => {
                if (canProceed && !isSubmitting) {
                  e.currentTarget.style.background = '#1E40AF'
                }
              }}
              onMouseLeave={(e) => {
                if (canProceed && !isSubmitting) {
                  e.currentTarget.style.background = '#2563EB'
                }
              }}
            >
              {currentStep === allQuestions.length - 1
                ? isSubmitting
                  ? 'Setting up...'
                  : 'Complete Setup'
                : 'Continue'}
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {question.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleChoice(option.value)}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  border: '2px solid #E5E7EB',
                  background: answers[question.id] === option.value ? '#EFF6FF' : '#FFFFFF',
                  color: answers[question.id] === option.value ? '#0369A1' : '#0F172A',
                  fontSize: '15px',
                  fontWeight: answers[question.id] === option.value ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  textAlign: 'left',
                  borderColor: answers[question.id] === option.value ? '#2563EB' : '#E5E7EB',
                  letterSpacing: '-0.2px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563EB'
                  if (answers[question.id] !== option.value) {
                    e.currentTarget.style.background = '#F8FAFC'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    answers[question.id] === option.value ? '#2563EB' : '#E5E7EB'
                  if (answers[question.id] !== option.value) {
                    e.currentTarget.style.background = '#FFFFFF'
                  }
                }}
              >
                <span>{option.label}</span>
                {option.hint && (
                  <span
                    style={{
                      fontSize: '12px',
                      color: answers[question.id] === option.value ? '#0369A1' : '#94A3B8',
                      fontWeight: '400',
                    }}
                  >
                    {option.hint}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Skip indicator */}
        <p
          style={{
            fontSize: '12px',
            color: '#94A3B8',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Takes just 90 seconds · No payment required
        </p>
      </div>
    </div>
  )
}
