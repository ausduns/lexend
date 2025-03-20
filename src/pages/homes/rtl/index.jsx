import RtlConverter from "@/components/common/RtlConverter";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Blogs from "@/components/homes/home-4/Blogs";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Cta2 from "@/components/homes/home-4/Cta2";
import Facts from "@/components/homes/home-4/Facts";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/homes/home-4/Features";
import Hero from "@/components/homes/home-4/Hero";
import Pricing from "@/components/homes/home-4/Pricing";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Rtl Home Page || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function HomePageRtl() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <RtlConverter />
      <div dir="rtl">
        <div className="page-wrapper rtl  uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
          <Header3 />
          <div id="wrapper" className="wrap">
            <Hero />
            <Brands />
            <Facts />
            <Features />
            <Cta />
            <Pricing />
            <Testimonials />
            <Faq />
            <Team />
            <Blogs />
            <Cta2 />
          </div>
          <Footer3 />
        </div>{" "}
      </div>
    </>
  );
}
