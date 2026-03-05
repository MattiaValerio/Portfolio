import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ServicesPage } from "@/components/services-page";

export default function ServiziPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
}