import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductTable from "@/components/product-table";

export default function Home() {
  return (
    <div className="w-max bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}
