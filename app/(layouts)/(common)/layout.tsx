import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Shared/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-min-h-screen flex-col bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <Navbar />
      <div className="py-5"></div>
      <main className="grow container mx-auto px-4 py-8">{children}</main>

      <Footer />
    </div>
  );
};

export default CommonLayout;
