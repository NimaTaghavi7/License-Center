import About from "./components/About";
import CategoryA from "./components/CategoryA";
import CategoryB from "./components/CategoryB";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Product from "./components/Product";
import Services from "./components/Services";
import SpecialServices from "./components/SpecialServices";
import SupportButton from "./components/SupportButton";


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
