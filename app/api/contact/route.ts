import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Configure transport
    // Using Gmail as the default assumption for the provided email.
    // Make sure 'EMAIL_USER' and 'EMAIL_PASS' exist in your .env.local file.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Note: Use an "App Password" if 2FA is enabled.
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (authenticated user)
      to: 'solomonprincebright@gmail.com', // Receiver
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #030303; color: #ffffff; padding: 20px; border-radius: 8px;">
          <h2 style="color: #ffffff; border-bottom: 1px solid #333; padding-bottom: 10px;">New Message from Portfolio</h2>
          <p style="color: #cccccc;"><strong>Name:</strong> ${name}</p>
          <p style="color: #cccccc;"><strong>Email:</strong> ${email}</p>
          <p style="color: #cccccc;"><strong>Subject:</strong> ${subject}</p>
          <h3 style="color: #ffffff; margin-top: 20px;">Message:</h3>
          <p style="color: #cccccc; background: #111; padding: 15px; border-radius: 4px; border: 1px solid #333;">
            ${message.replace(/\n/g, '<br/>')}
          </p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">This email was generated from your portfolio contact form.</p>
        </div>
      `,
      replyTo: email, // So you can reply directly to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
