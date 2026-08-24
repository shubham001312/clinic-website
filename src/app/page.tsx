"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  User,
  Award,
  Clock,
  Medal,
  Droplet,
  Heart,
  Activity,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: User, number: "1000+", label: "Happy Patients" },
  { icon: Award, number: "5+", label: "Awards & Honors" },
  { icon: Clock, number: "20+", label: "Years of Experience" },
  { icon: Medal, number: "+5", label: "Certifications" },
];

const services = [
  {
    icon: User,
    title: "Geriatric Care & Elderly Health Management",
    description:
      "Specialized care for age-related conditions including dementia, Alzheimer's, Parkinsonism, and arthritis.",
  },
  {
    icon: Droplet,
    title: "Diabetes Management & Treatment",
    description:
      "Comprehensive diabetes care including Type 1, Type 2, gestational diabetes, and complications management.",
  },
  {
    icon: Heart,
    title: "Endocrinology & Thyroid Disorders",
    description:
      "Expert diagnosis and treatment of hormonal imbalances, thyroid disorders, and metabolic syndromes.",
  },
  {
    icon: Activity,
    title: "Hypertension & Cardiovascular Care",
    description:
      "Blood pressure management, stroke prevention, and post-stroke rehabilitation services.",
  },
];

const testimonials = [
  {
    quote:
      "Dr. Chakraborty's diagnosis was spot-on when others missed it. His caring approach made my father's treatment comfortable.",
    author: "Mr. Rajesh Kumar",
    role: "Son of Patient",
  },
  {
    quote:
      "After years of struggling with diabetes, Dr. Chakraborty's specialized UK-trained approach finally got my levels under control.",
    author: "Mrs. Sunita Devi",
    role: "Patient",
  },
  {
    quote:
      "His expertise in geriatric care is exceptional. He treated my mother's arthritis with such patience and skill.",
    author: "Dr. Anjali Sharma",
    role: "Fellow Physician",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] py-16 md:py-24 overflow-hidden">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <AnimatedSection animation="slide-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
                Dr. Krishnanjan Chakraborty
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={100}>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary mb-4 md:mb-6">
                General Medicine, Geriatric Care, Endocrinology & Diabetes
                Specialist
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <p className="text-base md:text-lg text-gray mb-6 md:mb-8 leading-relaxed">
                Comprehensive Healthcare & Specialised Elderly Care by Dr.
                Krishnanjan Chakraborty with 20+ years of clinical expertise.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={300}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/appointment" className="btn btn-primary btn-lg">
                  Book Appointment
                </Link>
                <Link href="/services" className="btn btn-outline btn-lg">
                  Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="flex-1 text-center">
            <AnimatedSection animation="scale-in" delay={200}>
              <Image
                src="/images/doctor-hero.jpg"
                alt="Dr. Krishnanjan Chakraborty"
                width={400}
                height={500}
                className="rounded-xl shadow-lg animate-float max-w-full mx-auto object-cover"
                priority
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-16 md:py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center p-4 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h3 className="text-2xl md:text-4xl font-bold text-dark mb-1 md:mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm md:text-base text-gray font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="section-title">Our Specialized Services</h2>
            <p className="section-subtitle">
              Comprehensive medical care tailored to your needs
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 100}>
                  <div className="bg-white rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 md:mb-6">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-dark">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn btn-secondary">
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-light">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="section-title">What Our Patients Say</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="relative max-w-[800px] mx-auto mt-12 mb-8">
              <div
                className={`p-6 md:p-8 bg-white rounded-xl shadow-sm text-center transition-all duration-300 ${
                  isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <span className="text-5xl text-primary/30 font-serif leading-none block mb-2">
                  &ldquo;
                </span>
                <p className="italic text-base md:text-xl text-dark leading-relaxed mb-4 md:mb-6 px-4 md:px-8">
                  {testimonials[currentSlide].quote}
                </p>
                <span className="text-5xl text-primary/30 font-serif leading-none block mb-4">
                  &rdquo;
                </span>
                <h4 className="text-lg md:text-xl font-semibold text-dark mb-1">
                  {testimonials[currentSlide].author}
                </h4>
                <p className="text-gray text-sm md:text-base">
                  {testimonials[currentSlide].role}
                </p>
              </div>
            </div>
          </AnimatedSection>
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125 shadow-md"
                    : "bg-gray/40 hover:bg-gray"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <AnimatedSection animation="fade-in">
        <section className="bg-gradient-to-r from-primary to-accent text-white text-center py-10 md:py-12 my-4 md:my-8">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Ready to Take Control of Your Health?
            </h3>
            <Link
              href="/appointment"
              className="inline-block border-2 border-white bg-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-lg"
            >
              Book Your Appointment Today
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
