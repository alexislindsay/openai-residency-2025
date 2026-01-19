import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // You'll need to verify your domain later
      to: ["lexxielyn@gmail.com"],
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .info-row {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #e5e7eb;
              }
              .info-row:last-child {
                border-bottom: none;
                padding-bottom: 0;
              }
              .label {
                font-weight: 600;
                color: #8b5cf6;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #333;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                margin-top: 10px;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>💌 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>

              <div class="info-row">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>

              <div class="info-row">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>

              <div class="footer">
                <p>Sent from Glyph Gate Contact Form</p>
                <p style="font-size: 12px; color: #9ca3af;">
                  Reply directly to this email to respond to ${name}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    // Log the submission for your records (optional - you could save to a database here)
    console.log("Contact form submission:", {
      name,
      email,
      timestamp: new Date().toISOString(),
      resendId: data.id,
    })

    return NextResponse.json(
      {
        message: "Message sent successfully!",
        id: data.id,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Contact form error:", error)

    // Handle specific Resend errors
    if (error.message?.includes("API key")) {
      return NextResponse.json(
        { message: "Email service is not configured properly" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
