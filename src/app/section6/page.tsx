import Observer from "next@js/app/components/observer/observer-moveLeft";
import Observer2 from "next@js/app/components/observer/observer-up";

export default function Section6 () {
    return (
        <section className="relative bg-[#BEB4A3] py-10 overflow-hidden w-full -mt-1 text-black">
              <div className="bg-center bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute bg-[#BEB4A3]" style={{backgroundImage: `url('/img6/bg-3.jpg')`}}></div>
              <div className="w-full relative mt-16 pb-56">
                <div className="z-50 flex justify-center p-3 w-full flex-wrap flex-col mt-12 ">
                    <div className="text-center max-w-full h-full">
                        <Observer2>
                        <div className=" text-4xl font-jawadwipa font-medium">Holy Matrimony</div>
                        </Observer2>
                    </div>
                    <Observer>

                    <div className="w-full text-center uppercase">
                        <div className="h-full mt-4 mb-5 font-quicksand font-semibold">sunday, 31 december 2023</div>
                    </div>
                    <div className="w-full text-center uppercase">
                        <div className="h-full text-sm font-newsreader">08.00 wib</div>
                    </div>
                    </Observer>
                    <Observer2>
                        
                    <div className="font-redressed text-center max-w-full mt-5 text-black">
                        <div className="mx-5 h-full text-base">
                        Jl. Jamin Ginting Km. 13,5 Kelurahan Lau Cih, Kecamatan Medan Tuntungan, Kota Medan
                        </div>
                    </div>
                    </Observer2>
                </div>
                <div className="z-50 flex justify-center p-3 w-full flex-wrap flex-col mt-12 ">
                    <div className="text-center max-w-full h-full">
                        <Observer2>

                        <div className=" text-4xl font-jawadwipa font-medium">Reception</div>
                        </Observer2>
                    </div>
                    <Observer>

                    <div className="w-full text-center uppercase">
                        <div className="h-full mt-4 mb-5 font-quicksand font-semibold">sunday, 31 december 2023</div>
                    </div>
                    <div className="w-full text-center uppercase">
                        <div className="h-full text-sm font-newsreader">08.00 wib</div>
                    </div>
                    </Observer>
                    <Observer2>

                    <div className="font-redressed text-center max-w-full mt-5 text-black">
                        <div className="mx-5 h-full text-base">
                        Jl. Jamin Ginting Km. 13,5 Kelurahan Lau Cih, Kecamatan Medan Tuntungan, Kota Medan
                        </div>
                    </div>
                    </Observer2>
                </div>
              </div>
        </section>
        )
}