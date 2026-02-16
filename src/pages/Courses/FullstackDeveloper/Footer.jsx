import React from "react";

import logo from "../FullstackDeveloper/img/vts-logo.png";

import {
  MapPin,
  Mail,
  Phone,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-[#f5f2f1] pt-16 px-6">

      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10 pb-12 border-b">


        {/* ABOUT */}
        <div>

          <img src={logo} className="h-10 mb-4" />

          <h3 className="text-red-700 font-semibold mb-3">
            ABOUT VIKAS TECH SOLUTIONS
          </h3>

          <p className="text-gray-600 leading-relaxed">
            We provide personalized mentorship, live doubt-solving,
            coding contests, and career guidance to help students
            and professionals achieve their goals.
          </p>

        </div>



        {/* QUICK LINKS */}
        <div>

          <h3 className="text-red-700 font-semibold mb-4">
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-gray-600">

            <li className="hover:text-red-700 cursor-pointer">About</li>
            <li className="hover:text-red-700 cursor-pointer">Master Class</li>
            <li className="hover:text-red-700 cursor-pointer">Contests</li>
            <li className="hover:text-red-700 cursor-pointer">Resume Review</li>
            <li className="hover:text-red-700 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-700 cursor-pointer">Contact</li>

          </ul>

        </div>



        {/* CONTACT */}
        <div>

          <h3 className="text-red-700 font-semibold mb-4">
            CONTACT
          </h3>


          {/* Address */}
          <div className="flex gap-3 mb-4">

            <MapPin className="text-red-700 mt-1" size={20} />

            <div>
              <div className="font-semibold">Address:</div>

              <div className="text-gray-600">
                Vikas Tech Solutions,
                <br />
                3rd Floor, ABC Tower,
                <br />
                Sector-15, Noida,
                Uttar Pradesh, India
              </div>
            </div>

          </div>


          {/* Email */}
          <div className="flex gap-3 mb-4">

            <Mail className="text-red-700 mt-1" size={20} />

            <div>
              <div className="font-semibold">Email:</div>

              <div className="text-gray-600">
                support@vikastechsolutions.com
              </div>
            </div>

          </div>


          {/* Phone */}
          <div className="flex gap-3">

            <Phone className="text-red-700 mt-1" size={20} />

            <div>
              <div className="font-semibold">Phone Number:</div>

              <div className="text-gray-600">
                +91 98765 43210
              </div>
            </div>

          </div>

        </div>



        {/* SOCIAL */}
        <div>

          <h3 className="text-red-700 font-semibold mb-4">
            GET IN TOUCH
          </h3>


          <div className="flex gap-5">

            <Youtube className="cursor-pointer hover:text-red-700" />
            <Facebook className="cursor-pointer hover:text-red-700" />
            <Twitter className="cursor-pointer hover:text-red-700" />
            <Instagram className="cursor-pointer hover:text-red-700" />
            <Linkedin className="cursor-pointer hover:text-red-700" />

          </div>

        </div>

      </div>



      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto py-6 flex justify-between items-center">


        <div className="text-red-700 text-sm">
          Copyright © 2025 Vikas Tech Solutions
        </div>


        <div className="flex gap-8 text-gray-700">

          <span className="hover:text-red-700 cursor-pointer">
            Our Programs
          </span>

          <span className="hover:text-red-700 cursor-pointer">
            Our Products
          </span>

          <span className="hover:text-red-700 cursor-pointer">
            About us
          </span>

          <span className="hover:text-red-700 cursor-pointer">
            Blogs
          </span>

        </div>

      </div>

    </footer>
  );
}
