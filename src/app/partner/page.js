import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Image src={'/partner.jpg'} alt="logo" width={1550} style={{ margin: "auto" }} height={500}/>
      <div>
        <h1 className="p-2 lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-serif font-bold flex justify-center">
          Our Partners
        </h1>
        <div className="p-2 block lg:ml-[330px] lg:mr-[300px] md:ml-[230px] md:mr-[200px] sm:ml-[130px] sm:mr-[100px] ml-[30px] mr-[10px]">
          <p className="p-2 flex justify-center">
            Ranging from national governments to knowledge institutions, and
            from non-profit organizations to companies, our partners span five
            continents and multiple sectors. Each focus on achieving sustainable
            change in different ways.
          </p>
          <p className="p-2 flex justify-center">
            In short, each partnership is unique. We focus on creating
            long-lasting relationships with our partners so that we can support
            them at every step of their data journey in the best way possible.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-6 p-5 lg:ml-[280px] lg:mr-[250px] md:ml-[180px] md:mr-[150px] sm:ml-[80px] sm:mr-[50px] ml-[30px] mr-[10px]">
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
        <Image src={"/black-eagle-logo.jpg"} alt="logog" width={200} height={100}/>
      </div>
    </div>
  );
};

export default Page;
