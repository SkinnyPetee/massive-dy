import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Define the expected shape of the request body
interface FormData {
  subject: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { subject, name, email, phone, location, message }: FormData =
      await req.json();

    // Validate input
    if (!subject || !name || !email || !phone || !location || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Gmail requires 'from' to match authenticated user
      replyTo: email, // Allows replying to the user's email
      to: process.env.GMAIL_SS, // Send to yourself
      subject: `${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Message: ${message}
      `,
      html: `
        
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

// Handle non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
