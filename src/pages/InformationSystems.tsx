"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import ISOne from "../assets/images/is-one.jpg"
import ISTwo from "../assets/images/is-two.jpg"
import ISThree from "../assets/images/is-three.jpg"


const InformationSystems = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

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
            <p className="text-gray-600 dark:text-slate-300">Bachelor of Science in Information Systems</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img
                src={ISOne || "/placeholder.svg?height=400&width=600"}
                alt="Information Systems students working with technology"
                className="w-full h-full object-cover rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125 min-h-[300px] md:min-h-0"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex-1">
                <img
                  src={ISTwo || "/placeholder.svg?height=200&width=300"} 
                  alt="Information Systems students in computer lab"
                  className="w-full h-full object-cover rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125 min-h-[200px] md:min-h-0"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <img
                  src={ISThree || "/placeholder.svg?height=200&width=300"}
                  alt="Information Systems students collaborating on projects"
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PURPCOM</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Purposive Communication</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">UNDERSE</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Understanding the Self</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PHILHIS</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Readings in Philippine History/Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MANDCUL</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Mandaluyong Culture & History
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">(1)</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEMMW</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Math in the Modern World
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PE101PF</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATH-FIT1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NSTP 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        National Service Training Program 1
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Introduction to Computing
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS112</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Computer Programming 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={5}>
                        TOTAL UNIT(S) = 23.0
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">23</td>
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ARTAPRE</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Art Appreciation</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NATSCI1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Natural Science 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">SCITSOC</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Science, Technology, and Society
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ETHICS</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Ethics</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NSTP 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        National Service Training Program 2
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PETWODA</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATHFIT 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS121</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Computer Programming 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS112</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS122</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Fundamentals of Information Systems
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={5}>
                        TOTAL UNIT(S) = 23.0
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">23</td>
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ARTHUMS</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Art and Humanities</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NATSCI2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Natural Science 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">KOMFIL</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Kontekswalisadong Komunikasyon sa Filipino
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PANITIK</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Panitikang Panlipunan</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GENSOC</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Gender and Society</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PETRIIS</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATHFIT3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PE2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS212</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Professional Issues in Information Systems
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS122</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS213</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Fundamentals of Database Systems
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS122</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS211</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Data Structures and Algorithms
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS121</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={4}>
                        TOTAL UNIT(S) = 26.0
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">26</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">TECHENG</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Technical English</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">RIZALLLW</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Life and Works of Rizal</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CONTWOR</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Contemporary World</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ELMSTAT</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Elementary Statistics</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEFORTS</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATHFIT4</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PE3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS223</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Organization and Management Concepts
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS122</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS222</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        System Analysis and Design
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS213</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS221</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Information Management</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS213</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={4}>
                        TOTAL UNIT(S) = 23.0
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">23</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ENGWORK</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        English in the Workplace
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Professional Elective 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3rd Year Standing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Professional Elective 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3rd Year Standing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS314</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Quantitative Methods</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3rd Year Standing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS313</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Business Process Management
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS223</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS312</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        IT Infrastructure and Network Technologies
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS311</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Application Development and Emerging Technologies
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">CCIS211</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={4}>
                        TOTAL UNIT(S) = 22
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">22</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS323</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Financial Management</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS313</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Professional Elective 3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3rd Year Standing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS322</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Project Management</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS312</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS321</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Enterprise Architecture</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS312, PCIS213</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS324</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Evaluation of Business Performance
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS313</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS325</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Capstone Project 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS222, PCIS313</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={4}>
                        TOTAL UNIT(S) = 18.0
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">18</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEEDIPC1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Peace Education</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">1.5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">(1.5)</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEEDIPC2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Indigenous Peoples' and Culture
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">1.5</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">(1.5)</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Professional Elective 4</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4th Year Standing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS411</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        IS Strategy, Management Concepts
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS322</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS412</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Capstone Project 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS325</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={4}>
                        TOTAL UNIT(S) = 12.0
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">12</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
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
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        DESCRIPTIVE TITLE
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LEC</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">HOURS LAB</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">UNITS</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                        PRE-REQUISITES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PCIS421</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Practicum for Information Systems
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">486</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">6</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4th Year Standing</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={4}>
                        TOTAL UNIT(S) = 6.0
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">6</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Academic Summary */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">TOTAL ACADEMIC UNITS: 153</h3>
            <p className="text-lg">Lecture Units: 139</p>
            <p className="text-lg">Laboratory Units: 14</p>
          </div>

          {/* Professional Electives */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Professional Electives</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>PEIS001 - Human Computer Interaction (3 units)</li>
              <li>PEIS002 - IT Audits and Control (3 units)</li>
              <li>PEIS003 - Customer Relation Management (3 units)</li>
              <li>PEIS004 - Business Intelligence (3 units)</li>
              <li>PEIS005 - Data Warehousing (3 units)</li>
              <li>PEIS006 - Data Mining (3 units)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default InformationSystems