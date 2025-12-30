import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { About } from "./(auth)/_components/about";
import { Services } from "./(auth)/_components/services";
import { Trainers } from "./(auth)/_components/trainers";
import { Reviews } from "./(auth)/_components/reviews";
import { Faq } from "./(auth)/_components/faq";
import { Footer } from "@/components/footer";
import { Plans } from "./(auth)/_components/plans";

export default function Home() {
  return (
    <div className="relative">
      <Header showNav />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Plans />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
}
