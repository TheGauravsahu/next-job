import FooterCTA from "@/components/general/footer-cta";
import Hero from "@/components/pages/home/Hero";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Hero />
      <div className="p-8">
        <FooterCTA />
      </div>
    </div>
  );
}
