"use client"

import * as React from "react"
import { useState } from "react";
import ModalImage from "./ModalImage"
import { motion, useAnimation, useInView } from "framer-motion" 
import Image from "next/image";

const files = [
    {
      source: '/images/gallery1.JPG',
    },
    {
        source: '/images/gallery2.JPG',
    },
    {
        source: '/images/gallery3.JPG',
    }
  ]
  
  export default function Example() {
    const [modal, setModal] = useState(false);
    const [actual, setActual] = useState("");
    const animation = useAnimation()

    function setValues(e) {
      setModal(!modal);
      setActual(e.target.getAttribute('src'));
    } 

    const closeModal = () => {
      setModal(false);
    }

    return (
       <div className="bg-[#FFFDF8]">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
        animate={animation}
        >
          {files.map((photo) => (
            <div key={photo.id + photo.source} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <Image
                  src={photo.source}
                  alt={photo.id + photo.source}
                  className="h-full w-full focus:outline-myCamel object-cover object-center lg:h-full lg:w-full"
                  width={500}
                  height={500}
                  onClick={setValues}                 
                />
              </div>             
            </div>
          ))}
        </motion.div>
      </div>

      {modal && (
        <ModalImage image={actual} close={closeModal}/> 
      )}
    </div>
    )
  }