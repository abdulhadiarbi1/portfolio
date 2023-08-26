import React from "react";
import Parallex from "../components/Parallex";
import Mobile from "../components/Header/MobileNav/Mobile";
import Header from "../components/Header/Index";
import Text from "./Text";
import Title from "./Title";
import Image from "next/image";
import Skills from "./Skills";
const page = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute right-0">
          <Header writing={false} />
        </div>
        <Mobile />

        <Parallex />
      </div>
      <Title />
      <div className="mt-32">
        <div className="flex flex-col sm:flex-row  sm:justify-between sm:px-10">
          <div className="flex justify-center mb-16 text-center">
            <div className="flex fle-row sm:flex-col gap-5 sm:gap-8">
              <Text
                h1={"Visit Site"}
                h2={"bits.com"}
                underline={true}
                src={"https://www.google.com/"}
              />
              <Text h1={"Client"} h2={"Abdul hadi"} underline={false} />
              <Text h1={"Type"} h2={"Software House"} underline={false} />
              <Text h1={"Industry"} h2={"IT"} underline={false} />
            </div>
          </div>
          <div className="text-base sm:text-3xl w-auto sm:w-[500px]">
            <h1>
              Created to democratize access to satellite imagery, SkyFi allows
              users to easily commission custom satellite photographs and video
              as well as draw from contemporary, archived images. Through use of
              the SkyFi app, businesses and individuals can now task a satellite
              to photograph a specific location allowing users to better
              understand geography in any context — from real estate to
              agriculture to shipping.
              <br />
              <br />
              SkyFi approached Decimal prior to launching their app to design
              and develop a marketing site that would inform people about the
              product and reveal some of its functionality, leaving the user
              wowed and excited to learn more about the app.
            </h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-6 mt-64 overflow-hidden">
        <div className="relative">
        <div className="flex justify-center ">
          <Image src={"/desktop.png"} alt="desktop" width={600} height={600}  className=""/>
        </div>
        <div>
          <video autoPlay loop muted className="absolute  w-[700px] h-[700px] -top-[160px] left-[260px]   ">
          <source src="/desktopvideo.mp4" type="video/mp4"/>
          </video>
        </div>
        </div>
        <div className="mt-44">
          <h1 className="text-xl   sm:text-3xl lg:text-4xl flex justify-center uppercase font-semibold">
            Next.js, Tailwind CSS, and React Powered Minimalist Website with
            Interactive Features 
          </h1>
          <p className="text-[#8d8d8dbb] text-lg sm:text-3xl">
            <br />
            Welcome to our latest project, a cutting-edge website built using a
            powerful stack of technologies including Next.js, Tailwind CSS,
            React, and Framer Motion. This meticulously crafted platform not
            only embraces the principles of minimalism in design but also
            focuses on delivering a lightning-fast, responsive, and seamless
            user experience.
          </p>
        </div>
        <div className="flex justify-center mt-16 w-screen">
          <div className="flex flex-col sm:gap-16 sm:flex-row ">
            <Image src={"/m1.png"} alt="desktop" width={250} height={250} />
            <Image src={"/m2.png"} alt="desktop" width={250} height={250} />
            <Image src={"/m3.png"} alt="desktop" width={250} height={250} />
          </div>
        </div>

        <div>
          <Skills/>
        </div>
        
        


        </div>
      
    </>
  );
};

export default page;
