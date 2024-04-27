"use client";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";
import Welcome from "@/components/WelcomeAfterSignUp/Welcome";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center py-[2%] gap-[10vh] px-[5%]">
      <Navbar />
      <HeroSection />
      <Testimonials />
    </div>
  );
};

export default page;
