"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "../index.css"

const Apply = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <>
      {/* Enrollment Procedure Section */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Enrollment Procedure (Continuing Students)</h2>
          <p className="mb-8">
            A.Y. 2025-2026 (1st Semester)
            <br />
            June 16-20, 2025
          </p>

          <div className="mb-8"></div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
          </div>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Certificate of Registration (2nd Sem: A.Y. 2024-2025)</li>
            <li>Duly Signed Clearance (2nd Sem, A.Y. 2024-2025)</li>
            <li>Program of Study Evaluation Form</li>
          </ol>

          <h3 className="text-2xl font-semibold mb-4">Enrollment Procedure</h3>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Submit the signed Clearance and Evaluated Program of Study to the Registrar Office.</li>
            <li>Receive the Certificate of Registration with academic schedule.</li>
          </ol>
        </div>
      </section>

      {/* Enrollment Schedule Section */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="pb-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Enrollment Schedule</h2>
          <p className="mb-8">
            A.Y. 2025-2026 (1st Semester)
            <br />
            June 16, 2025 to July 07, 2025
          </p>

          <div className="mb-8"></div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-zinc-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Date</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Time</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Year Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    June 16, 2025 to July 07, 2025
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8:00AM-5:00PM</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1st Year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    June 16, 2025 to June 18, 2025
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8:00AM-5:00PM</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2nd Year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    June 19, 2025 to June 20, 2025
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8:00AM-5:00PM</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3rd Year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply