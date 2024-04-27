import React from "react";
import { FaStar } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const GridElement = ({nom}) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[1px solid #f5f5f5] px-3 py-5 rounded-xl gap-20">
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sint
        praesentium debitis nostrum totam amet perspiciatis a temporibus optio
        obcaecati.lorem20 Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ex accusantium eveniet hic veniam fugiat, culpa, commodi ipsum
        nisi esse odio aspernatur consectetur harum aliquid corporis excepturi
        eos doloremque quo recusandae.
      </p>
      <div className="contact flex flex-row gap-4 items-center">
        <div className="pdp">
          <RxAvatar />
        </div>
        <div className="nameRating flex flex-col justify-center gap-2">
          <h2 className="font-semibold text-sm">{nom}</h2>
          <div className="flex flex-row items-center gap-2">
            <FaStar color="#FFC250" />
            <FaStar color="#FFC250" />
            <FaStar color="#FFC250" />
            <FaStar color="#FFC250" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridElement;
