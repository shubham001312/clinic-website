"use client";

import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Hospital,
  Headphones,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const timeSlots = [
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "15:30", label: "3:30 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "16:30", label: "4:30 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
];

const serviceTypes = [
  "Geriatric Care & Elderly Health Management",
  "Diabetes Management & Treatment",
  "Endocrinology & Hormonal Disorders",
  "Hypertension & Cardiovascular Care",
  "General Medicine & Routine Health Check-ups",
  "Stroke Recovery & Rehabilitation",
  "General Consultation",
  "Follow-up Visit",
  "Second Opinion",
  "Tele-consultation",
];

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    appointmentDate: "",
    appointmentTime: "",
    serviceType: "",
    symptoms: "",
    privacyCheckbox: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "This field is required";
    if (!formData.phone.trim()) newErrors.phone = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.appointmentDate)
      newErrors.appointmentDate = "This field is required";
    if (!formData.appointmentTime)
      newErrors.appointmentTime = "This field is required";
    if (!formData.serviceType) newErrors.serviceType = "This field is required";
    if (!formData.symptoms.trim()) newErrors.symptoms = "This field is required";
    if (!formData.privacyCheckbox)
      newErrors.privacyCheckbox = "Please agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {/* Appointment Header */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] py-16 text-center">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Schedule Your Consultation
          </h1>
          <p className="text-lg text-gray max-w-[800px] mx-auto">
            Book your appointment with Dr. Krishnanjan Chakraborty in just a few
            simple steps
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <AnimatedSection>
      <section className="py-20 bg-light">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">
                  Appointment Details
                </h2>
                <p className="text-gray max-w-[400px] mx-auto">
                  Please fill in the information below to schedule your visit
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-dark">
                    Appointment Scheduled Successfully!
                  </h3>
                  <p className="text-gray mb-6">
                    Thank you for choosing Dr Krishnanjan Chakraborty Clinic.
                    We&apos;ll contact you shortly to confirm your appointment.
                  </p>
                  <a href="/" className="btn btn-outline">
                    Return to Home
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-xl shadow-sm space-y-6"
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && (
                        <div className="form-error">{errors.fullName}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <div className="form-error">{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="form-error">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        min="0"
                        max="120"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="appointmentDate">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        min={today}
                        value={formData.appointmentDate}
                        onChange={handleChange}
                      />
                      {errors.appointmentDate && (
                        <div className="form-error">
                          {errors.appointmentDate}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="appointmentTime">
                        Preferred Time *
                      </label>
                      <select
                        id="appointmentTime"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                      >
                        <option value="">Select Time Slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                      {errors.appointmentTime && (
                        <div className="form-error">
                          {errors.appointmentTime}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="serviceType">Reason for Visit *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                      >
                        <option value="">Select Service Type</option>
                        {serviceTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <div className="form-error">{errors.serviceType}</div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="symptoms">
                      Symptoms or Concerns *
                    </label>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      placeholder="Please describe your symptoms or reason for visit"
                      rows={4}
                      value={formData.symptoms}
                      onChange={handleChange}
                    />
                    {errors.symptoms && (
                      <div className="form-error">{errors.symptoms}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacyCheckbox"
                        checked={formData.privacyCheckbox}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray">
                        I agree to the{" "}
                        <a href="#" className="text-primary underline">
                          Privacy Policy
                        </a>{" "}
                        and consent to store my information for appointment
                        scheduling.
                      </span>
                    </label>
                    {errors.privacyCheckbox && (
                      <div className="form-error">
                        {errors.privacyCheckbox}
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                    >
                      {loading ? "Scheduling..." : "Schedule Appointment"}
                    </button>
                    <p className="form-submit-text">* Required fields</p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="bg-white p-8 rounded-xl shadow-sm h-fit">
              <h2 className="text-2xl font-semibold mb-6 text-dark">
                Clinic Information
              </h2>

              <div className="info-item">
                <MapPin size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3>Visit Us</h3>
                  <p>
                    507, Kalyan Nagar, Rahara, Barrackpore, Khardaha, West
                    Bengal 700112
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3>Consulting Hours</h3>
                  <p>
                    Daily split timings: Morning up to 3:00 PM, Evening
                    reopening at 7:30 PM
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: 098307 03777
                    <br />
                    Email: info@drkrishnanjanchakraborty.in
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Hospital
                  size={24}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <h3>Affiliated Hospitals/Centres</h3>
                  <p>
                    Suraksha Diagnostics (Khardah, Sodepur, Salt Lake,
                    Phoolbagan)
                    <br />
                    Apollo Clinic (Sodepur)
                    <br />
                    Joint and Bone Care Hospital (JBCH)
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Headphones
                  size={24}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <h3>Tele-consultation Available</h3>
                  <p>
                    Video consultations available for follow-ups and minor
                    concerns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </>
  );
}
