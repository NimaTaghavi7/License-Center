import CategoryBanners from "../components/home/CategoryBanners";
import ProductBanners from "../components/home/ProductBanners";
import Header from "../components/layout/Header";
import Herosection from "../components/home/Herosection";
import Navbar from "../components/layout/Navbar";
import Offers from "../components/home/Offers";
import BestSellers from "../components/home/BestSellers";
import Category from "../components/home/Category";
import ProductShowcase from "../components/home/ProductShowcase";
import SupportButton from "../components/home/SupportButton";
import Footer from "../components/home/Footer"


export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />  
      <Offers />
      <Category />
      <BestSellers />
      <CategoryBanners />
      <ProductShowcase />
      <ProductBanners />
      <Footer />
      <SupportButton />
    </div>
  );
}
