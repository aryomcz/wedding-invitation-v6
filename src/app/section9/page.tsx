"use client";
import { useState, useEffect } from "react";
export default function Section9 () {
    const [loading, setLoading] = useState(false);

    return (
        <section className="w-full -mt-1 relative bg-[#BEB4A3]">
            <div className="mx-2 p-2 flex relative flex-wrap">
             <section className="bg-[#BEB4A3] z-50 w-full rounded-3xl shadow-slate-800 shadow-md relative mt-12 text-black">
                <div className=" rounded-3xl bg-center bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute -z-10" style={{backgroundImage: `url('/img/bg-3.png')`}}></div>
                <div className="w-full flex flex-wrap mx-auto py-12">
                    <div className="text-center mb-5 w-full font-youkiss text-4xl">RSVP
                    </div>
                    <div className="text-center font-redressed text-md mb-5 mx-6">Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:
                    </div>
                    <div className="mb-5 w-full">
                        <div className="p-5">

                        <div className=" pb-3">
                                <div className="font-redressed text-sm mb-2">Name*</div>
                                <textarea className="w-full rounded-xl border border-black py-1 px-4 text-xs font-romantic ">
                                </textarea>
                            </div>
                            <div className=" pb-3">
                                <div className="font-redressed text-sm mb-2">Attendance Confirmation*</div>
                                <select className="w-full rounded-xl border border-black p-2 text-xs font-redressed" name="" id="">
                                    <option value="yes">
                                        Hadir
                                    </option>
                                    <option value="no">
                                        Tidak Hadir
                                    </option>
                                </select>
                            </div>
                            <div className=" pb-3">
                                <div className="font-redressed text-sm mb-2">Give prayers and greetings to the bride and groom</div>
                                <textarea className="w-full rounded-xl border border-black p-5 text-xs font-romantic ">
                                </textarea>
                            </div>
                            <button className="MobileButton self-stretch h-12 bg-[#4B2704] rounded-lg justify-center items-center gap-4 inline-flex w-full">
                                <div className={`Text text-white text-sm font-normal leading-normal  ${loading && "cursor-not-allowed"}`}>
                                    Submit
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="kolom-2" className="w-full overflow-y-auto h-52 p-5 mb-7">
                    <div className=" gap-2 w-full h-fit px-3 p-5 shadow-slate-800 shadow-md mb-5 rounded-xl">
                        <div className="text-black font-newsreader text-base">
                            Bagus bgt uwaw uwaw
                        </div>
                        <div className="text-black font-newsreader text-base font-semibold">
                            Dea
                        </div>
                        <div className="text-black text-base font-romantic">
                            Tidak Hadir
                        </div>
                        <div className="Line2 w-full border-t border-black"></div>
                    </div>
                    <div className=" gap-2 w-full h-fit px-3 p-5 shadow-slate-800 shadow-md mb-5 rounded-xl">
                        <div className="text-black font-newsreader text-base">
                            Bagus bgt uwaw uwaw
                        </div>
                        <div className="text-black font-newsreader text-base font-semibold">
                            Dea
                        </div>
                        <div className="text-black text-base font-romantic">
                            Tidak Hadir
                        </div>
                        <div className="Line2 w-full border-t border-black"></div>
                    </div>
                    <div className=" gap-2 w-full h-fit px-3 p-5 shadow-slate-800 shadow-md mb-5 rounded-xl">
                        <div className="text-black font-newsreader text-base">
                            Bagus bgt uwaw uwaw
                        </div>
                        <div className="text-black font-newsreader text-base font-semibold">
                            Dea
                        </div>
                        <div className="text-black text-base font-romantic">
                            Tidak Hadir
                        </div>
                        <div className="Line2 w-full border-t border-black"></div>
                    </div>
                    <div className=" gap-2 w-full h-fit px-3 p-5 shadow-slate-800 shadow-md mb-5 rounded-xl">
                        <div className="text-black font-newsreader text-base">
                            Bagus bgt uwaw uwaw
                        </div>
                        <div className="text-black font-newsreader text-base font-semibold">
                            Dea
                        </div>
                        <div className="text-black text-base font-romantic">
                            Hadir
                        </div>
                        <div className="Line2 w-full border-t border-black"></div>
                    </div>
                    <div className=" gap-2 w-full h-fit px-3 p-5 shadow-slate-800 shadow-md mb-5 rounded-xl">
                        <div className="text-black font-newsreader text-base">
                            Bagus bgt uwaw uwaw
                        </div>
                        <div className="text-black font-newsreader text-base font-semibold">
                            Dea
                        </div>
                        <div className="text-black text-base font-romantic">
                            Hadir
                        </div>
                        <div className="Line2 w-full border-t border-black"></div>
                    </div>
                    <div className=" gap-2 w-full h-fit px-3 p-5 shadow-slate-800 shadow-md mb-5 rounded-xl">
                        <div className="text-black font-newsreader text-base">
                            Bagus bgt uwaw uwaw
                        </div>
                        <div className="text-black font-newsreader text-base font-semibold">
                            Dea
                        </div>
                        <div className="text-black text-base font-romantic">
                            Hadir
                        </div>
                        <div className="Line2 w-full border-t border-black"></div>
                    </div>
                </div>
                </section>
            </div>
        </section>
        )
}