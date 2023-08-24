import Observer from "next@js/app/components/observer/observer-up";
import Observer2 from "next@js/app/components/observer/observer-zoomIn";

export default function Section3 () {
    return (
        <section className=" bg-no-repeat h-full w-full bg-cover bg-bottom object" style={{backgroundImage: `url('/img6/bg-2.png')`}}>
            <div className="pt-9">
                <div className="m-2 p-2">
                    <div className="flex p-2 max-w-full flex-wrap relative flex-start">
                        <div className="text-center text-xl mb-5 font-redressed text-black">
                            <div className=" mx-5">
                                <Observer>
                                <p>
                                By the grace of God, we are pleased to announce our wedding to you, our family and friends:
                                </p>
                                </Observer>
                            </div>
                        </div>
                        <Observer2>

                        <div className=" mb-5 w-full relative flex justify-center">
                            <img src="/img6/fp.jpg" className=" border-solid border-2 border-black rounded-[1000px] w-[70%] sm:w-1/2 object-cover" alt="" />
                        </div>
                        </Observer2>
                        <Observer2>
                        <div className="mb-5 w-full ">
                            <div className="flex items-center justify-center flex-col flex-nowrap w-full">
                                <h3 className=" text-black mb-1 text-center text-2xl ">
                                    Clara Putri Angelina
                                </h3>
                                <div className=" text-black font-redressed text-center text-lg">Anak dari Mr.Lorem & Mrs.Ipsum</div>
                                <div className="my-6 ">
                                    <a href="" className=" bg-transparent hover:bg-white rounded-full p-4 text-black">
                                        <span>
                                        <i className="fa-brands fa-instagram mr-2"></i>username
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </Observer2>
                        <Observer2>

                        <div className=" mb-5 w-full relative flex justify-center">
                            <img src="/img6/fl.jpg" className=" border-solid border-2 border-black rounded-[1000px] w-[70%] sm:w-1/2 object-cover" alt="" />
                        </div>
                        </Observer2>
                        <Observer2>

                        <div className="mb-5 w-full ">
                            <div className="flex items-center justify-center flex-col flex-nowrap w-full">
                                <h3 className=" mb-1 text-center text-2xl text-black">
                                    Bryan Aska Arion
                                </h3>
                                <div className="text-center text-base font-redressed text-black">Anak dari Mr.Lorem & Mrs.Ipsum</div>
                                <div className="my-6 ">
                                        <Observer>
                                    <a href="" className=" bg-transparent hover:bg-white p-4 rounded-full text-black">

                                        <span>
                                        <i className="fa-brands fa-instagram mr-2"></i>
                                        username
                                        </span>
                                    </a>
                                        </Observer>
                                </div>
                            </div>
                        </div>
                        </Observer2>
                    </div>
                </div>
            </div>
        </section>
        )
}