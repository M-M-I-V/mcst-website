"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom"
import ContactSection from "../components/ContactSection"

const Programs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const navigate = useNavigate()

  const programs = [
    {
      title: "Bachelor of Arts in Communication",
      description:
        "Develop strong communication skills across various media platforms and prepare for careers in journalism, public relations, broadcasting, and digital media.",
      duration: "4 years",
      strand: "All Strands",
      link: "/programs/ba-communication",
    },
    {
      title: "Bachelor of Science in Information Systems",
      description:
        "Learn to design, implement, and manage information systems that support business operations and decision-making in the digital age.",
      duration: "4 years",
      strand: "STEM, TVL-ICT",
      link: "/programs/bs-information-systems",
    },
    {
      title: "Bachelor of Science in Mathematics",
      description:
        "Build a strong foundation in mathematical theory and applications, preparing for careers in education, research, data analysis, and various STEM fields.",
      duration: "4 years",
      strand: "STEM, ABM",
      link: "/programs/bs-mathematics",
    },
    {
      title: "Bachelor of Public Administration",
      description:
        "Prepare for leadership roles in government and public service, focusing on policy analysis, public management, and civic engagement.",
      duration: "4 years",
      strand: "All Strands",
      link: "/programs/b-public-administration",
      isNew: true,
    },
    {
      title: "Bachelor of Physical Education",
      description:
        "Develop expertise in physical fitness, sports science, and health education to become effective physical education teachers and fitness professionals.",
      duration: "4 years",
      strand: "All Strands",
      link: "/programs/b-physical-education",
      isNew: true,
    },
  ]

  return (
    <>
      {/* Programs Section */}
      <section
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="200"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 dark:text-slate-200">Undergraduate Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
                className="flex flex-col justify-around bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative"
              >
                {program.isNew && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}

                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">{program.title}</h3>

                <p className="text-gray-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">{program.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-slate-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Duration: {program.duration}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-slate-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Required Strand: {program.strand}</span>
                  </div>
                </div>

                <button
                  className={`w-full py-2 px-4 rounded transition-colors duration-200 text-sm font-medium ${
                    program.isNew
                      ? "bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed"
                      : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
                  }`}
                  onClick={() => {
                    if (!program.isNew) {
                      navigate(program.link)
                    }
                  }}
                  disabled={program.isNew}
                >
                  {program.isNew ? "Coming Soon" : "Learn More"}
                </button>
              </div>
            ))}
          </div>

          <ContactSection />

          {/* Call to Action */}
          <div className="mt-2 text-center">
            <p className="text-lg text-gray-700 dark:text-slate-300 mb-4">Ready to start your journey with us?</p>
            <div className="space-x-4 flex justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSc1wetVpXWkg_4nUZQeWjlHGJ2zDxdXGrNcmJrGj0EXmUtadw/viewform",
                    "_blank",
                  )
                }
                className="bg-blue-900 hover:bg-blue-800 text-white hover:text-yellow-400 dark:bg-blue-800 dark:hover:bg-blue-700 py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
              >
                Apply Now
              </button>
              <button
                onClick={() => navigate("/admission")}
                className="border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
              >
                Learn More About Admissions
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs