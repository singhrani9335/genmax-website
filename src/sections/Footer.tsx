export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              GenMax
              <span className="text-blue-500"> IT Solution</span>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Technology, innovation and digital solutions that help businesses
              grow and succeed in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-gray-400 transition hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Software Development</li>
              <li className="text-gray-400">Digital Marketing</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">SEO Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact Us
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:info@genmaxitsolution.com"
                className="block text-gray-400 transition hover:text-white"
              >
                info@genmaxitsolution.com
              </a>

              <p className="text-gray-400">
                India
              </p>

              <a
                href="#contact"
                className="inline-block rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-7">
          <div className="flex flex-col gap-3 text-center text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © 2026 GenMax IT Solution. All rights reserved.
            </p>

            <p>
              Technology • Innovation • Growth
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}