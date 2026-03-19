"use client";
import { toast } from "react-toastify";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Contact Form Data:", data);

    toast.success("Message sent successfully! We'll get back to you soon. 🚀", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail size={24} />,
      label: "Email Us",
      value: "support@ nextgadgets .com",
      desc: "Send us your queries anytime!",
    },
    {
      icon: <HiOutlinePhone size={24} />,
      label: "Call Us",
      value: "+880 1234 567 890",
      desc: "Mon-Fri from 10am to 6pm.",
    },
    {
      icon: <HiOutlineMapPin size={24} />,
      label: "Visit Us",
      value: "Tech Plaza, Dhaka, BD",
      desc: "Come say hi at our HQ.",
    },
  ];

  return (
    <div className="bg-(--bg-primary) text-(--text-main) min-h-screen transition-colors duration-300">
      {/* Header Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase mb-6">
            <HiOutlineChatBubbleLeftRight /> Contact Support
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6">
            LET&apos;S START A <span className="text-brand">CONVERSATION</span>
          </h1>
          <p className="max-w-2xl mx-auto opacity-60 text-lg">
            Have a question about a product or a bulk order? Our team of tech
            experts is ready to help you 24/7.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-brand/5 border border-brand/10 flex gap-6 group hover:border-brand/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold opacity-50 uppercase tracking-widest mb-1">
                      {info.label}
                    </h3>
                    <p className="text-xl font-black mb-1">{info.value}</p>
                    <p className="text-sm opacity-60">{info.desc}</p>
                  </div>
                </div>
              ))}

              {/* Decorative Social Box */}
              <div className="p-8 rounded-3xl bg-gray-900 text-white overflow-hidden relative group">
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-2">
                    Follow our Journey
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Join 50k+ tech enthusiasts on social media.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand transition-colors cursor-pointer"></div>
                    <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand transition-colors cursor-pointer"></div>
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 text-9xl font-black text-white/5 rotate-12 group-hover:rotate-0 transition-transform">
                  NEXT
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-(--bg-primary) border-2 border-brand/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand/5">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-70 ml-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-brand/5 border border-brand/10 focus:border-brand focus:outline-none transition-all text-gray-600 dark:text-gray-400 appearance-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-70 ml-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-brand/5 border border-brand/10 focus:border-brand focus:outline-none transition-all text-gray-600 dark:text-gray-400 appearance-none"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold opacity-70 ml-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full px-6 py-4 rounded-2xl bg-brand/5 border border-brand/10 focus:border-brand focus:outline-none transition-all text-gray-600 dark:text-gray-400 appearance-none"
                  >
                    <option className="text-black" value="support">
                      Technical Support
                    </option>
                    <option className="text-black" value="order">
                      Order Inquiry
                    </option>
                    <option className="text-black" value="business">
                      Business Partnership
                    </option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold opacity-70 ml-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-brand/5 border border-brand/10 focus:border-brand focus:outline-none transition-all text-gray-600 dark:text-gray-400 resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full py-5 bg-brand text-white font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-orange-500/25 uppercase tracking-widest"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
