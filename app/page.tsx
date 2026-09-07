import About from "../components/home/About";
import CategoryA from "../components/home/CategoryA";
import CategoryB from "../components/home/CategoryB";
import Header from "../components/layout/Header";
import Herosection from "../components/home/Herosection";
import Navbar from "../components/layout/Navbar";
import Offers from "../components/home/Offers";
import Product from "../components/home/Product";
import Services from "../components/home/Services";
import SpecialServices from "../components/home/SpecialServices";
import SupportButton from "../components/home/SupportButton";


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
      <SpecialServices />
      <CategoryB />
      <About />
      <SupportButton />
    </div>
  );
}
