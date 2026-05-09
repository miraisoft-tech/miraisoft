import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-mirai-500" size={24} />,
      title: 'Email Us',
      details: 'info@mirasoft.ng',
      link: 'mailto:info@mirasoft.ng',
    },
    {
      icon: <Phone className="text-mirai-500" size={24} />,
      title: 'Call Us',
      details: '+234 (70)6 538 4842',
      link: 'tel:+2347065384842',
    },
    {
      icon: <MapPin className="text-mirai-500" size={24} />,
      title: 'Visit Us',
      details: 'No 14 Owoade Adigun Street, Basorun, Ibadan, Oyo State, Nigeria',
      link: 'https://maps.google.com/?q=Basorun,+Ibadan,+Oyo+State,+Nigeria',
    },
  ]

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Get in touch with our team to discuss how we can help bring your
            ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center transition-colors"
              target={item.title === 'Visit Us' ? '_blank' : undefined}
              rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
            >
              <div className="w-12 h-12 bg-mirai-100 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.details}</p>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-mirai-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's discuss your project</h3>
              <p className="mb-6">
                Fill out the form and our team will get back to you within 24 hours to discuss your
                software development needs.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-2 items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Free consultation</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>No commitment required</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Custom solutions for your business</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-bold mb-2">Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            <div className="p-8">
              <form
                action="https://formsubmit.co/info@mirasoft.ng"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mirai-500 focus:border-mirai-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mirai-500 focus:border-mirai-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+234 (70)6 538 4842"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mirai-500 focus:border-mirai-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mirai-500 focus:border-mirai-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mirai-500 focus:border-mirai-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
