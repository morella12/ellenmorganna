import { Hero } from "@/components/sections/Hero";
import { WhoFor } from "@/components/sections/WhoFor";
import { Cases } from "@/components/sections/Cases";
import { ProcessAndAbout } from "@/components/sections/ProcessAndAbout";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <WhoFor />
      <Cases />
      <ProcessAndAbout />
      <Contact />
    </>
  );
}
