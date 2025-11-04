
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../components/icons/SocialIcons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000); // Reset message after 5 seconds
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
        <p className="text-lg text-text-secondary mt-2">I'm open to new opportunities and collaborations. Let's talk!</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-secondary p-8 rounded-lg border border-border">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
          <p className="text-text-secondary mb-6">
            Feel free to reach out via email or connect with me on social media.
          </p>
          <div className="space-y-4">
             <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>{CONTACT_INFO.email}</span>
            </a>
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors">
                <GitHubIcon className="h-6 w-6" />
                <span>GitHub</span>
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors">
                <LinkedInIcon className="h-6 w-6" />
                <span>LinkedIn</span>
            </a>
             <a href={CONTACT_INFO.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors">
                <TwitterIcon className="h-6 w-6" />
                <span>Twitter</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-primary border border-border rounded-md px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-primary border border-border rounded-md px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Your Message" required className="w-full bg-primary border border-border rounded-md px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
            </div>
            <button type="submit" className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors duration-300">
              Send Message
            </button>
            {submitted && <p className="text-green-400 text-center mt-4">Thank you for your message!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
