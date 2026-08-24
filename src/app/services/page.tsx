"use client";

import Link from "next/link";
import {
  User,
  Droplet,
  Heart,
  Activity,
  Stethoscope,
  Brain,
  Shield,
  Wrench,
  Check,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: User,
    title: "Geriatric Care & Elderly Health Management",
    description:
      "Specialized comprehensive care for patients aged 60+, focusing on age-related conditions including dementia, Alzheimer's disease, Parkinsonism, arthritis, osteoporosis, and frailty syndrome.",
    features: [
      "Memory Disorder Evaluation (Dementia, Alzheimer's)",
      "Parkinsonism & Movement Disorders",
      "Arthritis & Joint Pain Management",
      "Osteoporosis Screening & Treatment",
      "Fall Risk Assessment & Prevention",
      "Caregiver Counseling & Support",
    ],
  },
  {
    icon: Droplet,
    title: "Diabetes Management & Treatment",
    description:
      "Expert management of all types of diabetes including Type 1, Type 2, gestational diabetes, and pre-diabetes using evidence-based protocols from UK-trained expertise.",
    features: [
      "Blood Glucose Monitoring & HbA1c Management",
      "Insulin Therapy & Pump Management",
      "Diabetes Complication Screening",
      "Nutritional Counseling & Meal Planning",
      "Lifestyle Modification Programs",
      "Gestational Diabetes Management",
    ],
  },
  {
    icon: Heart,
    title: "Endocrinology & Hormonal Disorders",
    description:
      "Specialized diagnosis and treatment of hormonal imbalances including thyroid disorders, adrenal disorders, pituitary disorders, and metabolic syndromes.",
    features: [
      "Thyroid Function Testing & Management",
      "Thyroid Nodule Evaluation & Treatment",
      "Hyperthyroidism & Hypothyroidism Care",
      "Adrenal Disorders (Cushing's, Addison's)",
      "Parathyroid Disorders & Calcium Management",
      "PCOS & Hormonal Imbalance Treatment",
      "Growth Hormone Disorders",
    ],
  },
  {
    icon: Activity,
    title: "Hypertension & Cardiovascular Care",
    description:
      "Comprehensive blood pressure management, stroke prevention, and post-stroke rehabilitation services with detailed cardiovascular risk assessment.",
    features: [
      "Blood Pressure Monitoring & Management",
      "Stroke Risk Assessment & Prevention",
      "Post-Stroke Rehabilitation & Recovery",
      "Cholesterol Management & Lipid Profile",
      "Heart Failure Management",
      "Peripheral Artery Disease Screening",
      "Lifestyle Modification for Heart Health",
    ],
  },
  {
    icon: Stethoscope,
    title: "General Medicine & Routine Health Check-ups",
    description:
      "Complete primary care services for adults of all ages including preventive health screenings, acute illness management, and chronic disease monitoring.",
    features: [
      "Annual Physical Examinations",
      "Preventive Health Screenings",
      "Acute Illness Treatment (Fever, Infections)",
      "Chronic Disease Monitoring (Asthma, COPD)",
      "Vaccinations & Immunizations",
      "Health Education & Lifestyle Counseling",
      "Minor Surgical Procedures",
    ],
  },
  {
    icon: Brain,
    title: "Stroke Recovery & Rehabilitation",
    description:
      "Specialized post-stroke care focusing on neurological recovery, physical rehabilitation, speech therapy, and prevention of recurrent strokes.",
    features: [
      "Neurological Assessment & Monitoring",
      "Physical Therapy & Mobility Training",
      "Speech & Swallowing Therapy",
      "Cognitive Rehabilitation",
      "Medication Management for Stroke Prevention",
      "Caregiver Training & Support",
    ],
  },
];

const whyChoose = [
  {
    icon: Shield,
    title: "Patient-Centered Care",
    description:
      "We prioritize your comfort, concerns, and preferences in every aspect of your treatment journey, ensuring you feel heard and respected throughout your healthcare experience.",
  },
  {
    icon: User,
    title: "Expert Medical Team",
    description:
      "Led by Dr. Krishnanjan Chakraborty with 20+ years of specialized experience, UK diplomas in Diabetes & Endocrinology, PG Diploma in Geriatric Medicine, and FGSI fellowship.",
  },
  {
    icon: Wrench,
    title: "Advanced Technology",
    description:
      "State-of-the-art diagnostic and treatment equipment ensures accurate diagnosis and effective treatment plans, including modern lab facilities and diagnostic tools.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Services Header */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] py-12 md:py-16 text-center">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
              Our Medical Services
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-base md:text-lg text-gray max-w-[800px] mx-auto">
              Comprehensive healthcare solutions tailored to your individual
              needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="section-title">Specialized Care Areas</h2>
            <p className="section-subtitle">
              Expertise in geriatric care, diabetes, endocrinology, and general
              medicine
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 100}>
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-primary/10 rounded-full mb-4 md:mb-6">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-dark">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs md:text-sm text-gray"
                        >
                          <Check
                            size={14}
                            className="text-primary mt-0.5 flex-shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/appointment"
                      className="btn btn-outline text-sm w-full md:w-auto"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-light">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="section-title text-2xl md:text-3xl">
              Why Patients Trust Dr. Krishnanjan Chakraborty
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 150}>
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300 h-full">
                    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-dark">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="fade-in">
        <section className="bg-gradient-to-r from-primary to-accent text-white text-center py-12 md:py-16">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Superior Healthcare?
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-[600px] mx-auto">
              Take the first step towards better health with personalized medical
              care from Dr. Krishnanjan Chakraborty.
            </p>
            <Link href="/appointment" className="btn btn-primary btn-lg">
              Book Your Appointment
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
