"use client";
import Observer from "next@js/app/components/observer/observer-moveRight";
import Observer2 from "next@js/app/components/observer/observer-up";
import { useState, useEffect } from "react";

export default function Section5 ({data}:any) {
    const [event, setEvent] = useState<any>([]);
    const [url, seturl] = useState<any>([]);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      const [defaultCaption2, setdefaultCaption2] = useState("");
    const [caption2, setCaption2] = useState("");

      useEffect(() => {
        if (event?.length > 0) {
          
          const calculateCountdown = () => {
            const targetDate = new Date(event[0]?.date).getTime();
            const now = new Date().getTime();
    
            const diff = Math.max(targetDate - now, 0);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
            setCountdown({ days, hours, minutes, seconds });
          };
    
          const interval = setInterval(calculateCountdown, 1000);
    
          return () => {
            clearInterval(interval);
          };
        }
      }, [event]);

    useEffect(() => {
      const getData = async () => {
        try {
          data?.captions?.map((res: any, index: any) => {
            if (res.category_type == 2) {
              setCaption2(res.description);
            }
          });
          data?.defaultCaption?.map((res: any) => {
            if (res.category_type == 2 && res.is_default == 1) {
              setdefaultCaption2(res.description);}});
          setEvent(data.event);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, [data]);

    return (
        <section className="bg-[#BEB4A3] py-12 px-3 sm:px-20 lg:px-3 w-full -mt-1">
            <div className="w-full flex flex-wrap mx-auto relative">
                <Observer>

                <div className="p-2 flex flex-wrap w-full items-center content-center text-black">
                    <section className="bg-[#BEB4A3] z-50 w-full rounded-3xl border-solid border border-white shadow-slate-800 shadow-md relative">
                        <div className=" rounded-3xl opacity-30 bg-center bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute -z-10" style={{backgroundImage: `url('/img6/bg-2.jpg')`}}></div>
                        <div className="flex items-center content-center p-5 w-full flex-wrap relatve z-50">
                            <div className="p-1 bg-zinc-200 flex-col justify-start items-start gap-[10px] flex mb-8 rounded-3xl mt-2 w-full mx-auto sm:mx-16 md:mb-12 lg:mx-0">
                                <iframe src={event?.length > 0 ? event[0]?.url : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8250149254054!2d106.9285380738836!3d-6.668593765190272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b75158a75fb7%3A0x4783f70c2ac389f5!2sBromelia%20Sport%20Center!5e0!3m2!1sid!2sid!4v1689038709719!5m2!1sid!2sid"} loading="lazy" className="w-full rounded-3xl h-64 sm:h-80  "></iframe>
                            </div>
                            <div className="text-center text-lg font-redressed w-full mb-8 md:text-2xl">
                                <Observer2>
                                <div className="mx-2 sm:mx-8">
                                {event?.length > 0 && event[0]?.address}
                                </div>
                                </Observer2>
                            </div>
                            <div className="w-full mb-8 md:mb-12 ">
                                <div className="flex justify-center flex-row flex-wrap items-center gap-4 sm:gap-12">
                                    <div className=" w-10 h-14 m-3 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">
                                        {countdown.days ? countdown.days : "0"}
                                        </div>
                                        <div className=" text-sm font-redressed md:text-lg">Days</div>
                                    </div>
                                    <div className=" w-10 h-14 m-2 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">
                                        {countdown.hours ? countdown.hours : "0"}
                                        </div>
                                        <div className=" text-sm font-redressed md:text-lg">Hours</div>
                                    </div>
                                    <div className=" w-10 h-14 m-2 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">
                                        {countdown.minutes ? countdown.minutes : "0"}
                                        </div>
                                        <div className=" text-sm font-redressed md:text-lg">Minutes</div>
                                    </div>
                                    <div className=" w-10 h-14 m-2 flex justify-center flex-wrap text-center gap-2">
                                        <div className=" text-2xl font-fredericka md:text-4xl">
                                            {countdown.seconds ? countdown.seconds : "0"}
                                        </div>
                                        <div className=" text-sm font-redressed md:text-lg">Seconds</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-xl font-redressed w-full mb-8 md:text-2xl">
                                <Observer2>
                                <div className="mx-2 sm:mx-8">
                                    {caption2 ? caption2 : defaultCaption2}
                                </div>
                                </Observer2>
                            </div>
                        </div>
                    </section>
                </div>
                </Observer>

            </div>
        </section>
        )
}