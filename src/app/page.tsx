"use client";
import { useState, useEffect } from "react";
import axios from "next@js/lib/axios";
import { setCookie, getCookie } from "cookies-next";
import React from "react";
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
import LoadingScreen from "./components/loading/page";


export default function Home() {
  const [currentURL, setCurrentURL] = useState("");
  const [guestName, setGuestName] = useState("");
  const [data, setData] = useState([]);
  const [myCookie, setMyCookie] = useState<any>("");
  const [isItemNotPaid, setIsItemNotPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [music, setMusic] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [section1Visible, setSection1Visible] = useState(true);


  const handleOpenNextSections = () => {
    setSection1Visible(false); // Mengubah visibilitas Section1 menjadi tidak terlihat
};
useEffect(() => {
  if (typeof window !== "undefined") {
    setCurrentURL(window.location.href);
  }
}, []);

if (currentURL) {
  const splitSlash = currentURL.split("https://");
  const domain = splitSlash[1]?.split(".")[0];
  setCookie("subDomain", domain);
  // console.log(domain);
  // setCookie("subDomain", "adam-jihan");
}



useEffect(() => {
  const domain = getCookie("subDomain");
  setMyCookie(domain);

  let splitGuest = currentURL.split("?")[1];
  splitGuest = splitGuest?.split("%20")
    ? splitGuest.replaceAll("%20", " ")
    : splitGuest;

  setGuestName(splitGuest);
});

useEffect(() => {
  if (myCookie) {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `/api/invitation/${getCookie("subDomain")}`
        );
        setData(res.data);
        setMusic(res.data?.music?.path_music ?? res.data?.music?.embed_link);

        if (res?.data?.isItemNotPaid.length > 0) {
          setIsItemNotPaid(true)
        } else {
          setIsItemNotPaid(false)
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setErrorMsg("Terjadi kesalahan saat memuat data.");
      }
    };
   
    getData();
  }
}, [myCookie]);

  return (
    <div >
    {isLoading ? (
      <LoadingScreen />
    ) : (
      <>
          {errorMsg ? (
            <div className="text-red-500 text-center h-screen">{errorMsg}</div>
          ) : (
            <>
               {isItemNotPaid && (
            <div
              className="w-full h-screen bg-[#000000d7] z-[9999] fixed flex items-center justify-center text-white text-2xl text-center font-dm-serif-text leading-loose">
              Tambahan Item Belum Dikonfirmasi <br />
              Silahkan Lakukan Pembayaran
            </div>
          )}
    <main className="lg:max-w-md relative mx-auto bg-[#BEB4A3] text-black scroll-smooth overflow-hidden">
      
      {section1Visible ? (
        <Section1
        className={`section-animation ${section1Visible ? 'visible' : ''}`} 
        onOpenNextSections={handleOpenNextSections} data={data} guestName={guestName} />
      ) : (
        <>
        <Section2 data={data} />
        <Section3 data={data} />
        <section className="bg-[#BEB4A3] top-0 -mt-3">
          <img src="/img6/batik1.png" className="w-full" alt="" />
        </section>
        <Section4 data={data} />
        <Section5 data={data} />
        <Section6 data={data} />
        <Section7 data={data} />
        <Section8 data={data}/>
        <section className="bg-[#BEB4A3] top-0 -mt-3">
          <img src="/img6/batik1.png" className="w-full" alt="" />
        </section>
        <Section9 data={data}/>
        <Section10 data={data}/>
        <Section11 data={data}/>
        <Section12 data={data}/>
        <BackgroundMusic src={music ? music : "/testMusic.mp3"} />
          </>
      )}
    </main>
    </>
            )}    
        </>
     
      )}
    </div>
    )
}
