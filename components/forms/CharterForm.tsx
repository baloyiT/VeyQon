'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Full name is required'),
  company: z.string().min(2, 'Company name is required'),
  fleetSize: z.string().min(1, 'Please select a fleet size'),
  email: z.string().email('A valid email address is required'),
})

type FormData = z.infer<typeof schema>

const fleetOptions = [
  { value: '1-5', label: '1–5 containers' },
  { value: '6-15', label: '6–15 containers' },
  { value: '16-30', label: '16–30 containers' },
  { value: '30+', label: '30+ containers' },
]

export function CharterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setStatus('submitting')
    setServerError('')
    try {
      const res = await fetch('/api/charter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        setServerError(json.error ?? 'Something went wrong.')
        setStatus('error')
        return
      }
      setStatus('success')
      reset()
    } catch {
      setServerError('Unable to submit. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card bg-base-200 border border-primary/30 p-8 text-center space-y-3">
        <p className="text-primary font-bold text-lg">Application Received</p>
        <p className="text-neutral text-sm leading-relaxed">
          Thank you for applying. Our team will be in touch to begin your Charter Member onboarding.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
            Full Name
          </label>
          <input
            {...register('name')}
            placeholder="Your full name"
            className="input input-bordered w-full bg-base-100 border-base-300 text-sm"
          />
          {errors.name && (
            <p className="text-error text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
            Company Name
          </label>
          <input
            {...register('company')}
            placeholder="Your company"
            className="input input-bordered w-full bg-base-100 border-base-300 text-sm"
          />
          {errors.company && (
            <p className="text-error text-xs">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
            Fleet Size
          </label>
          <select
            {...register('fleetSize')}
            className="select select-bordered w-full bg-base-100 border-base-300 text-sm"
            defaultValue=""
          >
            <option value="" disabled>Select fleet size</option>
            {fleetOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.fleetSize && (
            <p className="text-error text-xs">{errors.fleetSize.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@company.com"
            className="input input-bordered w-full bg-base-100 border-base-300 text-sm"
          />
          {errors.email && (
            <p className="text-error text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <p className="text-error text-sm">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Submitting…' : 'Apply for Charter Membership'}
      </button>
    </form>
  )
}
