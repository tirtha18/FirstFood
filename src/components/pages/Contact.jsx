import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../layout/Footer";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Contact Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-400 p-8 text-center mb-8 rounded-lg">
            <h1 className="text-5xl font-bold mb-4 font-heading text-gray-800">
              Contact Us
            </h1>
            <p className="text-gray-700 mb-4">
              We'd love to hear from you. Send us a message!
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8">
            <form
              form
              action="https://getform.io/f/agddpgvb"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
