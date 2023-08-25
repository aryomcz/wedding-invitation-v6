"use client";
import Observer from "next@js/app/components/observer/observer-moveLeft";
import Observer2 from "next@js/app/components/observer/observer-up";

import { useState, useEffect } from 'react';
import CopyButton from "next@js/app/components/copybutton/page";

export default function Section10 ({data}:any) {
  const [caption3, setCaption3] = useState("");
  const [defaultCaption3, setdefaultCaption3] = useState("");
  const [bank, setBank] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setBank(data?.bankUser);
        data?.captions?.map((res: any, index: any) => {
          if (res.category_type == 3) {
            setCaption3(res.description);
          }
        });
        data?.defaultCaption?.map((res: any) => {
          if (res.category_type == 3 && res.is_default == 1) {
            setdefaultCaption3(res.description);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);
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
				{caption3 ? caption3: defaultCaption3}			
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
                    {bank?.length > 0 && (
          bank.filter((row:any) => row.bank.category == "konvensional").map((res:any) => (
                    <div className='container mt-10'>
              <div className='flex justify-center relative w-fit h-fit'>
                <img src="/img6/bank.png" className='sm:w-4/5 lg:w-1/2 h-auto relative' />
                <div className='absolute w-full sm:w-4/5 lg:w-1/2 h-full grid grid-rows-3 grid-cols-1'>
                  <div
                    className=" row-start-1 text-end  mr-2 lg:mr-4 mt-4 text-white font-normal  sm:text-[20px] xl:text-[24px]">
                   {res?.bank?.name ? res.bank.name:"Krut"}
                  </div>
                  <div className="row-start-2 flex flex-wrap items-end ml-5 lg:ml-10">
                    <div className="text-white sm:text-[18px] xl:text-[24px] break-all">
                    {res?.bank?.code ?? "32xxxxxxxx"} {res?.rekening ? res.rekening : "req"}
                    </div>
                    <div className="ml-5">
                    <CopyButton text={`${res?.bank?.code ? res.bank.code : "12345678" }${res?.rekening ? res.rekening
                        : "12345678" }`} />
                    </div>
                  </div>
                  <div
                    className=" ml-5 lg:ml-8 flex flex-wrap items-center row-start-3 text-white font-normal sm:text-[20px] xl:text-[24px] break-words">
                    A.N :&nbsp; <strong> {res?.user?.name ? res.user.name : " "}</strong>
                  </div>
                </div>
              </div>
                    </div>
          ))
                    )}
                    {bank?.length > 0 && (
        bank.filter((row:any) => row.bank.category == "digital").map((res:any) => (
                    <div className='container mt-[50px] '>
              <div className='flex justify-center relative w-fit h-fit '>
                <img src="/img6/bank2.png" className='sm:w-4/5 lg:w-1/2 h-auto relative' />
                <div className='absolute w-full sm:w-4/5 lg:w-1/2 h-full grid grid-rows-4 grid-cols-1'>
                  <div
                    className=" row-start-1 text-end  mr-2 lg:mr-4 mt-4 text-white font-normal  sm:text-[20px] xl:text-[24px] ">
                    {res?.bank?.name ? res.bank.name:"Krut"}
                  </div>
                  <div className='row-start-2 ml-5'>
                    <img src={res?.qr_path } className="w-1/4" alt="" />
                  </div>
                  <div className="row-start-3 flex flex-wrap items-end ml-5 lg:ml-10 w-fit">
                    <div className="text-white sm:text-[18px] xl:text-[24px] break-all">
                    {res?.rekening ? res.rekening : "req"}
                    </div>
                    <div className="ml-5">
                    <CopyButton text={`${res?.rekening ? res.rekening : "12345678" }`} />
                    </div>
                  </div>
                  <div
                    className=" ml-5 lg:ml-8 flex flex-wrap items-center row-start-4 text-white font-normal sm:text-[20px] xl:text-[24px] break-words">
                    A.N : <strong> {res?.user?.name ? res.user.name : "Adam gtg"}</strong>
                  </div>
                </div>
              </div>
            </div>  
             ))
             )}      
                </div>
            </div>
        </div>
      )}
   </section>
        )
}