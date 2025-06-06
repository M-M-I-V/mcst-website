import { Link } from "react-router-dom"
import "../index.css"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 dark:bg-blue-800 dark:text-slate-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        <div className="mb-6 md:mb-0">
          <img src="/images/mcst-logo.png" alt="MCST Logo" className="h-16 w-auto" />
          <p className="mt-4">Address:</p>
          <p>Welfareville Compound, Barangay Addition Hills, Mandaluyong City 1550</p>
          <p className="mt-4">Contact:</p>
          <p>(02) 87160352</p>
          <p>registrarsoffice@mcst.edu.ph</p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/MandaluyongCST"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.897 3.777-3.897 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-16">
          <div>
            <h4 className="font-semibold mb-2 dark:text-slate-200">Admissions</h4>
            <Link to="/programs" className="block text-gray-300 hover:text-yellow-400">
              Program Offerings
            </Link>
            <Link to="/admission" className="block text-gray-300 hover:text-yellow-400">
              Admissions Info
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 dark:text-slate-200">Resources</h4>
            <a
              href="https://sites.google.com/view/mcst-registrar/home"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-yellow-400"
            >
              Registrar's Office
            </a>
            <a
              href="https://sites.google.com/view/mandaluyong-college-of-science/home"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-yellow-400"
            >
              Learning Resource Center
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-2 dark:text-slate-200">Contact Us</h4>
            <a
              href="https://www.facebook.com/MandaluyongCST"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-yellow-400"
            >
              News and Events
            </a>
            <a
              href="https://www.facebook.com/MandaluyongCST/posts/pfbid0238tZmFrpzQaY46ah7XwtSUV9xdqjYmbXrsLNddCfsvNt3NK7eodaStK6q4RSDUCLl"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-yellow-400"
            >
              Career Opportunities
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-gray-400">&copy; 2024 MCST. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
