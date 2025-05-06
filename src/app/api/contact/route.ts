import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Validate environment variables
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

if (!process.env.NOTIFICATION_EMAIL) {
  throw new Error('NOTIFICATION_EMAIL is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const notificationEmail = process.env.NOTIFICATION_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: notificationEmail,
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send auto-reply to the client
    await resend.emails.send({
      from: 'Your Practice Name <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>Your Practice Name</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 