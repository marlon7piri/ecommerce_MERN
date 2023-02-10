import React from "react";

export default function Estadisticas() {
  return (
    <div className="text-center mt-[100px] w-full h-full overflow-hidden"  data-aos="fade-up"
    
  >
      <div className="text-5xl mb-[50px] mt-[50px] ">
        <p className=" text-gray-700"><span className="text-green-500 font-semibold ">6000 + Buyers</span> Across <br/>the World</p>
      </div>
      <div className="flex justify-center gap-20">
        <div>
          <p className="text-4xl text-gray-700">
            2,500 <span className="text-green-500">+</span>
          </p>
          <p className="text-gray-500">Customer</p>
        </div>
        <div> <p className="text-4xl text-gray-700">
            5,000 <span className="text-green-500">+</span>
          </p>
          <p className="text-gray-500">Montly Blog Readers</p></div>
        <div> <p className="text-4xl text-gray-700">
            17M <span className="text-green-500">+</span>
          </p>
          <p className="text-gray-500">Social Follower</p></div>
      </div>
    </div>
  );
}
