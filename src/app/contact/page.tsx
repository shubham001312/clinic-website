"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <>
      {/* Contact Header */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] py-10 md:py-16 text-center">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-3 md:mb-4">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-gray max-w-[800px] mx-auto">
            We&apos;re here to help you with any questions or concerns
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <AnimatedSection>
      <section className="py-10 md:py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-5 sm:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Send Us a Message
              </h2>
              <p className="text-gray text-center mb-8">
                Have a question? Fill out the form below and we&apos;ll get back to
                you shortly.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-dark">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray mb-6">
                    Thank you for contacting Dr Krishnanjan Chakraborty Clinic.
                    We&apos;ll respond to your inquiry as soon as possible.
                  </p>
                  <a href="/" className="btn btn-outline">
                    Return to Home
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="form-error">{errors.name}</div>
                      )}
                    </div>
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
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter subject (optional)"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message here"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <div className="form-error">{errors.message}</div>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-full sm:w-auto sm:btn-lg"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    <p className="form-submit-text">* Required fields</p>
                  </div>
                </form>
              )}
            </div>              {/* Contact Info */}
            <div className="bg-white p-5 sm:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-dark">
                Clinic Information
              </h2>

              <div className="info-item">
                <MapPin size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3>Our Location</h3>
                  <p>
                    507, Kalyan Nagar, Rahara, Barrackpore, Khardaha, West
                    Bengal 700112
                  </p>
                  <p>Dr Krishnanjan Chakraborty Clinic</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3>Phone Numbers</h3>
                  <p>Main Office: 098307 03777</p>
                  <p>Emergency/WhatsApp: +91 98307 03777</p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3>Email Address</h3>
                  <p>info@drkrishnanjanchakraborty.in</p>
                  <p>
                    For appointments: appointments@drkrishnanjanchakraborty.in
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
                  <p>Emergency services available 24/7 via WhatsApp</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-dark">
                  Find Us on Map
                </h3>
                <div className="rounded-xl overflow-hidden shadow-md relative w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4021829070413!2d88.37022643196889!3d22.717758710860584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89bf1ca4d32ff%3A0xcca2f77f99798d0d!2s507%2C%20Kalyan%20Nagar%2C%20Rahara%2C%20Barrackpore%2C%20Khardaha%2C%20West%20Bengal%20700112!5e0!3m2!1sen!2sin!4v1692876543210"
                    width="100%"
                    height="200"
                    className="md:h-[250px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Newsletter Section - hidden on mobile */}
      <section className="hidden md:block bg-light py-16 text-center">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-gray mb-8 max-w-[600px] mx-auto">
            Subscribe to our newsletter for the latest health insights and
            clinic updates
          </p>
          <form
            className="flex justify-center max-w-[500px] mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-l-full border-none outline-none text-dark"
              required
            />
            <button
              type="submit"
              className="btn btn-primary rounded-l-none rounded-r-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
