"use client";

import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Hospital, Award, Building } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  {
    icon: GraduationCap,
    title: "Medical Education",
    subtitle: "MBBS - Prestigious Medical Institution",
    description:
      "Laid the foundation for excellence in medical practice with comprehensive training and clinical exposure.",
    date: "2000-2005",
  },
  {
    icon: Hospital,
    title: "Specialized Training",
    subtitle:
      "Post Graduate Diploma in Geriatric Medicine, PG Diploma in Endocrinology (UK), PG Diploma in Diabetes Management (UK)",
    description:
      "Advanced specialized training from UK institutions that honed expertise in managing complex age-related and metabolic conditions.",
    date: "2008-2012",
  },
  {
    icon: Award,
    title: "Professional Recognition",
    subtitle: "Awarded FGSI (Fellow of the Geriatric Society of India)",
    description:
      "Recognized by medical associations for dedication to advancing healthcare standards in geriatrics and diabetes management.",
    date: "2015-Present",
  },
  {
    icon: Building,
    title: "Established Dr Krishnanjan Chakraborty Clinic",
    subtitle: "Founded Clinic",
    description:
      "Founded with a vision to provide accessible, high-quality healthcare focusing on geriatric care, diabetes, and endocrinology to the local community.",
    date: "2018-Present",
  },
];

const gallery = [
  {
    src: "/images/gallery-reception.jpg",
    title: "Reception & Waiting Area",
    description: "Welcoming space designed for patient comfort and privacy",
  },
  {
    src: "/images/gallery-exam.jpg",
    title: "Examination Rooms",
    description: "Equipped with latest diagnostic tools for accurate assessments",
  },
  {
    src: "/images/gallery-lab.jpg",
    title: "Diagnostic Laboratory",
    description: "In-house lab for quick and accurate test results",
  },
  {
    src: "/images/gallery-consult.jpg",
    title: "Consultation Rooms",
    description: "Private spaces for detailed patient-doctor interactions",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* About Header */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] py-12 md:py-16 text-center">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
              About Dr. Krishnanjan Chakraborty
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-base md:text-lg text-gray max-w-[800px] mx-auto">
              Dr. Krishnanjan Chakraborty provides comprehensive healthcare with
              20+ years experience in geriatric medicine, diabetes management,
              endocrinology, and general adult care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <AnimatedSection animation="slide-left" className="flex-1">
              <Image
                src="/images/doctor-about.jpg"
                alt="Dr. Krishnanjan Chakraborty"
                width={400}
                height={500}
                className="rounded-xl shadow-lg w-full max-w-[400px] mx-auto lg:mx-0 object-cover"
                priority
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-right" className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-gray leading-relaxed mb-4">
                Dr. Krishnanjan Chakraborty brings over 20 years of clinical
                expertise to provide comprehensive, compassionate care to
                patients of all ages. With specialized training from prestigious
                UK institutions in diabetes management and endocrinology,
                combined with a Post Graduate Diploma in Geriatric Medicine, he
                offers a unique blend of expertise particularly valuable for
                elderly patients and those with complex metabolic conditions.
              </p>
              <p className="text-gray leading-relaxed mb-6 md:mb-8">
                His patient-centric approach focuses on understanding each
                individual&apos;s unique health needs, lifestyle factors, and
                concerns to develop personalized treatment plans that address not
                just symptoms but root causes. Whether managing chronic
                conditions like diabetes and hypertension or providing preventive
                care for aging populations, Dr. Chakraborty combines
                evidence-based medicine with genuine compassion to achieve
                optimal health outcomes.
              </p>
              <Link href="/appointment" className="btn btn-primary">
                Schedule Consultation
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 bg-light">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="section-title">Professional Journey</h2>
          </AnimatedSection>
          <div className="relative max-w-[800px] mx-auto mt-12">
            {/* Timeline line - hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2" />
            {/* Timeline line - mobile */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-primary/20" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.title}
                  animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={index * 150}
                >
                  <div
                    className={`relative flex items-start gap-4 md:gap-8 mb-8 md:mb-12 pl-12 md:pl-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Icon */}
                    <div className="absolute left-0 md:relative z-10 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="text-white" size={18} />
                    </div>

                    {/* Content */}
                    <div
                      className={`bg-white p-4 md:p-6 rounded-xl shadow-sm flex-1 hover:shadow-md transition-shadow duration-300 ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-2 text-sm md:text-base">
                        {item.subtitle}
                      </p>
                      <p className="text-gray leading-relaxed mb-3 text-sm md:text-base">
                        {item.description}
                      </p>
                      <span className="inline-block bg-primary/10 text-primary px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-12 md:py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="section-title">Our Clinic Facilities</h2>
            <p className="section-subtitle">
              State-of-the-art equipment in a comfortable, healing environment
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {gallery.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="relative rounded-xl overflow-hidden shadow-sm group cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-base md:text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
