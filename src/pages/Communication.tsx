"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Communication = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const basePath = "/mcst-website-build"

  return (
    <>
      {/* Campus Gallery Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        id="gallery"
        className="py-12 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200">Campus Gallery</h2>
            <p className="text-gray-600 dark:text-slate-300">Bachelor of Arts in Communication</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img
                src={`${basePath}/images/comm-one.jpg`}
                alt="Mandaluyong College of Science and Technology Communication students"
                className="w-full h-full object-cover rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125 min-h-[300px] md:min-h-0"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex-1">
                <img
                  src={`${basePath}/images/comm-two.jpg`}
                  alt="Communication students working together"
                  className="w-full h-full object-cover rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125 min-h-[200px] md:min-h-0"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <img
                  src={`${basePath}/images/comm-three.jpg`}
                  alt="Communication students in group discussion"
                  className="w-full h-full object-cover rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125 min-h-[200px] md:min-h-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum Header */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Course Curriculum</h2>
        </div>
      </section>

      {/* First Year */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="pb-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">First Year</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">FIRST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GELF111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Purposive Communication/Malayuning Communication
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GESS111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Understanding the Self/ Pag-unawa sa Sarili
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEPH111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Readings in Philippines History/Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEMT111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Mathematics in the Modern World/Matematika sa Makabagong Daigdig
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA125</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Introduction to Communication Media
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NSTP111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        CWTS-Civic Welfare Training Service 1
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        PATHFITI: Movement Competency Training
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">IRMC111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Mandaluyong Culture and History
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">1</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">SECOND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEHH002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Art Appreciation/Pagpapahalaga sa Sining
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEST121</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Science, Technology, and Society/Agham, Teknolohiya, at Lipunan
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEHH003</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Ethics/Etika</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEST003</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        The Contemporary World/Ang Kasalukuyang Daigdig
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA213</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Communication Culture and Society
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NSTP 122</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        CWTS-Civic Welfare Training Service 2
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF122</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        PATHFIT2: Exercise-based Fitness Activities
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Year */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Second Year</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">FIRST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GESS002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Gender & Society</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEHH001</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Philippine Popular Culture
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA213</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Development Communication
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA214</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Introduction to Theater Arts
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA215</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Speech and Drama</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GELH001</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Kontekswalidong Komunikasyon sa Filipino
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF213</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATHFIT3: Dance</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">SECOND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEMT222</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Elementary Statistics</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GESCO01</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Life and Works of Rizal</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA223</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Communication Theory</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">RCBA224</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Risk Disaster and Humanitarian Communication
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">RCBA225</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Introduction to Film</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GELH002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Panitikang Panlipunan</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF224</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATHFIT4- Team Sports</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Year */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Third Year</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">FIRST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA311</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Communication Research</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">RCBA313</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Advertising Principles and Practices
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA314</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Game Development</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA315</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Theater Production</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA316</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Multimedia Arts</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">SECOND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA321</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Communication Media Laws and Ethics
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA322</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Digital Imaging</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA323</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Performance Media</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA324</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Creative Writing</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA325</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Cross-Cultural Communication
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Year */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Fourth Year</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">FIRST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA411</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Thesis 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA412</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Communication Planning</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA413</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Organizational Culture</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">RCBA414</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Journalism Principles</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">IRMCO02</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Peace Education and Indigenous People's Culture
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">SECOND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELBA421</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Thesis 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCBA422</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Communication Management
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">RCBA433</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Knowledge Management</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GECD000</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Community Development</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Summer</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-zinc-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">INTERNSHIP (300 hrs.)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default Communication