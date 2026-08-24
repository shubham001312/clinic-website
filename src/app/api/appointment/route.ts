import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
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

    // TODO: Add email sending via nodemailer when SMTP is configured
    // For now, accept the request and return success
    console.log("Appointment request received:", { fullName, phone, email, appointmentDate, appointmentTime, serviceType });

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
