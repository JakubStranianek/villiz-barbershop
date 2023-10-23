"use client"
import * as React from "react"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export default function About2() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimation()

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0, opacity: 1,
        transition: {
          type: "spring", duration: 1.2
        }
      })
    } else {
      animation.start({
        y: '-1000', opacity: 0 
      })
    }
  }, [isInView])

    return (
      <div className="bg-gray-50" id="about" data-sal="slide-down">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:py-32 lg:px-8" >
          <motion.div className="text-center" ref={ref}
            animate={animation}
          >
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Veľkou výhodou je bezplatné parkovanie takmer pred dverami nášho barbershopu. Samozrejmosťou je že ku každej našej službe ti bude dopriata kvalitná kavička, chladený nápoj alebo pohárik kvalitného rumu.
            </p>
          </motion.div>
        </div>
      </div>
    )
  }
  