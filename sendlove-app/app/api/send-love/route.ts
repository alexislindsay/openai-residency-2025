import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, amount, message, bookingRequest, mode } = body

    // Log the submission
    console.log('💕 Love submission received:', {
      name,
      email,
      amount,
      message,
      bookingRequest,
      mode,
      timestamp: new Date().toISOString()
    })

    // TODO: Wire this to your email service
    // For now, we'll use a simple fetch to Formspree (free, no signup needed initially)
    // You can replace this with any email service you prefer

    // Option 1: Use Formspree (recommended - simple and free)
    // Sign up at https://formspree.io and replace YOUR_FORM_ID
    // const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     amount,
    //     message,
    //     bookingRequest: bookingRequest ? 'Yes' : 'No',
    //     mode,
    //     _replyto: email,
    //     _subject: bookingRequest ? '📅 Booking Request via Send Love' : '💕 Love Payment Notification'
    //   })
    // })

    // Option 2: Use Resend (requires API key - get free 3k emails/month)
    // npm install resend
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Send Love <onboarding@resend.dev>',
    //   to: 'lexxielyn@gmail.com',
    //   replyTo: email,
    //   subject: bookingRequest ? '📅 Booking Request via Send Love' : '💕 Love Payment Notification',
    //   html: `
    //     <h2>New ${bookingRequest ? 'Booking Request' : 'Love Payment'}</h2>
    //     <p><strong>From:</strong> ${name} (${email})</p>
    //     ${amount ? `<p><strong>Amount:</strong> $${amount}</p>` : ''}
    //     ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
    //     <p><strong>Type:</strong> ${bookingRequest ? 'Booking Request' : 'Payment Only'}</p>
    //   `
    // })

    // For now, just return success
    // The form data is logged to console
    return NextResponse.json({
      success: true,
      message: 'Love received! Check your email soon.'
    })

  } catch (error) {
    console.error('Error processing love submission:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send love' },
      { status: 500 }
    )
  }
}
