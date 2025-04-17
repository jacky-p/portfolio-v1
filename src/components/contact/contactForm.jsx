import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Submitted:", form);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
