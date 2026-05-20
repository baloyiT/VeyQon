'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('idle')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    if (!res.ok) {
      setStatus('error')
      setErrorMessage(json.error ?? 'Something went wrong.')
      return
    }
    setStatus('success')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base-content">Full Name</span>
        </label>
        <input
          {...register('name')}
          className="input input-bordered w-full"
          placeholder="Your full name"
        />
        {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-base-content">Company</span>
        </label>
        <input
          {...register('company')}
          className="input input-bordered w-full"
          placeholder="Your company name"
        />
        {errors.company && <p className="text-error text-xs mt-1">{errors.company.message}</p>}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-base-content">Email</span>
        </label>
        <input
          {...register('email')}
          type="email"
          className="input input-bordered w-full"
          placeholder="you@company.com"
        />
        {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-base-content">Message</span>
        </label>
        <textarea
          {...register('message')}
          className="textarea textarea-bordered w-full min-h-32"
          placeholder="Tell us about your operational challenges..."
        />
        {errors.message && <p className="text-error text-xs mt-1">{errors.message.message}</p>}
      </div>

      {status === 'success' && (
        <div className="alert alert-success text-sm">
          Message sent successfully. We'll be in touch shortly.
        </div>
      )}

      {status === 'error' && (
        <div className="alert alert-error text-sm">{errorMessage}</div>
      )}

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        {isSubmitting ? (
          <span className="loading loading-spinner loading-sm" />
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
