import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-(--bg-primary) text-(--text-main) transition-colors duration-300">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left pt-10 lg:pt-0">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full border border-brand/30 bg-brand/10 text-brand text-[10px] md:text-sm font-bold uppercase tracking-widest animate-pulse">
            New Arrival 2026
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
            Next Generation <br />
            <span className="text-brand">Gadgets</span> for You
          </h1>

          <p className="text-sm md:text-lg opacity-70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience the future of technology today. Explore our curated
            collection of smart devices designed to elevate your lifestyle with
            efficiency and style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start pt-2">
            <Link
              href="/all-products"
              className="bg-brand text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-all shadow-xl shadow-orange-500/20 active:scale-95 text-center"
            >
              Shop Collection
            </Link>
            <Link
              href="/about"
              className="group border-2 border-brand text-brand px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-brand hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Learn More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4 opacity-60 text-[12px] md:text-sm font-medium">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-(--text-main)">
                15k+
              </span>
              <span>Happy Customers</span>
            </div>
            <div className="w-px h-8 md:h-10 bg-brand/20" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-(--text-main)">
                24/7
              </span>
              <span>Expert Support</span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Element with Image */}
        <div className="relative group mt-8 lg:mt-0">
          <div className="relative z-20 w-full aspect-square max-w-[320px] md:max-w-125 mx-auto bg-gray-100/50 dark:bg-gray-900 rounded-4xl border-2 border-brand/10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl">
            {/* Background Layer: Tech Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-brand/10 text-7xl md:text-9xl font-black rotate-12 select-none uppercase">
                Tech
              </div>
            </div>

            {/* Product Image Container */}
            <div className="relative z-10 w-[85%] h-[85%] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3">
              <img
                src="https://i.ibb.co/PZvmX0W5/g1.png"
                alt="Featured Product"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,140,0,0.3)]"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute w-1/2 h-1/2 bg-brand/20 blur-[100px] rounded-full z-0 pointer-events-none" />
          </div>

          {/* Floating Discount Card */}
          <div className="absolute -bottom-4 -left-4 z-30 bg-(--bg-primary) p-3 md:p-4 rounded-2xl shadow-2xl border border-brand/20 hidden sm:flex animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm">
                %
              </div>
              <div>
                <p className="text-[10px] opacity-60">Up to</p>
                <p className="text-sm md:text-base font-bold">40% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
