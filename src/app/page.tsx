import Section1 from "next@js/app/section1/page";
import Section2 from "next@js/app/section2/page";
import Section3 from "next@js/app/section3/page";
import Section4 from "next@js/app/section4/page";
import Section5 from "next@js/app/section5/page";
import Section6 from "next@js/app/section6/page";
import Section7 from "next@js/app/section7/page";
import Section8 from "next@js/app/section8/page";
import Section9 from "next@js/app/section9/page";
import Section10 from "next@js/app/section10/page";
import Section11 from "next@js/app/section11/page";
import Section12 from "next@js/app/section12/page";
import BackgroundMusic from "next@js/app/components/music/page";

export default function Home() {
  return (
    <main className="lg:max-w-md relative mx-auto bg-[#BEB4A3] text-black">
      <Section1 />
      <Section2 />
      <Section3 />
      <section className="bg-[#BEB4A3] top-0 -mt-3">
        <img src="/img/batik1.png" className="w-full" alt="" />
      </section>
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <section className="bg-[#BEB4A3] top-0 -mt-3">
        <img src="/img/batik1.png" className="w-full" alt="" />
      </section>
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <BackgroundMusic src="/testMusic.mp3" />
    </main>
    )
}
