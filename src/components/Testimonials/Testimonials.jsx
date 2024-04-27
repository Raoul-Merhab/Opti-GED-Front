import React from "react";
import GridSection from "./GridSection";

const Testimonials = () => {
  return (
    <div className="testimonials flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold text-black">Ce que disent nos clients</h1>
      <p className="text-center text-lg w-2/3">
      Merci pour votre confiance en Opti GED ! Nous sommes reconnaissants pour vos retours et nous nous engageons à fournir les meilleurs services. Découvrez ce que nos clients ont à dire sur leur expérience avec nous.
      </p>
      <GridSection />
    </div>
  );
};

export default Testimonials;
