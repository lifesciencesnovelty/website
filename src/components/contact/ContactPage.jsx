import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Leave Us Message
              </h1>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50"
              >
                Send
              </button>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Address</h1>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Corp. Office:
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hyderabad,India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Factory Address:
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hyderabad, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-800">+91 7837836626</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <a
                    href="mailto:sales@noveltylifesciences.com"
                    className="text-gray-800 hover:text-red-600 transition-colors"
                  >
                    sales@noveltylifesciences.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
