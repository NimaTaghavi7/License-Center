import CategoryTop from "../components/home/CategoryTop";
import ProductBanners from "../components/home/ProductBanners";
import Header from "../components/layout/Header";
import Herosection from "../components/home/Herosection";
import Navbar from "../components/layout/Navbar";
import Offers from "../components/home/Offers";
import BestSellers from "../components/home/BestSellers";
import Services from "../components/home/Services";
import ServiceShowcase from "../components/home/ServiceShowcase";
import SupportButton from "../components/home/SupportButton";
import Footer from "../components/home/Footer"


export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />  
      <Offers />
      <Services />
      <BestSellers />
      <CategoryTop />
      <ServiceShowcase />
      <ProductBanners />
      <Footer />
      <SupportButton />
    </div>
  );
}
