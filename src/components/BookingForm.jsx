import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Send confirmation email to the user
    emailjs
      .send(
        "service_raukhec",
        "template_sne3z61",
        formData,
        "T2V5Eh--JhQ5jYvDi"
      )
      .then(() => {
        console.log("✅ Confirmation email sent to user");
      })
      .catch((err) => console.error("❌ User email error:", err));

    // 2️⃣ Send notification email to you (admin)
    emailjs
      .send(
        "service_raukhec",
        "template_fny9ah2",
        formData,
        "T2V5Eh--JhQ5jYvDi"
      )
      .then(() => {
        console.log("📧 Notification email sent to admin");
        setIsSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Admin email error:", err);
        setLoading(false);
      });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 relative flex items-center justify-center p-4"
      >
        {/* Glow background */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center max-w-md relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
          <p className="text-gray-300">
            Your booking request has been submitted. We’ve also sent a
            confirmation to your email.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-gray-100 relative">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Book a Call
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and how I can help you achieve your
            goals
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 relative z-10 hover:border-purple-500/40 transition-all duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder=""
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Preferred Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                <option value="">Select a time slot</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                placeholder="Tell me about your project or what you'd like to discuss..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Schedule Call"}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              We'll contact you within 24 hours to confirm your booking
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
