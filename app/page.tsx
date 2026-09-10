import About from "../components/home/Footer";
import CategoryA from "../components/home/CategoryA";
import CategoryB from "../components/home/CategoryB";
import Header from "../components/layout/Header";
import Herosection from "../components/home/Herosection";
import Navbar from "../components/layout/Navbar";
import Offers from "../components/home/Offers";
import Product from "../components/home/Product";
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
      <Product />
      <CategoryA />
      <ServiceShowcase />
      <CategoryB />
      <Footer />
      <SupportButton />
    </div>
  );
}
