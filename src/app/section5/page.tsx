"use client";
import { useState, useEffect } from "react";

export default function Section5 () {
    const targetTime = 20 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000 + 30 * 60 * 1000 + 7 * 1000; // 1 day + 2 hours + 30 minutes + 7 seconds in milliseconds
    const [timeRemaining, setTimeRemaining] = useState(targetTime);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining((prevRemaining) => {
          const remainingTime = prevRemaining - 1000;
          return remainingTime >= 0 ? remainingTime : targetTime;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (time:any) => {
      const pad = (n:any) => (n < 10 ? `0${n}` : n);
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
      return { days, hours, minutes, seconds };
    };
  
    const { days, hours, minutes, seconds } = formatTime(timeRemaining);
  

    return (
        <section className="bg-[#BEB4A3] py-12 px-3 sm:px-20 lg:px-3 w-full -mt-1">
            <div className="w-full flex flex-wrap mx-auto relative">
                <div className="p-2 flex flex-wrap w-full items-center content-center text-black">
                    <section className="bg-[#BEB4A3] z-50 w-full rounded-3xl border-solid border border-white shadow-slate-800 shadow-md relative">
                        <div className=" rounded-3xl opacity-30 bg-center bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute -z-10" style={{backgroundImage: `url('/img/bg-2.jpg')`}}></div>
                        <div className="flex items-center content-center p-5 w-full flex-wrap relatve z-50">
                            <div className="p-1 bg-zinc-200 flex-col justify-start items-start gap-[10px] flex mb-8 rounded-3xl mt-2 w-full mx-auto sm:mx-16 md:mb-12 lg:mx-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15868.258259565306!2d106.9175022!3d-6.1220127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a20036b89f831%3A0x3e60d3b9dd6c8c57!2sJakarta%20Islamic%20Centre!5e0!3m2!1sen!2sid!4v1689853611340!5m2!1sen!2sid" loading="lazy" className="w-full rounded-3xl h-64 sm:h-80  "></iframe>
                            </div>
                            <div className="w-full mb-8 md:mb-12 ">
                                <div className="flex justify-center flex-row flex-wrap items-center gap-4 sm:gap-12">
                                    <div className=" w-10 h-14 m-3 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">{days}</div>
                                        <div className=" text-sm font-redressed md:text-lg">Days</div>
                                    </div>
                                    <div className=" w-10 h-14 m-2 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">{hours}</div>
                                        <div className=" text-sm font-redressed md:text-lg">Hours</div>
                                    </div>
                                    <div className=" w-10 h-14 m-2 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">{minutes}</div>
                                        <div className=" text-sm font-redressed md:text-lg">Minutes</div>
                                    </div>
                                    <div className=" w-10 h-14 m-2 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">{seconds}</div>
                                        <div className=" text-sm font-redressed md:text-lg">Seconds</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-xl font-redressed w-full mb-8 md:text-2xl">
                                <div className="mx-2 sm:mx-8">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ipsam sed maiores ducimus animi voluptatum mollitia fuga consequuntur. Ea voluptatem aut maxime optio alias a sapiente est eligendi reprehenderit impedit?
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        )
}