"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import { easeOut, motion, LayoutGroup } from "framer-motion"
import Image from "next/image"

const data = [
    {
        id: 1,
        src: "/images/guy1.png",
        review: "Vždy spokojný po návšteve tohto barbershopu. Príjemné prostredie, kvalitný barber, cena služieb zodpovedá kvalite. Plne každému odporúčam. Barber Vilo si dá vždy záležať.",
        name: "Martin"
    },
    {
        id: 2,
        src: "/images/guy2.png",
        review: "Čo sa týka Viliho v Žiline tak odporúčam 👌 Šikovný chalan vie sa s tým pekne vyhrať. Spokojnosť 100% plus príjemné prostredie.",
        name: "Dávid"
    },
    {
        id: 3,
        src: "/images/guy3.png",
        review: "Vždy spokojosť so strihom ale aj čo sa týka prostredia. Villiz Barber komunikatívny a vždy vykúzli účes ktorý spĺňa všetky moje kritéria, za mňa najlepšia voľba v ZA.",
        name: "Daniel"
    },
    {
        id: 4,
        src: "/images/guy4.png",
        review: "Barber Villiz má perfektný prístup. Vždy mi urobí skvelý strih. Je to štýlový barbershop. TOPka v Žiline. Odporúčam.",
        name: "Miro"
    },
    {
        id: 5,
        src: "/images/guy5.png",
        review: "Vždy veľká spokojnosť či už so strihom alebo s úpravou brady s Villiz Barberom vždy dobre pokecáme a odchádzam s fresh cutom spokojný domov 😌",
        name: "Michal"
    },
    {
        id: 6,
        src: "/images/guy6.png",
        review: "Dlho som nevedel nájsť barbera, ktorý by vyhovoval mojej náročnosti, no Villiz spĺňa všetko na špičkovej úrovni. Od priateľského a pohodového prístupu k zákaznikovi až po precízne vypiplaný strih. Venuje sa klientovi v maximálnej možnej miere a dá si záležať aj na tých najmenších detailoch. Môžem len a len odporúčiť aj ostatným.",
        name: "Roman"
    },
    {
        id: 7,
        src: "/images/guy7.png",
        review: "Top služby. Originálne a hlavne príjemné prostredie. Robota vždy na 100%, žiadne odfláknutie. Ochotný a kamarátsky prístup. Vždy odchádzam spokojný 👍☝️👏 Odporúčam !!",
        name: "Martin"
    },
    {
        id: 8,
        src: "/images/guy8.png",
        review: "Vždy maximálna spokojnosť. Každý jeden strih je niečím jedinečný. Výborná komunikácia a veľmi príjemné prostredia. 10/10",
        name: "Jakub"
    },
    {
        id: 9,
        src: "/images/guy9.png",
        review: "Moderné prostredie kde sa vždy cítim pohodlne. Výborna priateľská nálada a ešte lepšie služby. Vrelo odporúčam!!",
        name: "Lukáš"
    },
]

export default function Example() {
    const [actualIndex, setActualIndex] = useState(1)

   useEffect(() => {
    const intervalId = setInterval(() => {
      setActualIndex((actualIndex + 1) % data.length)
    }, 3000)
      return () => clearInterval(intervalId)
   }, [actualIndex])


    return (
      <div className="bg-[#FFFDF8] pt-16 lg:py-24" id="recenzie">
        <div className="bg-myCamel pb-16 lg:relative lg:z-10 lg:pb-0">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="relative lg:-my-8">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">                          
                  <LayoutGroup>       
                    <motion.div initial={{ opacity: 0 }} animate={{  opacity: 1 }} exit={{  opacity: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                      <Image
                      key={actualIndex}                  
                      className="object-cover lg:h-full lg:w-full"
                      width={700}
                      height={500}
                      src={data[actualIndex].src}
                      alt=""
                      />                                                                                   
                    </motion.div>            
                    </LayoutGroup>                                                
                </div>
              </div>
            </div>
            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>                  
                            <p className="mt-6 text-2xl font-medium text-white">
                                {data[actualIndex].review}
                            </p>
                  </div>
                  <footer className="mt-6">              
                        <p className="text-base font-medium text-white">{data[actualIndex].name}</p>                                    
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  