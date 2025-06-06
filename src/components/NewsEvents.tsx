import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import gradesImage from "../assets/images/grades.jpg"
import publicAdImage from "../assets/images/public-ad.jpg"
import peImage from "../assets/images/pe.jpg"
import mcstLogo from "../assets/images/mcst-logo.png"
import "../index.css"

const NewsEvents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <section id="blog" className="py-12 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="200"
          className="text-center mb-12"
        >
          <h4 className="text-sm font-medium text-gray-600 uppercase dark:text-slate-300">News and Events</h4>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200">Latest Insights and Updates</h2>
          <p className="text-gray-600 dark:text-slate-300">Explore our latest articles and insights.</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-offset="200"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Releasing of Grade Slip */}
          <a
            href="https://www.facebook.com/share/p/1DcaiN5EFT/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            {/* Image Container - Removed aspect-w/h and added specific height */}
            <div className="w-full h-48 bg-gray-200">
              <img
                src={gradesImage || "/placeholder.svg"}
                alt="Schedule of Releasing of Grade Slip" // More descriptive alt text
                className="w-full h-full object-cover transition duration-200 dark:brightness-75 dark:contrast-125"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-slate-300">Announcement</p>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-200">Releasing of Grade Slip</h3>
              <p className="text-xs text-gray-600 dark:text-slate-300">
                Schedule of releasing of grade slip of 1st and 2nd year students.
              </p>

              <div className="flex items-center mt-4 text-gray-500">
                <img
                  src={mcstLogo || "/placeholder.svg"}
                  alt="Mandaluyong College of Science and Technology Logo" // Descriptive alt text
                  className="h-6 w-6 rounded-full mr-2 transition duration-200 dark:brightness-75 dark:contrast-125"
                  loading="lazy"
                />
                <div>
                  <p className="text-xs font-medium dark:text-slate-300">
                    Mandaluyong College of Science and Technology
                  </p>
                  <p className="text-xs dark:text-slate-300">May 30, 2025 · 1 min read</p>
                </div>
              </div>
            </div>
          </a>

          {/* Card 2: Bachelor of Public Administration */}
          <a
            href="https://www.facebook.com/share/p/15BEth4yLm/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            {/* Image Container - Removed aspect-w/h and added specific height */}
            <div className="w-full h-48 bg-gray-200">
              <img
                src={publicAdImage || "/placeholder.svg"}
                alt="Bachelor of Public Administration offering" // More descriptive alt text
                className="w-full h-full object-cover transition duration-200 dark:brightness-75 dark:contrast-125"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-slate-300">Announcement</p>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-200">
                Bachelor of Public Administration
              </h3>
              <p className="text-xs text-gray-600 dark:text-slate-300">
                Mandaluyong College of Science and Technology now offers Bachelor of Public Administration.
              </p>

              <div className="flex items-center mt-4 text-gray-500 dark:text-slate-300">
                <img
                  src={mcstLogo || "/placeholder.svg"}
                  alt="Mandaluyong College of Science and Technology Logo"
                  className="h-6 w-6 rounded-full mr-2 transition duration-200 dark:brightness-75 dark:contrast-125"
                  loading="lazy"
                />
                <div>
                  <p className="text-xs font-medium">Mandaluyong College of Science and Technology</p>
                  <p className="text-xs">May 28, 2025 · 1 min read</p>
                </div>
              </div>
            </div>
          </a>

          {/* Card 3: Bachelor of Physical Education */}
          <a
            href="https://www.facebook.com/share/p/1CLcKp3Xzc/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            {/* Image Container - Removed aspect-w/h and added specific height */}
            <div className="w-full h-48 bg-gray-200">
              <img
                src={peImage || "/placeholder.svg"}
                alt="Bachelor of Physical Education offering" // More descriptive alt text
                className="w-full h-full object-cover transition duration-200 dark:brightness-75 dark:contrast-125"
                loading="lazy" // Added loading="lazy" for consistency
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-slate-300">Announcement</p>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-200">
                Bachelor of Physical Education
              </h3>
              <p className="text-xs text-gray-600 dark:text-slate-300">
                "Mandaluyong College of Science and Technology now offers Bachelor of Physical Education."
              </p>

              <div className="flex items-center mt-4 text-gray-500 dark:text-slate-300">
                <img
                  src={mcstLogo || "/placeholder.svg"}
                  alt="Mandaluyong College of Science and Technology Logo"
                  className="h-6 w-6 rounded-full mr-2 transition duration-200 dark:brightness-75 dark:contrast-125"
                  loading="lazy"
                />
                <div>
                  <p className="text-xs font-medium">Mandaluyong College of Science and Technology</p>
                  <p className="text-xs">May 23, 2025 · 1 min read</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.facebook.com/MandaluyongCST"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 text-sm dark:bg-blue-800"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewsEvents