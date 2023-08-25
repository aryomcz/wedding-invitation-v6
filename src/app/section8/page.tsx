import Observer from "next@js/app/components/observer/observer-up";
import { useEffect, useState } from "react";

export default function Section7 ({data}:any) {

  const [liveStream, setLiveStream] = useState<any>([]);
  const [caption4, setcaption4] = useState("");
  const [defaultcaption4, setdefaultcaption4] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setLiveStream(data?.liveStream);
        data?.captions?.map((res: any, index: any) => {
          if (res.category_type == 4) {
            setcaption4(res.description);
          }
        });
        data?.defaultCaption?.map((res: any) => {
          if (res.category_type == 4 && res.is_default == 4) {
            setdefaultcaption4(res.description);
          } 
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);

    return (
        <section className="w-full px-3 py-10 bg-[#BEB4A3]">
          {liveStream && liveStream.length > 0 ? (
      <>
          <Observer>

            <div className="flex justify-center items-center w-full flex-wrap">
              <div className="text-center font-youkiss text-4xl text-black">Live Streaming</div>
            </div>
          </Observer>
          <div className="flex justify-center mt-5 w-full">
            <Observer>

                <div className="text-center text-black text-lg font-normal leading-loose tracking-wide mx-5 font-redressed">
                {caption4 ? caption4 : defaultcaption4}
                </div>
            </Observer>
            </div>
            
            <Observer>
            <div className="flex flex-wrap justify-center items-center py-8 gap-8 mx-auto">
            {liveStream?.length > 0 ?
          liveStream.map((res: any, index: any) => {
            return (
                    <div key={index}>
                       <button className="px-[22.34px] py-4 rounded-full justify-center items-center gap-[11.17px] inline-flex active:bg-[#4B2704] hover:bg-white bg-[#4B2704] text-white hover:text-[#4B2704] shadow-slate-800 shadow-md border-white border hover:border-[#4B2704] font-quicksand">
                        <a className="text-center font-semibold font-antic-didone leading-none hover:text-[#4B2704]" target="_blank" href={res.url}>
                          <p>
                            Buka Live {res.platform == "Youtube" ? "Youtube" : res.platform === "Instagram" ? "Instagram" : "Zoom"}
                          </p>
                        </a>
                      </button>
                    </div>
           );
          }):(
  <>     
         
            </>
             )}
      
            </div>
      </Observer>
        </>
         ) : null}
            </section>
        )
}