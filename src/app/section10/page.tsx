"use client";
import Observer from "next@js/app/components/observer/observer-moveLeft";
import Observer2 from "next@js/app/components/observer/observer-up";

import { useState } from 'react';
import CopyButton from "next@js/app/components/copybutton/page";

export default function Section10 () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
      document.body.classList.add('modal-open');
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('modal-open');
    };

    return (
   <section className="bg-[#BEB4A3] w-full pt-10 pb-20">
    <Observer>
     <div className="bg-[#BEB4A3] rounded-3xl shadow-slate-800 shadow-md relative mx-4 border-white flex z-20 border">
     <div className=" rounded-3xl bg-bottom bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute z-10 bg-[#BEB4A3]" style={{backgroundImage: `url('/img6/bg-4.jpg')`}}></div>
        <div className="w-full flex flex-wrap justify-center items-center gap-5 text-center py-7 z-50">
            <div className="font-youkiss text-2xl text-black text-center">
                Wedding Gift
            </div>
            <Observer2>
            <div className="text-center font-redressed text-md mb-5 mx-10 text-black">    
				For family and friends who would like to send a gift. We would be glad to receive it. Tap the following buttons to send them to us:						
            </div>
            </Observer2>

            <div className="flex justify-center mb-5 ">
            <Observer2>
            <button className="MobileButton self-stretch bg-[#4B2704] rounded-sm justify-center items-center gap-4 inline-flex w-full text-white text-xs py-2 px-5 font-sans" onClick={openModal}>
                <span>
               Send Gift 
               <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </span>
            </button>
            </Observer2>
            </div>
        </div>
     </div>
    </Observer>
     {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 ">
            <div className="bg-white p-4 rounded-lg mx-4 font-lionel max-h-[80vh] overflow-y-scroll">

                <div className='border-b flex items-center py-3'>
                    <p className=' text-xl grow font-semibold'>Kirim Hadiah</p>
                    <button onClick={closeModal}
                        className='py-2 px-4 bg-red-500 text-white font-louis rounded-lg hover:bg-red-700'>Tutup</button>
                </div>
                <div className='py-2 '>
                    <p>
                        <strong>
                            Direct Transfer &nbsp;
                        </strong>
                        <span className='italic'>
                            Transfer langsung ke rekening yang tertera
                        </span>
                            </p>
                </div>
                <div className='mt-2'>
                    <p>
                        Transfer langsung ke rekening di bawah ini:
                    </p>
                    <div className='container mt-10'>
              <div className='flex justify-center relative w-fit h-fit'>
                <img src="/img6/bank.png" className='sm:w-4/5 lg:w-1/2 h-auto relative' />
                <div className='absolute w-full sm:w-4/5 lg:w-1/2 h-full grid grid-rows-3 grid-cols-1'>
                  <div
                    className=" row-start-1 text-end  mr-2 lg:mr-4 mt-4 text-white font-normal  sm:text-[20px] xl:text-[24px]">
                   Nama bank
                  </div>
                  <div className="row-start-2 flex flex-wrap items-end ml-5 lg:ml-10">
                    <div className="text-white sm:text-[18px] xl:text-[24px] break-all">
                     871xxxxxxx
                    </div>
                    <div className="ml-5">
                    <CopyButton text="dummy" />
                    </div>
                  </div>
                  <div
                    className=" ml-5 lg:ml-8 flex flex-wrap items-center row-start-3 text-white font-normal sm:text-[20px] xl:text-[24px] break-words">
                    A.N :&nbsp; <strong> Claude</strong>
                  </div>
                </div>
              </div>
                    </div>
                    <div className='container mt-[50px] '>
              <div className='flex justify-center relative w-fit h-fit '>
                <img src="/img6/bank2.png" className='sm:w-4/5 lg:w-1/2 h-auto relative' />
                <div className='absolute w-full sm:w-4/5 lg:w-1/2 h-full grid grid-rows-4 grid-cols-1'>
                  <div
                    className=" row-start-1 text-end  mr-2 lg:mr-4 mt-4 text-white font-normal  sm:text-[20px] xl:text-[24px] ">
                    Nama Bank
                  </div>
                  <div className='row-start-2 ml-5'>
                    <img src="/img6/qr.png" className="w-1/4" alt="" />
                  </div>
                  <div className="row-start-3 flex flex-wrap items-end ml-5 lg:ml-10 w-fit">
                    <div className="text-white sm:text-[18px] xl:text-[24px] break-all">
                    0812xxxxxxx
                    </div>
                    <div className="ml-5">
                    <CopyButton text="dummy" />
                    </div>
                  </div>
                  <div
                    className=" ml-5 lg:ml-8 flex flex-wrap items-center row-start-4 text-white font-normal sm:text-[20px] xl:text-[24px] break-words">
                    A.N : <strong> Claude</strong>
                  </div>
                </div>
              </div>
            </div>        
                </div>
            </div>
        </div>
      )}
   </section>
        )
}