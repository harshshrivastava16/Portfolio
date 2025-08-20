import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1) Send confirmation to the user
      await emailjs.send(
        'service_raukhec', 
        'template_sne3z61', 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'T2V5Eh--JhQ5jYvDi'
      );

      // 2) Send notification to admin (your email is already set as recipient in the template)
      await emailjs.send(
      'service_raukhec',
        'template_fny9ah2',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // optional: include explicit to_email if your template is set to use it
          to_email: 'harshdurg1611@gmail.com',
        },
        'T2V5Eh--JhQ5jYvDi'
      );

      setSubmitMessage('✅ Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('❌ Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 6000);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harsh-shrivastava-8479b7250', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Code, href: 'https://leetcode.com/u/16Harsh11/', label: 'LeetCode' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'harshdurg1611@gmail.com', href: 'mailto:harshdurg1611@gmail.com' },
    { icon: Phone, label: 'Phone', value: '6205334084', href: 'tel:6205334084' },
    { icon: MapPin, label: 'Location', value: 'Orissa', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f] to-[#05070d]" />
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[80px] -top-40 -left-40 animate-[floatOrb_18s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-[500px] h-[500px] bg-fuchsia-500/15 rounded-full blur-[80px] -bottom-32 -right-32 animate-[floatOrb_22s_ease-in-out_infinite_alternate]" style={{ animationDelay: '8s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <info.icon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {submitMessage && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating orb animation keyframes */}
      <style jsx>{`
        @keyframes floatOrb {
          0%   { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(80px, -80px) rotate(15deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
