import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Book a Shoot</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 text-black" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 text-black" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required className="w-full p-2 text-black" />
          </div>
          <button type="submit" className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-300">Submit</button>
        </form>
      ) : (
        <div className="text-green-400 text-center mt-8">
          Thank you! Your booking request has been received.
        </div>
      )}
    </div>
  );
}
