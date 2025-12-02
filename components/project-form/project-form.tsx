"use client";

import React from "react";
import { sendProjectEmail } from "../../actions/sendProjectEmail";
import toast from "react-hot-toast";

const ProjectForm = () => {
  return (
    <div className="bg-white min-h-screen p-4 text-black py-20">
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex gap-4 items-center text-black mb-6">
          <div className="w-10 h-0.5 bg-primary" />
          <h4 className="text-lg font-medium">Start Your Project</h4>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Let&apos;s Build Your Business
          </h1>
          <h1 className="text-primary text-3xl md:text-4xl lg:text-6xl font-bold">
            or Idea Into a Website or Mobile App
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            Fill out the form below and we&apos;ll get back to you within 24
            hours to discuss your project.
          </p>
        </div>

        <form
          action={async (formData) => {
            const { data, error } = await sendProjectEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Project submission sent successfully!");
            window.location.reload();
          }}
          className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                name="name"
                className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                required
                maxLength={500}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                placeholder="your.email@example.com"
                name="email"
                type="email"
                className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                required
                maxLength={500}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                placeholder="+1 (555) 000-0000"
                name="phoneNumber"
                type="tel"
                className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                required
                maxLength={500}
              />
            </div>

            {/* Budget Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="budget"
                className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
              >
                Project Budget <span className="text-red-500">*</span>
              </label>
              <input
                id="budget"
                type="text"
                placeholder="e.g., $5,000 - $10,000"
                name="budget"
                className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                required
                maxLength={500}
              />
            </div>
          </div>

          <div className="mb-6">
            {/* Timeline Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="timeline"
                className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
              >
                Project Timeline <span className="text-red-500">*</span>
              </label>
              <input
                id="timeline"
                type="text"
                placeholder="e.g., 3 months, ASAP, By December 2025"
                name="timeline"
                className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                required
                maxLength={500}
              />
            </div>
          </div>

          <div className="mb-6">
            {/* Project Description Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="projectDescription"
                className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
              >
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                placeholder="Tell us about your project... What features do you need? Who is your target audience? What problems are you solving?"
                name="projectDescription"
                required
                maxLength={5000}
                rows={6}
                className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none bg-white"
              />
              <p className="text-sm text-gray-500 mt-1">
                Be as detailed as possible to help us understand your vision
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-4">
            <p className="text-sm text-gray-600">
              <span className="text-red-500">*</span> All fields are required
            </p>
            <button
              className="buttonwhite bg-primary hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold w-full md:w-auto"
              type="submit"
            >
              Submit Project Request
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p className="text-base">
            Questions? Contact us directly at{" "}
            <a
              href="mailto:bylogicleads@gmail.com"
              className="text-primary hover:underline font-semibold"
            >
              bylogicleads@gmail.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+2347035172208"
              className="text-primary hover:underline font-semibold"
            >
              +234 703 517 2208
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
