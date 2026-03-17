"use client";
import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { toast } from "react-toastify";

const Newsletter = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    if (email) {
      toast.success("Thank you for subscribing! 🚀");
      form.reset();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-(--bg-primary) transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="relative overflow-hidden rounded-4xl bg-brand/10 border-2 border-brand/20 px-6 py-12 md:p-16 text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand text-white shadow-lg shadow-orange-500/30 mb-4 mx-auto">
              <HiOutlineMailOpen size={32} />
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-5xl font-black text-(--text-main) tracking-tighter">
              Don&apos;t Miss Our{" "}
              <span className="text-brand">Future Tech</span>
            </h2>
            <p className="text-sm md:text-lg opacity-70 text-(--text-main) leading-relaxed">
              Subscribe to our newsletter and get exclusive early access to new
              product launches, tech news, and special member-only discounts.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center gap-3 pt-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full flex-1 px-6 py-4 rounded-full bg-(--bg-primary) border-2 border-brand/20 text-(--text-main) focus:border-brand focus:outline-none transition-all placeholder:opacity-50"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-brand text-white font-bold rounded-full hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-orange-500/20 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>

            <p className="text-[10px] md:text-xs opacity-50 text-(--text-main)">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
