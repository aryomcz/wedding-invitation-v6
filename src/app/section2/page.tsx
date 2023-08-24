

export default function Section2 () {
    return (
        <section id="section2">
            <div className="w-full flex flex-wrap justify-center items-center content-center h-full relative">
                <div className="h-full w-full absolute overflow-hidden z-30">
                    <video src="/video/java-website.mp4" loop autoPlay muted className="object-cover absolute h-full w-full"></video>
                </div>
            {/* <div className="w-full items-center content-center h-full bg-cover bg-no-repeat absolute bg-bottom bg-blend-multiply z-30" style={{backgroundImage: `url('/img6/BackgroundAset.png')`}}></div> */}
            <div className="bg-center bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute z-20 " style={{backgroundImage: `url('/img6/birds.gif')`}}></div>
                <div className="flex flex-wrap justify-center items-center content-center flex-grow flex-shrink flex-col gap-2 w-full h-full text-center py-40 pb-96 sm:pb-[600px] z-30">

                    <div className="h-full max-w-full flex justify-center mb-4 animate-moveDown-1">
                        <img src="/img6/PastiNikah.png" className=" w-1/3 sm:w-1/2" alt="" />
                    </div>
                    <div className="h-full max-w-full flex justify-center mb-4">
                        <img src="/img6/Wayang.png" className=" w-2/5 animate-moveDown-1" alt="" />
                    </div>
                    <div className="w-full h-auto text-center font-quicksand tracking-[3px] text-[13px] opacity-80 text-black animate-moveDown-1">
                        THE WEDDING OF
                    </div>
                    <div className="w-full h-auto text-center tracking-[3.7px] font-romantic text-[30px]  font-medium text-black animate-moveDown-1"> 
                        Clara & Bryan
                    </div>
                </div>
                {/* <div className="absolute bottom-0 w-full z-40">
                    <img src="/img6/Footer Border.png" className="w-full" alt="" />
                </div>
                <div className="absolute top-0 rotate-180 w-full z-40">
                    <img src="/img6/Footer Border.png" className="w-full" alt="" />
                </div> */}
            </div>
        </section>
        )
}