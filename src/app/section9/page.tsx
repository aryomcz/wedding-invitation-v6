"use client";
import Observer from "next@js/app/components/observer/observer-up";
import Observer2 from "next@js/app/components/observer/observer-zoomIn";
import { useState, useEffect } from "react";
import axios from "next@js/lib/axios";
import { setCookie, getCookie } from "cookies-next";

export default function Section9 ({data}:any) {
  
const [greetings, setGreetings] = useState<any>([]);
  const [nameGuest, setNameGuest] = useState("");
  const [greetingWord, setGreetingWord] = useState("");
  const [presence, setpresence] = useState("");
  const [loading, setLoading] = useState(false);
  const getLastModifiedTimestamp = () => {
    const lastModified = localStorage.getItem("lastModified");
    return lastModified ? new Date(lastModified) : null;
  };

  const fetchInvitationData = async () => {
    try {
      const res = await axios.get(`/api/getmessages/${getCookie("subDomain")}`);
      setGreetings(res.data.greetings);
      const lastModified = res.headers["last-modified"];
      localStorage.setItem("lastModified", lastModified);
    } catch (error) {
      console.log(error);
    }
  };

  const checkForUpdates = async () => {
    try {
      const res = await axios.head(`/api/invitation/${getCookie("subDomain")}`);
      const lastModified = res.headers["last-modified"];
      if (lastModified !== getLastModifiedTimestamp()) {
        fetchInvitationData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInvitationData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      checkForUpdates();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  const sendGreeting = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`/api/sendgreeting/${getCookie('subDomain')}`, {
        name_guest: nameGuest,
        greeting_word: greetingWord,
        presence: presence,
      });
    } catch (error) {
      console.log(error);
    }
    // fetchInvitationData();
    setNameGuest("");
    setGreetingWord("");
    setpresence("");
    setLoading(false);
  };
    return (
        <section className="w-full -mt-1 relative bg-[#BEB4A3]">
            <div className="mx-2 p-2 flex relative flex-wrap">
             <section className="bg-[#BEB4A3] z-50 w-full rounded-3xl shadow-slate-800 shadow-md relative mt-12 text-black">
                <div className=" rounded-3xl bg-center bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute -z-10" style={{backgroundImage: `url('/img6/bg-3.png')`}}></div>
                <div className="w-full flex flex-wrap mx-auto py-12">
                    <div className="text-center mb-5 w-full font-youkiss text-4xl">RSVP
                    </div>
                    <Observer>

                    <div className="text-center font-redressed text-md mb-5 mx-6">Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:
                    </div>
                    </Observer>
                    <div className="mb-5 w-full">
                        <Observer>
                        <div className="p-5">

                        <div className=" pb-3">
                                <div className="font-redressed text-sm mb-2">Name*</div>
                                <textarea className="w-full rounded-xl border border-black py-1 px-4 text-xs font-romantic " value={nameGuest} onChange={(e) => setNameGuest(e.target.value)}>
                                </textarea>
                            </div>
                            <div className=" pb-3">
                                <div className="font-redressed text-sm mb-2">Attendance Confirmation*</div>
                                <div className="Frame40 justify-start items-start gap-[22px] inline-flex font-redressed">
              <div className="Frame38 justify-start items-center gap-2 flex ">
                <label className="CheckboxBase w-5 h-5 relative">
                    <input
                      value="1"
                      checked={presence == "1"}
                      onChange={(e) => setpresence(e.target.value)}
                  className="w-5 h-5 left-0 top-0 absolute"
                  type="radio"
                  name="radio"
                  id="radio-two"
                  />
                </label>
                <div className="Hadir  text-[14px] font-normal leading-normal">
                  Hadir
                </div>
              </div>
              <div className="Frame39 justify-start items-center gap-2 flex">
                <label className="CheckboxBase w-5 h-5 relative">
                  <input value="2" checked={presence=="2" } onChange={(e)=> setpresence(e.target.value)}
                  className="w-5 h-5 left-0 top-0 absolute"
                  type="radio"
                  name="radio"
                  id="radio-three"
                  />
                </label>
                <div className="Tidak  text-[14px] font-normal leading-normal">
                  Tidak
                </div>
              </div>
            </div>
                            </div>
                            <div className=" pb-3">
                                <div className="font-redressed text-sm mb-2">Give prayers and greetings to the bride and groom</div>
                                <textarea className="w-full rounded-xl border border-black p-5 text-xs font-romantic " value={greetingWord}
                  onChange={(e) => setGreetingWord(e.target.value)}>
                                </textarea>
                            </div>
                            <button className="MobileButton self-stretch h-12 bg-[#4B2704] rounded-lg justify-center items-center gap-4 inline-flex w-full">
                                <div className={`Text text-white text-sm font-normal leading-normal  ${loading && "cursor-not-allowed"}`}
                                onClick={sendGreeting}
                                >
                                    Submit
                                </div>
                            </button>
                        </div>
                        </Observer>
                    </div>
                </div>
                <div id="kolom-2" className="w-full overflow-y-auto h-52 p-5 mb-7">
                {greetings?.length > 0 ? (
              greetings.map((res: any, index: any) => (
                  <Observer2 key={index}>
                <div key={index} className=" gap-2 w-full h-fit px-3 p-5 shadow-slate-800 shadow-md mb-5 rounded-xl">
                        <div className="text-black font-newsreader text-base">
                        {res?.greeting_word}
                        </div>
                        <div className="text-black font-newsreader text-base font-semibold">
                        {res.name_guest}
                        </div>
                        <div className="text-black text-base font-romantic">
                        {res.presence == 1 ? "Hadir" : "Tidak Hadir"}
                        </div>
                        <div className="Line2 w-full border-t border-black"></div>
                    </div>   
                    </Observer2>
              ))
                ) : (
                    <></>
                )}
                </div>
                </section>
            </div>
        </section>
        )
}