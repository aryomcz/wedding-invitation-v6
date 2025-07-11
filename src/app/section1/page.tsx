import { useState, useEffect } from "react";

export default function Section1
({
    data,
    guestName,
    onOpenNextSections
}:any) 
    {
        const [frontPage, setFrontPage] = useState<any>([]);  
        const [firstSectionImage, setFirstSectionImage] = useState<any>("");
        const [nameMale, setNameMale] = useState("");
        const [nameFemale, setNameFemale] = useState("");
        
      
      
      
        useEffect(() => {
          const fetchData = async () => {
              try {
              setFrontPage(data.frontPage);
              const nameMale = data.nameMale?.name_male?.split(" ");
              const nameFemale = data.nameFemale?.name_female?.split(" ");
              setNameMale(nameMale ? nameMale[0] : "");
              setNameFemale(nameFemale ? nameFemale[0] : "");
              setFirstSectionImage(data.firstSectionImage);
            } catch (error) {
              console.error('Error fetching data:', error);
            
            }
          };
      
          fetchData();
      }, [data]);
      
    return (
        <section className="relative w-full h-screen sm:h-full md:h-screen z-10">
            <div className="bg-cover bg-no-repeat bg-center h-full w-full bg-transparent absolute" style={{backgroundImage: `url(${
          frontPage?.front_page ? frontPage?.front_page : " "
        })`}}>
                <div className="w-full h-full opacity-50 bg-black top-0 left-0 "></div>
            </div>
            <div className="w-full h-full top-0 z-20 py-28">
                    <div className="w-full h-full flex flex-col justify-center text-white">
                        <div className="w-full h-auto">
                            <img src="https://invitingart.id/wp-content/uploads/2022/06/blank.png" alt="" />
                        </div>
                        <div className="w-auto h-auto text-center font-quicksand tracking-[1px] text-[15px] opacity-80">
                            THE WEDDING OF
                        </div>
                        <div className="w-auto h-auto text-center tracking-[3.7px] font-qageto text-[40px] text-white opacity-95"> 
                        {nameMale ? nameMale: " "} & {nameFemale ? nameFemale : " "}
                        </div>
                        <div className="w-auto h-auto text-center text-[15px] text-white opacity-95">
                            Kepada Yth :
                        </div>
                        <div className="w-auto h-auto text-center text-[26px] mt-2 font-newsreader text-white opacity-95">
                        {guestName ? guestName : "Nama Tamu"}
                        </div>
                        <a className="mt-8 text-center w-full h-auto" onClick={onOpenNextSections}>
                            <button className=" border hover:border-black border-solid tracking-[1px] bg-black hover:bg-white rounded-xl p-2 text-[13px] font-quicksand opacity-95 text-white font-semibold hover:text-black">
                                <span>
                                    <i className="fa fa-envelope-open mr-2 z-20"></i>
                                </span>
                                Open Invitation
                            </button>
                        </a>
                    </div>

                </div>
        </section>
        )
}