"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import heroImage from "../assets/images/hero-section.png"
import "../index.css"

const Admission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center pt-[calc(100px)]"
        style={{ backgroundImage: `url('../assets/images/hero-section.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-6 sm:px-12">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 dark:text-slate-200 text-center">
            Admissions Information
          </h2>
        </div>
      </section>

      {/* Qualifications Section */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Qualifications</h2>

          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>A Certified Resident of Mandaluyong</li>
            <li>Academic Excellence with a Minimum 85.00% General Weighted Average (GWA).</li>
            <li>
              Senior High School Graduates, Ongoing/Graduating Grade 12 Students, and Graduates of the Old Curriculum
            </li>
            <li>
              Applicants who have taken college units may be considered; however, no units taken previously shall be
              credited except NSTP and TOR shall be validated
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mb-4">Required Strand per Program</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-zinc-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Program</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                    Strand Requirement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    Bachelor of Science in Mathematics
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">STEM, ABM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    Bachelor of Arts in Communication
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ALL STRAND</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    Bachelor of Science in Information Systems
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">STEM, TVL-ICT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documentary Requirements Section */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-4">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Documentary Requirements</h2>

          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Completely filled out Application Form</li>
            <li>Form 138 (For ongoing Grade 12 SHS)</li>
            <li>Certificate of Good Moral Character</li>
            <li>PSA Birth Certificate</li>
            <li>
              Proof of Mandaluyong Residence may be any ONE of the following:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Voter's ID of the applicant or of their parents</li>
                <li>
                  any Government Issued ID of the student-applicant, parent/s, or legal guardian showing address in
                  Mandaluyong City.
                </li>
                <li>
                  Proof of Billing with Mandaluyong City address named after the student or the student's parent/s or
                  legal guardian
                </li>
              </ul>
            </li>
            <li>
              Two (2) completely filled-out Recommendation Forms by former teacher/s or the School Principal, enclosed
              in a sealed envelope. (Can be downloaded from{" "}
              <a
                href="https://bit.ly/RecomForm2025"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://bit.ly/RecomForm2025
              </a>
              )
            </li>
            <li>
              Original and photocopy of Certificate of Rating with eligibility to enroll in college (For ALS
              Completer/Passer ONLY) Transcript of Records (TOR) with graduation date (For Associate, Certificate,
              Vocational, or Diploma Degree Holder)
            </li>
          </ol>
        </div>
      </section>

      {/* Admission Procedure Section */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="pb-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Admission Procedure</h2>

          <ol className="list-decimal pl-6 mb-8 space-y-4">
            <li>
              The applicant shall fill-out the pre-registration via Google Form:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc1wetVpXWkg_4nUZQeWjlHGJ2zDxdXGrNcmJrGj0EXmUtadw/viewform"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-Register Form
              </a>
              <p className="mt-1 italic">Note: Failure to take the pre-registration form means invalid application.</p>
            </li>
            <li>
              The required documents shall be submitted in person at the Registrar's Office located at the Ground Floor
              of Administrative Building starting on February 17, 2025. Submission hours are from 8:00 AM to 4:00 PM
              from Mondays to Fridays.
              <p className="mt-1 italic">Note: Only walk-ins with complete requirements will be accommodated.</p>
            </li>
            <li>
              All requirements will be assessed by the Admission Officer. Once complete, the student applicant will be
              scheduled for Entrance Examination.
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        className="pb-8 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 dark:text-slate-200">FAQs</h2>
          <p className="text-center text-gray-600 mb-8 dark:text-slate-300">
            Find answers to your questions about admissions, and programs.
          </p>

          <div className="space-y-6 mb-8">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 rounded-md bg-white shadow dark:bg-zinc-800">
                <span>What programs are offered?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 mt-2 bg-gray-100 rounded-md dark:bg-zinc-800">
                <p>
                  Mandaluyong College of Science and Technology offers a diverse range of programs. These include
                  Bachelor of Arts in Communication, Bachelor of Science in Information Systems, and Bachelor of Science
                  in Mathematics.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 rounded-md bg-white shadow dark:bg-zinc-800">
                <span>If I am a graduate of the old curriculum, and not of K-12, can I be accepted?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 mt-2 bg-gray-100 rounded-md dark:bg-zinc-800">
                <p>
                  According to CHED Memorandum 10 s. 2017, you can be accepted but you will undergo a bridging program
                  to catch up on the subjects you should have taken at the SHS (Senior High School) level.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 rounded-md bg-white shadow dark:bg-zinc-800">
                <span>Will I be accepted if my final average is 84 or lower?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 mt-2 bg-gray-100 rounded-md dark:bg-zinc-800">
                <p>
                  Based on the signed Board Resolution 008 s. 2023 of MCST, only students with a final average of 85 or
                  higher can be accepted for the first year of operation.
                </p>
              </div>
            </details>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4 dark:text-slate-200">Reach out to us for more information.</p>
            <button className="bg-blue-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admission