import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "../index.css"

const NewsEvents = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false 
    })
  }, [])

  const basePath = "/Home"

  const newsItems = [
    {
      href: "https://www.facebook.com/share/p/14LNNivzTVS/",
      image: "bsn.jpg",
      alt: "Bachelor of Science in Nursing Open for Admission",
      type: "Announcement",
      title: "Bachelor of Science in Nursing Open for Admission",
      description: "Nursing education teaches healing while fostering compassion, resilience, and a strong commitment to serving others with kindness and hope.",
      date: "July 8, 2025",
    },
    {
      href: "https://www.facebook.com/share/p/1ErAgQujM1/",
      image: "public-ad.jpg",
      alt: "Bachelor of Public Administration offering",
      type: "Announcement",
      title: "Bachelor of Public Administration",
      description: "Mandaluyong College of Science and Technology now offers Bachelor of Public Administration.",
      date: "May 28, 2025",
    },
    {
      href: "https://www.facebook.com/share/p/1DnGrjjwRq/",
      image: "pe.jpg",
      alt: "Bachelor of Physical Education offering",
      type: "Announcement",
      title: "Bachelor of Physical Education",
      description: "Mandaluyong College of Science and Technology now offers Bachelor of Physical Education.",
      date: "May 23, 2025",
    },
  ]

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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200">News and Events</h2>
          <p className="text-gray-600 dark:text-slate-300">Explore our latest articles and updates.</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-offset="200"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="w-full">
                <img
                  src={`${basePath}/images/${item.image}`}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition duration-200 dark:brightness-75 dark:contrast-125"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-gray-500 dark:text-slate-300">{item.type}</p>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-200">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-slate-300">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.facebook.com/MandaluyongCST"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white hover:text-yellow-400 px-6 py-2 rounded-md shadow hover:bg-blue-800 text-sm dark:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-300"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewsEvents