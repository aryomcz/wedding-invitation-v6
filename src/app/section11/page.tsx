import Observer from "next@js/app/components/observer/observer-zoomIn";
import Observer2 from "next@js/app/components/observer/observer-up";
import { useEffect, useState } from "react";

export default function Section11 ({data}:any) {
    const [nameMale, setNameMale] = useState("");
    const [nameFemale, setNameFemale] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
            const nameMale = data.nameMale?.name_male?.split(" ");
            const nameFemale = data.nameFemale?.name_female?.split(" ");
            setNameMale(nameMale ? nameMale[0] : "");
            setNameFemale(nameFemale ? nameFemale[0] : "");
          } catch (error) {
            console.error('Error fetching data:', error);
          
          }
        };
    
        fetchData();
    }, [data]);

    return (
        <section className="w-full -mt-1 relative bg-[#BEB4A3]">
            <div className="bg-center z-10 bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute animate-bounce-2" style={{backgroundImage: `url('/img6/wayang2.png')`}}></div>
            <div className="bg-bottom z-20 bg-no-repeat bg-contain bg-blend-multiply h-full w-full absolute" style={{backgroundImage: `url('/img6/batik2.png')`}}></div>
            <div className="flex w-full text-center justify-center items-center flex-wrap py-6 pb-96 sm:pb-[500px]">
                <Observer2>

                <div className=" text-xl sm:text-2xl font-redressed my-5 w-full">
                    See You on Our Big Day
                </div>
                </Observer2>
                <Observer>

                <div className="font-romantic text-4xl sm:text-5xl font-medium w-full mb-5"> 
                {nameMale ? nameMale: " "} & {nameFemale ? nameFemale : " "}
                </div>
                </Observer>
                <Observer2>

                <div className="w-full font-edwardian text-4xl sm:text-5xl mb-5">
                    Thank You
                </div>
                </Observer2>
            </div>
        </section>
        )
}