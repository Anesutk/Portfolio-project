'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.values(newErrors).some(err => err !== '')) return;

    setStatus("Sending...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/anesutmandebvu@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="contact-form"
          style={{ padding: '2rem', borderRadius: '1rem', maxWidth: '800px' }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} />
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>

          {status && (
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              {status}
            </div>
          )}

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="social-links">
          <a href="https://github.com/Anesutk" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
           <a href="https://wa.me/263783608421" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/anesu-mandebvu-3aa932302"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;