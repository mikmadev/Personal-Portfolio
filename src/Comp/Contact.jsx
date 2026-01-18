import React,{ useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(); // Form reference
  const [loading, setLoading] = useState(false); // Loading state

const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs bhitra yo format ma data pathaune
    emailjs.sendForm(
      'service_8k1e736',   // Service ID (Gmail)
      'template_lr8a0jn',  // Template ID (Contact Us)
      form.current,        // Form reference
      'SXCNH_KjqKRQ3_ook'  // Public Key
    )
    .then((result) => {
        // Dhamilo dekhini samasya yaha bata fix hunchha
        console.log("Success:", result.text);
        alert("Message Sent Successfully! ");
        e.target.reset(); // Form clear garna
        setLoading(false);
    })
    .catch((error) => {
        // Error lai console ma print garne debugging ko lagi
        console.error("EmailJS Error Details:", error);
        alert("Oops something went wrong, please resend again.");
        setLoading(false);
    });
  };
  return (
    <section id="contact" className="py-5 bg-white overflow-hidden">
      <div className="container">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="row justify-content-center"
        >
          <div className="col-lg-8 text-center mb-5">
            <h2 className="fw-bold mb-3">Get In Touch</h2>
            <p className="text-muted">Have a project in mind or just want to say hi? My inbox is always open.</p>
          </div>
        </motion.div>

        <div className="row g-5">
          {/* Left Side: Contact Info Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-lg-5"
          >
            <div className="d-flex align-items-center mb-4">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="bg-light p-3 rounded-circle text-primary me-3 shadow-sm"
              >
                <FaEnvelope size={24} />
              </motion.div>
              <div>
                <h6 className="mb-0 fw-bold">Email</h6>
                <a
                  href="mailto:mikmatmg9@gmail.com"
                  className="mb-0 text-muted text-decoration-none fw-semibold d-block email-link"
                >
                  mikmatmg9@gmail.com
                </a>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              {/* <motion.div
                whileHover={{ rotate: 15 }}
                className="bg-light p-3 rounded-circle text-success me-3 shadow-sm"
              >
                <FaWhatsapp size={24} />
              </motion.div> */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                  <FaPhoneAlt size={22} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Call Me Directly</h6>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    {/* First Number */}
                    <a
                      href="tel:+9779763438575"
                      className="text-muted text-decoration-none hover-primary fw-semibold email-link"
                    >
                      +977 9763438575
                    </a>

                    <span className="text-muted opacity-50">|</span> {/* Divider line */}

                    {/* Second Number */}
                    <a
                      href="tel:+9779863183360"
                      className="text-muted text-decoration-none hover-primary fw-semibold email-link"
                    >
                      +977 9863183360
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <h6 className="fw-bold mb-3">Social Profiles</h6>
            <div className="d-flex gap-3">
              {/* Facebook Button */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.facebook.com/mikma.rumba.2025/"
                target="_blank"
                rel="noopener noreferrer"
                // p-0 le default padding hatauchha, d-flex le centering control garchha
                className="btn btn-outline-primary d-flex align-items-center justify-content-center p-0"
                style={{ width: '45px', height: '45px', borderRadius: '50%' }}
              >
                <FaFacebookF size={18} />
              </motion.a>

              {/* Instagram Button */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.instagram.com/mig_forey?igsh=MTF1M2k4NTI2NWc4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-danger d-flex align-items-center justify-content-center p-0"
                style={{ width: '45px', height: '45px', borderRadius: '50%' }}
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="https://wa.me/9779863183360"
                target="_blank"
                rel="noopener noreferrer"
                // p-0 le default padding hatauchha, d-flex le centering control garchha
                className="btn btn-outline-success d-flex align-items-center justify-content-center p-0"
                style={{ width: '45px', height: '45px', borderRadius: '50%' }}
              >
                <FaWhatsapp size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-lg-7"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="row g-3 p-4 border rounded-4 shadow-sm bg-white"
            >
              <div className="col-md-6">
                <label className="form-label small fw-bold">Name</label>
                {/* 'name="name"' thapeko chu, dashboard sanga match garna */}
                <input type="text" name="name" className="form-control bg-light border-0 p-3" placeholder="John Doe" required />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-bold">Email</label>
                {/* 'name="email"' thapeko chu */}
                <input type="email" name="email" className="form-control bg-light border-0 p-3" placeholder="john@example.com" required />
              </div>
              <div className="col-12">
                <label className="form-label small fw-bold">Message</label>
                {/* 'name="message"' thapeko chu */}
                <textarea name="message" className="form-control bg-light border-0 p-3" rows="4" placeholder="Hi, I want to talk about a project..." required></textarea>
              </div>
              <div className="col-12">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading} // Sending huda button disable hunchha
                  className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact