export default function Section11 () {
    return (
        <section className="w-full -mt-1 relative bg-[#BEB4A3]">
            <div className="bg-center z-10 bg-no-repeat bg-cover bg-blend-multiply h-full w-full absolute" style={{backgroundImage: `url('/img/wayang2.png')`}}></div>
            <div className="bg-bottom z-20 bg-no-repeat bg-contain bg-blend-multiply h-full w-full absolute" style={{backgroundImage: `url('/img/batik2.png')`}}></div>
            <div className="flex w-full text-center justify-center items-center flex-wrap py-6 pb-96 sm:pb-[500px]">
                <div className=" text-xl sm:text-2xl font-redressed my-5 w-full">
                    See You on Our Big Day
                </div>
                <div className="font-romantic text-4xl sm:text-5xl font-medium w-full mb-5"> 
                    Clara & Bryan
                </div>
                <div className="w-full font-edwardian text-4xl sm:text-5xl mb-5">
                    Thank You
                </div>
            </div>
        </section>
        )
}