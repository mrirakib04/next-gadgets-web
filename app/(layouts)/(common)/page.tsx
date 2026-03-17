import HeroSection from "@/components/Common/Home/HeroSection";
import CategoryGrid from "@/components/Common/Home/CategoryGrid";
import FeaturedProducts from "@/components/Common/Home/FeaturedProducts";
import PromotionBanner from "@/components/Common/Home/PromotionBanner";
import FlashSale from "@/components/Common/Home/FlashSale";
import NewArrivals from "@/components/Common/Home/NewArrivals";
import Testimonials from "@/components/Common/Home/Testimonials";
import Newsletter from "@/components/Common/Home/Newsletter";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <PromotionBanner />
      <FlashSale />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
