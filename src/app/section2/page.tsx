export default function Section2 () {
    return (
        <section>
            <div className="w-full flex flex-wrap justify-center items-center content-center h-full bg-cover bg-no-repeat relative bg-bottom" style={{backgroundImage: `url('/img/BackgroundAset.png')`}}>
                <div className="flex flex-wrap justify-center items-center content-center flex-grow flex-shrink flex-col gap-2 w-full h-full text-center py-40 pb-96 sm:pb-[600px]">

                    <div className="h-full max-w-full flex justify-center mb-4">
                        <img src="/img/PastiNikah.png" className=" w-1/3 sm:w-1/2" alt="" />
                    </div>
                    <div className="h-full max-w-full flex justify-center mb-4">
                        <img src="/img/wayang.png" className=" w-2/5" alt="" />
                    </div>
                    <div className="w-full h-auto text-center font-quicksand tracking-[3px] text-[13px] opacity-80 text-black">
                        THE WEDDING OF
                    </div>
                    <div className="w-full h-auto text-center tracking-[3.7px] font-romantic text-[30px]  font-medium text-black"> 
                        Clara & Bryan
                    </div>
                </div>
                <div className="absolute bottom-0 w-full">
                    <img src="/img/Footer Border.png" className="w-full" alt="" />
                </div>
                <div className="absolute top-0 rotate-180 w-full">
                    <img src="/img/Footer Border.png" className="w-full" alt="" />
                </div>
            </div>
        </section>
        )
}