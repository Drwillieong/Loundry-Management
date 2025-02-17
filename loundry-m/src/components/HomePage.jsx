import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-pink-400 p-4 flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold">Wash It Izzy</h1>
        <div className="space-x-6">
          <a href="#services" className="hover:underline font-bold">Service and Pricing</a>
          <a href="#contact" className="hover:underline font-bold">Contact</a>
          <button className="bg-white text-pink-400 px-4 py-2 rounded-lg">Login</button>
        </div>
      </nav>

       {/* Hero Section */}
       <div className="relative text-left py-35 px-10 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/loundry BG.webp')" }}>
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold italic  text-white">EVERY LAUNDRY MAKES A DIFFERENCE</h1>
          <p className="mt-4 text-lg text-white">We offer drop-off, self-service, pick-up & delivery, and dry-cleaning services to make laundry day Izzy-ier for you.</p>
          <div className="mt-6 flex rounded-4xl">
            <button className="bg-white text-black px-6 py-3 rounded-l-4xl border-r-2  shadow-md font-medium">Pick up Tonight</button>
            <button className="bg-white text-black px-6 py-3 rounded-r-4xl shadow-md font-medium flex items-center">Where Add address<span className="ml-2 bg-pink-400 text-white p-2 rounded-full">➝</span></button>
          </div>
        </div>
      </div>

      {/* Service and Pricing Section */}
      <section id="services" className="py-20 px-10 text-center">
        <h3 className="text-3xl font-bold">Our Services & Pricing</h3>
        <p className="mt-4 text-lg">We offer affordable and quality laundry services.</p>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white p-6 rounded-lg shadow-md border">Self-service Wash & Dry</li>
          <li className="bg-white p-6 rounded-lg shadow-md border">240 per 5 kilo</li>
          <li className="bg-white p-6 rounded-lg shadow-md border">Free Pick up</li>
        </ul>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand & About */}
          <div>
            <h3 className="text-xl font-bold">Wash It Izzy</h3>
            <p className="mt-2 text-gray-400">God will provide.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <p className="mt-2 text-gray-400">Email: washitizzy@email.com</p>
            <p className="text-gray-400">Phone: 123456789</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; 2025 Wash It Izzy - All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
