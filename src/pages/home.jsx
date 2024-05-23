import React from "react";
import AboutUs from "../components/AboutUs";
import WhatWeDo from "../components/WhatWeDo";
import Testimonials from "../components/Testimonials";
import OurIndustry from "../components/OurIndustry";
import ContactUs from "../components/ContactUs";
import Support from "../components/Support";
import Integrity from "../components/Integrity";
import HomeBanner from "../components/HomeBanner";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutUs />
      <WhatWeDo />
      <Testimonials />
      <Support />
      <OurIndustry />
      <ContactUs
        logo={"/assets/svg/unisol-logo.svg"}
        img={"/assets/images/contact-us-pic.png"}
      />
      <Integrity
        integerityPic={"../assets/images/integrity-pic.png"}
        Integrity={"Integerity"}
        integerityName={"Michelle Obama"}
        integerityText={
          "‘’We learned about honesty and integerity-that the truth matters... that you don't take shortcuts or play by your own set of rules... and success doesn't count unless you earn it fair and square.’’"
        }
      />
    </div>
  );
}
