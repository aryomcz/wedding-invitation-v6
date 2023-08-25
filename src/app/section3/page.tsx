import Observer from "next@js/app/components/observer/observer-up";
import Observer2 from "next@js/app/components/observer/observer-zoomIn";
import { useState, useEffect } from "react";

export default function Section3 ({data}:any) {
    const [brideGroom, setBrideGroom] = useState<any>([]);
    const [event, setEvent] = useState<any>([]);
    const [nameMale, setNameMale] = useState("");
    const [nameFemale, setNameFemale] = useState("");
    const [music, setMusic] = useState("");
    const [socmedLeft, setSocmedLeft] = useState<any>([]);
    const [socmedRight, setSocmedRight] = useState<any>([]);
    const [defaultCaption1, setdefaultCaption1] = useState("");
    const [caption1, setCaption1] = useState("");
    

    useEffect(() => {
        const fetchData = async () => {
           try {
           
            
            setBrideGroom(data.bridegroom);
            setEvent(data.event);
            setMusic(data?.music?.path_music ?? data?.music?.embed_link);
            const nameMale = data.nameMale?.name_male?.split(" ");
            const nameFemale = data.nameFemale?.name_female?.split(" ");
            setNameMale(nameMale ? nameMale[0] : "");
            setNameFemale(nameFemale ? nameFemale[0] : "");
            data?.captions?.map((res: any, index: any) => {
                if (res.category_type == 1) {
                  setCaption1(res.description);
                }
              });
              data?.defaultCaption?.map((res: any) => {
                if (res.category_type == 1 && res.is_default == 1) {
                  setdefaultCaption1(res.description);}});
                  
            const socmedLeft = data?.socmed.filter((res:any) => res.position == 'left')
            setSocmedLeft(socmedLeft ? socmedLeft[0] : [])
            const socmedRight = data?.socmed.filter((res:any) => res.position == 'right')
            setSocmedRight(socmedRight ? socmedRight[0] : [])
           
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [data]);    
    const leftClassNames = socmedLeft?.platform === 'Instagram' ? 'fa-instagram' : socmedLeft?.platform === 'Facebook' ? 'fa-facebook' : 'fa-twitter';
    const rightClassNames = socmedRight?.platform === 'Instagram' ? 'fa-instagram' : socmedRight?.platform === 'Facebook' ? 'fa-facebook' : 'fa-twitter';

    return (
        <section className=" bg-no-repeat h-full w-full bg-cover bg-bottom object" style={{backgroundImage: `url('/img6/bg-2.png')`}}>
            <div className="pt-9">
                <div className="m-2 p-2">
                    <div className="flex p-2 max-w-full flex-wrap relative flex-start">
                        <div className="text-center text-xl mb-5 font-redressed text-black">
                            <div className=" mx-5">
                                <Observer>
                                <p>
                                {caption1 ? caption1 : defaultCaption1}
                                </p>
                                </Observer>
                            </div>
                        </div>
                        <Observer2>

                        <div className=" mb-5 w-full relative flex justify-center">
                            <img src={`${data?.brideGroomLeft ? (data.brideGroomLeft[0].image_male ? data.brideGroomLeft[0].image_male : data.brideGroomLeft[0].image_female) : ''}`} className=" border-solid border-2 border-black rounded-[1000px] w-[70%] sm:w-1/2 h-[300px] min-[400px]:h-[400px] sm:h-[400px]  lg:h-[400px] xl:h-[500px] object-cover" alt="" />
                        </div>
                        </Observer2>
                        <Observer2>
                        <div className="mb-5 w-full ">
                            <div className="flex items-center justify-center flex-col flex-nowrap w-full">
                                <h3 className=" text-black mb-1 text-center text-2xl ">
                                {data?.brideGroomLeft ? (data.brideGroomLeft[0].name_male ? data.brideGroomLeft[0].name_male : data.brideGroomLeft[0].name_female) : ''}
                                </h3>
                                <div className=" text-black font-redressed text-center text-lg">Anak dari Bapak {data?.brideGroomLeft ? (data.brideGroomLeft[0].father_male ? data.brideGroomLeft[0].father_male : data.brideGroomLeft[0].father_female) : ''} <br /> dan Ibu {data?.brideGroomLeft ? (data.brideGroomLeft[0].mother_male ? data.brideGroomLeft[0].mother_male : data.brideGroomLeft[0].mother_female) : ''}</div>
                                <div className="my-6 ">
                                    <a href={socmedLeft?.url} className=" bg-transparent hover:bg-white rounded-full p-4 text-black" target="_blank">
                                        <span>
                                        <i className={`fa-brands ${leftClassNames} mr-2`}></i>
                                        {socmedLeft?.username}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </Observer2>
                        <Observer2>

                        <div className=" mb-5 w-full relative flex justify-center">
                            <img src={`${data?.brideGroomRight ? (data.brideGroomRight[0].image_male ? data.brideGroomRight[0].image_male : data.brideGroomRight[0].image_female) : ''}`} className=" border-solid border-2 border-black rounded-[1000px] w-[70%] sm:w-1/2 h-[300px] min-[400px]:h-[400px] sm:h-[400px]  lg:h-[400px] xl:h-[500px] object-cover" alt="" />
                        </div>
                        </Observer2>
                        <Observer2>

                        <div className="mb-5 w-full ">
                            <div className="flex items-center justify-center flex-col flex-nowrap w-full">
                                <h3 className=" mb-1 text-center text-2xl text-black">
                                {data?.brideGroomRight ? (data.brideGroomRight[0].name_male ? data.brideGroomRight[0].name_male : data.brideGroomRight[0].name_female) : ''}
                                </h3>
                                <div className="text-center text-base font-redressed text-black">
                                Anak dari Bapak {data?.brideGroomRight ? (data.brideGroomRight[0].father_male ? data.brideGroomRight[0].father_male : data.brideGroomRight[0].father_female) : ''} <br /> dan Ibu {data?.brideGroomRight ? (data.brideGroomRight[0].mother_male ? data.brideGroomRight[0].mother_male : data.brideGroomRight[0].mother_female) : ''}
                                    </div>
                                <div className="my-6 ">
                                        <Observer>
                                    <a href={socmedRight?.url} className=" bg-transparent hover:bg-white p-4 rounded-full text-black" target="_blank">

                                        <span>
                                        <i className={`fa-brands ${rightClassNames} mr-2`}></i>
                                        {socmedRight?.username}
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