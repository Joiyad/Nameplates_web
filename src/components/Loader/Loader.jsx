import React from "react";
import Lottie from "lottie-react";
import loaderData from "../../assets/animations/loader.json";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[20vh] md:w-[30vh] h-[30vh] md:h-[50vh]">
        <Lottie animationData={loaderData} />
        <h1 className="text-center font-bold text-2xl">Birla Copper Dahej</h1>
      </div>
    </div>
  );
};

export default Loader;
