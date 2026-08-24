import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      age,
      gender,
      appointmentDate,
      appointmentTime,
      serviceType,
      symptoms,
    } = body;

    // Validate required fields
    if (!fullName || !phone || !email || !appointmentDate || !appointmentTime || !serviceType || !symptoms) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format date for display
    const formattedDate = new Date(appointmentDate).toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Format time for display
    const [hours, minutes] = appointmentTime.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const formattedTime = `${displayHour}:${minutes} ${ampm}`;

    // Email to clinic
    const clinicMailOptions = {
      from: process.env.SMTP_USER || "noreply@drkrishnanjanchakraborty.in",
      to: process.env.CLINIC_EMAIL || "info@drkrishnanjanchakraborty.in",
      replyTo: email,
      subject: `New Appointment Request: ${fullName} - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a7c8c;">New Appointment Request</h2>
          <hr style="border: 1px solid #eee;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Patient Name:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            ${age ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Age:</td>
              <td style="padding: 8px 0;">${age}</td>
            </tr>
            ` : ""}
            ${gender ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Gender:</td>
              <td style="padding: 8px 0;">${gender.charAt(0).toUpperCase() + gender.slice(1)}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 8px 0;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 8px 0;">${formattedTime}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Type:</td>
              <td style="padding: 8px 0;">${serviceType}</td>
            </tr>
          </table>
          <div style="margin-top: 15px;">
            <p style="font-weight: bold;">Symptoms/Concerns:</p>
            <p style="background: #f8f9fa; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${symptoms}</p>
          </div>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #6c757d; font-size: 12px;">
            This appointment request was submitted through the Dr Krishnanjan Chakraborty Clinic website.
          </p>
        </div>
      `,
    };

    // Confirmation email to patient
    const patientMailOptions = {
      from: process.env.SMTP_USER || "noreply@drkrishnanjanchakraborty.in",
      to: email,
      subject: `Appointment Request Received - Dr Krishnanjan Chakraborty Clinic`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a7c8c;">Appointment Request Received</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for requesting an appointment with Dr Krishnanjan Chakraborty Clinic. We have received your request and will contact you shortly to confirm your appointment.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0a7c8c; margin-top: 0;">Your Appointment Details:</h3>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${formattedTime}</p>
            <p><strong>Service:</strong> ${serviceType}</p>
          </div>
          <p>If you need to make any changes to your appointment, please contact us at:</p>
          <p>📞 Phone: 098307 03777</p>
          <p>📧 Email: info@drkrishnanjanchakraborty.in</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #6c757d; font-size: 12px;">
            Dr Krishnanjan Chakraborty Clinic<br/>
            507, Kalyan Nagar, Rahara, Barrackpore, Khardaha, West Bengal 700112
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(clinicMailOptions),
      transporter.sendMail(patientMailOptions),
    ]);

    return NextResponse.json(
      { message: "Appointment request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment form error:", error);
    return NextResponse.json(
      { error: "Failed to submit appointment request. Please try again later." },
      { status: 500 }
    );
  }
}
