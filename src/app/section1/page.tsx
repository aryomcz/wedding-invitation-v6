export default function Section1 () {
    return (
        <section>
            <div className="bg-cover bg-no-repeat bg-center h-screen overflow-y-auto w-full bg-transparent relative" style={{backgroundImage: `url('/img/bg-1.jpg')`}}>
                <div className="w-full h-full opacity-50 bg-black top-0 left-0 z-10"></div>
                <div className="bg-transparent w-full h-full top-0 z-20 absolute">
                    <div className="w-full h-full flex flex-col justify-center text-white">
                        <div className="w-full h-auto">
                            <img src="https://invitingart.id/wp-content/uploads/2022/06/blank.png" alt="" />
                        </div>
                        <div className="w-auto h-auto text-center font-quicksand tracking-[3px] text-[15px] opacity-80">
                            THE WEDDING OF
                        </div>
                        <div className="w-auto h-auto text-center tracking-[3.7px] font-qageto text-[40px]"> 
                        Clara & Bryan
                        </div>
                        <div className="w-auto h-auto text-center text-[15px]">
                            Kepada Yth :
                        </div>
                        <div className="w-auto h-auto text-center text-[26px] mt-2 font-newsreader">
                            Nama Tamu
                        </div>
                        <div className="mt-8 text-center w-full h-auto">
                            <button className=" border border-solid tracking-[1px] bg-black rounded-xl p-2 text-[13px] font-quicksand">
                                <span>
                                    <i className="fa fa-envelope-open mr-2"></i>
                                </span>
                                Open Invitation
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        )
}