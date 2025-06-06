"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import mathOne from "../assets/images/math-one.jpg"
import mathTwo from "../assets/images/math-two.jpg"
import mathThree from "../assets/images/math-three.jpg"

const Mathematics = () => {
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
            <p className="text-gray-600 dark:text-slate-300">Bachelor of Science in Mathematics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img
                src={mathOne || "/placeholder.svg"}
                alt="Mathematics students working on problem-solving"
                className="w-full h-full object-cover rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125 min-h-[300px] md:min-h-0"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex-1">
                <img
                  src={mathTwo || "/placeholder.svg"}
                  alt="Mathematics students in classroom discussion"
                  className="w-full h-full object-cover rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125 min-h-[200px] md:min-h-0"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <img
                  src={mathThree || "/placeholder.svg"}
                  alt="Mathematics students collaborating on projects"
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
              <h3 className="text-2xl font-semibold mb-4">1ST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PREC111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Pre-Calculus</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Fundamentals of Computing 1
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">IRMC111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Mandaluyong Culture and History
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEMT111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Mathematics in the Modern World
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GELE111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Purposive Communication</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEPH111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Readings in Philippine History
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GESS111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Understanding the Self</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        PATHFIT 1: Movement Competency Training
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NSTP111</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Civic Welfare Training Service 1
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">24</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2ND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT123</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Calculus I</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">4</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PREC111</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT124</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Fundamental Concepts of Math
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PREC111</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MATH ELECTIVE 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Math Elective 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT125</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Set Theory</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NMFC121</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">General Chemistry</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEST121</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Science, Technology and Society
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF122</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        PATHFIT 2: Exercise-Based Fitness Activity
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF111</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NSTP122</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Civic Welfare Training Service 2
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NSTP111</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">24</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
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
              <h3 className="text-2xl font-semibold mb-4">1ST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT211</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Calculus II</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">4</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT123</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT212</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Abstract Algebra I</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT124</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NMFC211</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        General Physics 1<br />
                        General Physics 1L
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        3<br />1
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT124/PMAT123</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NMFC212</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Theory of Interest</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT213</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Statistical Theory</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT124</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEHH002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Art Appreciation</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF213</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATHFIT 3: Dance</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF122</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">22</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2ND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT223</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Calculus III</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">4</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT211</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT224</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Linear Algebra</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT212</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT225</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Probability</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MATH ELECTIVE 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Math Elective 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEHH003</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Ethics</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GESS002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Gender and Society</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GEST003</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">The Contemporary World</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF224</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PATHFIT 4: Team Sports</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PEHF213</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">24</td>
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
              <h3 className="text-2xl font-semibold mb-4">1ST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT311</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Advanced Calculus</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT223</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT312</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Differential Equations</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT223</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT313</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Elementary Number Theory
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT124, PMAT223</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GESC001</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Life and Works of Rizal</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GELE003</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        English in the Workplace
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">IRMC002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Peace Education and Indigenous People's & Culture
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">18</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2ND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT314</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Modern Geometry</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT224, PMAT212</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT315</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Numerical Analysis</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT224, PMAT312</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MATH ELECTIVE 3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Math Elective 3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">FREE ELECTIVE 1</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Free Elective 1<br />
                        Graph Theory and Applications
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT224</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAQE321</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">GELE002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Technical English</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
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
              <h3 className="text-2xl font-semibold mb-4">1ST SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT411</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Complex Analysis</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT311</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">FREE ELECTIVE 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Free Elective 2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT111</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAQE411</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Thesis I</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT315</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">9</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2ND SEMESTER</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAQE421</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Thesis II</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAQE411</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MOJT421</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        On-the-Job Training (OJT)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAQE411/MAQE421</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" colSpan={2}>
                        TOTAL NUMBER OF UNITS
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">6</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200" className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Additional Information</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">TOTAL NUMBER OF UNITS: 145</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Math Electives</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MATE001</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Discrete Mathematics</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PREC111</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MATE002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Mathematical Modeling</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT311, PMAT224</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MATE003</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actuarial Mathematics</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">NMFC212</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MATE004</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Advanced Calculus II</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT311</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Free Electives</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE CODE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">COURSE TITLE</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                        No. of Units
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAFE001</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Operations Research</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAFE002</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        Fundamentals Computing II
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">PMAT111</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">MAFE003</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        History and Development of Fundamental Ideas in Mathematics
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p>
              <strong>NOTE:</strong> Fundamentals Computing I and II - 2 units lec & 1 unit lab
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mathematics