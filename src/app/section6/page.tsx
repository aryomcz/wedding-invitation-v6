import Observer from "next@js/app/components/observer/observer-moveLeft";
import Observer2 from "next@js/app/components/observer/observer-up";
import { useState, useEffect } from "react";

export default function Section6 ({data}:any) {
    const [event, setEvent] = useState<any>([]);
  const [allEvent, setAllEvent] = useState<any>([]);
  const [startEvent, setStartEvent] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [endEvent, setEndEvent] = useState("");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
        
        setEvent(data.event);
        setAllEvent(data.allEvents);
        setStartEvent(data.timeEvent?.start_event);
        setEndEvent(data.timeEvent?.end_event);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data]);


  useEffect(() => {
    if (event?.length > 0) {
      const date = new Date(event[0]?.date);
      setFormattedDate(
        date.toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
},[event])

 

  const start = startEvent?.substr(0, 5).replace(":", "-");
  const end = endEvent?.substr(0, 5).replace(":", "-");
  

  const events =
    allEvent?.length > 0 &&
    allEvent.map((res: any, index: any) => {
      return (
        <>
          <div key={index} className="z-50 flex justify-center p-3 w-full flex-wrap flex-col mt-12 ">
                    <div className="text-center max-w-full h-full">
                        <Observer2>
                        <div className=" text-4xl font-jawadwipa font-medium">
                            {res.name}
                        </div>
                        </Observer2>
                    </div>
                    <Observer>
                    <div className="w-full text-center uppercase">
                        <div className="h-full mt-4 mb-5 font-quicksand font-semibold">{new Date(res.date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              })}</div>
                    </div>
                    <div className="w-full text-center uppercase">
                        <div className="h-full text-sm font-newsreader">
                         {`${res.start_event
              .substr(0, 5)
              .replace(":", "-")} ~ ${res.end_event
              .substr(0, 5)
              .replace(":", "-")}`}{" "}
              WIB
                        </div>
                    </div>
                    </Observer>
                    <Observer2>
                        
                    <div className="font-redressed text-center max-w-full mt-5 text-black">
                        <div className="mx-5 h-full text-base">
                        {res.location}
                        </div>
                    </div>
                    </Observer2>
                </div>
          </>
        
      )
      });

    return (
        <section className="relative bg-[#BEB4A3] py-10 overflow-hidden w-full -mt-1 text-black">
              <div className="bg-center bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute bg-[#BEB4A3]" style={{backgroundImage: `url('/img6/bg-3.jpg')`}}></div>
              <div className="w-full relative mt-16 pb-56">
                {events}
              </div>
        </section>
        )
}