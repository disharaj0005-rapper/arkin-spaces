import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setErrorMessage(error?.text || error?.message || 'Unknown error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-arkin-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">Get In Touch</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Ready to start your next project? Reach out to us and let's build something extraordinary together. At Arkin Spaces, we value every interaction.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-zinc-400 font-light">{CONTACT_DETAILS.location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Call Us</h4>
                  <p className="text-zinc-400 font-light font-mono">+91 {CONTACT_DETAILS.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Email Us</h4>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-zinc-400 font-light hover:text-arkin-gold transition-colors">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Working Hours</h4>
                  <p className="text-zinc-400 font-light">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-arkin-dark p-8 md:p-12 border border-white/10 rounded-sm shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all placeholder-zinc-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all placeholder-zinc-600"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Your Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all placeholder-zinc-600"
                  placeholder="Enter your number"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all resize-none placeholder-zinc-600"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-arkin-gold text-arkin-darker font-bold uppercase tracking-widest py-4 transition-colors duration-300 shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm text-center">Message sent successfully! We will get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm text-center">
                  <p>Failed to send message. Please try again later.</p>
                  <p className="font-mono mt-1 text-xs text-red-400">Error Details: {errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;