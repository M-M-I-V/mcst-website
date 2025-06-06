import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "../index.css"

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8 dark:text-slate-300">We're here to assist you with any inquiries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-offset="200"
              className="mb-6"
            >
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-700 dark:text-slate-300">Reach us anytime via email.</p>
              <p className="text-blue-500 dark:text-blue-700">registrarsoffice@mcst.edu.ph</p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-offset="200"
              className="mb-6"
            >
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-gray-700 dark:text-slate-300">Call us for immediate support.</p>
              <p className="text-blue-500 dark:text-blue-700">(02) 87160352</p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Office</h3>
              </div>
              <p className="text-gray-700 dark:text-slate-300">
                Welfareville Compound, Barangay Addition Hills, Mandaluyong City, PH
              </p>
              <a href="#" className="text-blue-500 hover:underline dark:text-blue-700">
                Find Us &gt;
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-offset="200"
            className="hidden md:block bg-gray-200 rounded-lg transition duration-200 dark:brightness-75 dark:contrast-125"
          >
            <img
              src="/public/images/feature.jpg"
              alt="Admin Building Image"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
