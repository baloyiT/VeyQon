import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getResend } from '@/lib/resend'

const schema = z.object({
  name: z.string().min(2, 'Full name is required'),
  company: z.string().min(2, 'Company name is required'),
  fleetSize: z.string().min(1, 'Fleet size is required'),
  email: z.string().email('A valid email is required'),
})

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
  }

  const { name, company, fleetSize, email } = parsed.data

  try {
    const resend = getResend()
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `Charter Application: ${company} — ${name}`,
      html: `
        <h2>New Charter Member Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Fleet Size:</strong> ${fleetSize}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send application. Please try again.' }, { status: 500 })
  }
}
