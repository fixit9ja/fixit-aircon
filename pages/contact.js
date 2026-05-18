import Layout from '../components/Layout';
import { useState } from 'react';
import s from './contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', location: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _source: 'Fix-It Air Conditioner Website' }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert('Something went wrong. Please call us directly on +234 902 111 1193');
      }
    } catch {
      alert('Something went wrong. Please call us directly on +234 902 111 1193');
    }
    setLoading(false);
  };

  return (
    <Layout title="Contact" description="Contact Fix-It Air Conditioner for AC supply, installation, maintenance, repair and commercial HVAC across Nigeria.">

      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact Us</h1>
          <p>Request a quote, book a service, or ask us anything. We respond within one business day.</p>
        </div>
      </section>

      <section className={s.main}>
        <div className="container">
          <div className={s.layout}>

            {/* FORM */}
            <div className={s.formWrap}>
              <h2>Request a Quote or Service</h2>
              <p>Fill in the form and our team will get back to you promptly with a tailored solution.</p>

              {sent ? (
                <div className={s.success}>
                  <span>✅</span>
                  <div>
                    <strong>Request Received!</strong>
                    <p>Thank you for reaching out. We will get back to you within one business day.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className={s.form}>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={onChange} />
                    </div>
                    <div className={s.field}>
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={onChange} />
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="+234 xxx xxx xxxx" value={form.phone} onChange={onChange} />
                    </div>
                    <div className={s.field}>
                      <label htmlFor="location">Your Location *</label>
                      <input id="location" name="location" type="text" required placeholder="e.g. Wuse, Abuja" value={form.location} onChange={onChange} />
                    </div>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="service">Service Required *</label>
                    <select id="service" name="service" required value={form.service} onChange={onChange}>
                      <option value="">Select a service...</option>
                      <option>AC Supply (New Unit)</option>
                      <option>Installation Only</option>
                      <option>Supply and Installation</option>
                      <option>Routine Maintenance / Servicing</option>
                      <option>Repair (Fault / Not Cooling)</option>
                      <option>Refrigerant Recharging</option>
                      <option>Commercial HVAC</option>
                      <option>Annual Maintenance Contract</option>
                      <option>Emergency Call-Out</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="message">Additional Details *</label>
                    <textarea id="message" name="message" required rows={5}
                      placeholder="Describe your AC brand, model, issue, number of units, or any other relevant details..."
                      value={form.message} onChange={onChange} />
                  </div>
                  <button type="submit" className={`btn btn-ice ${s.submit}`} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className={s.info}>
              <div className={s.infoCard}>
                <h3>Contact Details</h3>
                <div className={s.infoItem}>
                  <span>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+2349021111193">+234 902 111 1193</a>
                  </div>
                </div>
                <div className={s.infoItem}>
                  <span>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@fix-it.ng">info@fix-it.ng</a>
                  </div>
                </div>
                <div className={s.divider} />
                <h4>Our Locations</h4>
                <div className={s.office}>
                  <span>📍</span>
                  <div>
                    <strong>Abuja (Head Office)</strong>
                    <span>Suite B-005, Quad Plaza, Ameh Ebute St, Wuye District, Abuja-FCT</span>
                  </div>
                </div>
                <div className={s.office}>
                  <span>📍</span>
                  <div>
                    <strong>Lagos</strong>
                    <span>3, Oyedele Ogunniyi St, Anthony Village, Lagos State</span>
                  </div>
                </div>
                <div className={s.divider} />
                <h4>Business Hours</h4>
                <div className={s.hours}>
                  <div className={s.hoursRow}><span>Monday to Friday</span><strong>9:00 AM – 5:00 PM</strong></div>
                  <div className={s.hoursRow}><span>Saturday</span><strong className={s.appt}>By Appointment</strong></div>
                  <div className={s.hoursRow}><span>Sunday</span><strong className={s.appt}>By Appointment</strong></div>
                </div>
                <p className={s.note}>For emergencies outside business hours, call us directly and we will do our best to assist.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
}
