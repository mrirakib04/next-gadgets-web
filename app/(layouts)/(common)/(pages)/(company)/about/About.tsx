"use client";
import Link from "next/link";
import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineArrowTrendingUp,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

const About = () => {
  const stats = [
    { label: "Est. Year", value: "2024" },
    { label: "Global Partners", value: "40+" },
    { label: "Gadgets Sold", value: "120k" },
    { label: "Happy Clients", value: "85k" },
  ];

  const values = [
    {
      title: "Curation Excellence",
      desc: "We don't just list products; we stress-test every gadget to ensure it meets the 'Next-Gen' standard.",
      icon: <HiOutlineSparkles size={28} />,
    },
    {
      title: "Customer Centricity",
      desc: "Our ecosystem revolves around user experience, from seamless browsing to lightning-fast after-sales support.",
      icon: <HiOutlineUserGroup size={28} />,
    },
    {
      title: "Tech Innovation",
      desc: "We stay ahead of the curve, bringing you AI-integrated and IoT devices before they hit the mainstream market.",
      icon: <HiOutlineLightBulb size={28} />,
    },
    {
      title: "Eco-Conscious Tech",
      desc: "We prioritize brands that care about the planet, focusing on sustainable packaging and energy-efficient electronics.",
      icon: <HiOutlineGlobeAlt size={28} />,
    },
  ];

  const milestones = [
    {
      year: "2024",
      event:
        "Next Gadgets was born in a small tech hub with a vision to disrupt e-commerce.",
    },
    {
      year: "2025",
      event:
        "Expanded to 10+ countries and partnered with top-tier silicon valley startups.",
    },
    {
      year: "2026",
      event:
        "Ranked #1 for 'Most Reliable Tech Retailer' in the digital lifestyle category.",
    },
  ];

  return (
    <div className="bg-(--bg-primary) text-(--text-main) min-h-screen transition-colors duration-300">
      {/* 1. Hero Section: Bold & Minimal */}
      <section className="pt-20 pb-32 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase mb-8">
            <HiOutlineCheckBadge className="animate-pulse" /> The Standard of
            Excellence
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 italic">
            DEFINING THE <br />{" "}
            <span className="text-brand">NEXT GENERATION</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-60 font-medium leading-relaxed">
            At Next Gadgets, we believe that the gap between humanity and
            technology should be seamless. We are not just a marketplace; we are
            the bridge to your future self.
          </p>
        </div>
      </section>

      {/* 2. Visual Split Section: Story & Image Placeholder */}
      <section className="py-20 bg-brand/5 border-y border-brand/10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              How we started <span className="text-brand">from Zero.</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand rounded-full"></div>
            <p className="opacity-70 text-lg">
              It all began with a simple frustration: why is it so hard to find
              gadgets that actually work as promised? In a world flooded with
              e-waste, we decided to build a sanctuary for quality.
            </p>
            <p className="opacity-70 text-lg">
              Our team consists of engineers, designers, and tech enthusiasts
              who live and breathe innovation. We don&apos;t follow trends; we
              identify the tools that will change your life.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden border-2 border-brand/20 shadow-2xl flex items-center justify-center group">
              <span className="text-brand/20 text-9xl font-black group-hover:scale-110 transition-transform select-none">
                NEXT
              </span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand text-white p-8 rounded-2xl hidden md:block">
              <HiOutlineArrowTrendingUp size={40} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Grid: Large & Modern */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-5xl md:text-7xl font-black text-(--text-main) group-hover:text-brand transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-bold opacity-40 uppercase tracking-[0.2em] mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values: Grid Layout */}
      <section className="py-24 bg-(--bg-primary)">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Our Core <span className="text-brand">Values</span>
            </h2>
            <p className="opacity-50 mt-4 text-lg">
              The DNA that drives every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-10 rounded-4xl bg-brand/5 border border-brand/5 hover:border-brand/20 transition-all"
              >
                <div className="text-brand mb-6">{v.icon}</div>
                <h3 className="text-2xl font-black mb-4 uppercase italic">
                  {v.title}
                </h3>
                <p className="opacity-60 leading-relaxed text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline / Milestones */}
      <section className="py-16 border-t border-brand/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-brand/20 pl-8 relative"
              >
                <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-brand shadow-[0_0_15px_rgba(255,140,0,0.5)]"></div>
                <div className="text-4xl font-black text-brand leading-none">
                  {m.year}
                </div>
                <div className="text-xl md:text-2xl font-medium opacity-80">
                  {m.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action / Final Mission */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-brand sm:rounded-[4rem] rounded-[3rem] p-4 py-8 sm:p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              READY TO ENTER THE FUTURE?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10">
              Join thousands of tech enthusiasts who have already upgraded their
              lives with Next Gadgets.
            </p>
            <Link
              href={"/all-products"}
              className="sm:px-12 py-5 px-4 sm:w-fit w-full bg-white sm:text-base text-sm text-brand font-black rounded-full hover:scale-105 transition-transform shadow-2xl text-nowrap"
            >
              BROWSE ALL GADGETS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
