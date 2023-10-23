"use client"
import * as React from "react"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export default function About1() {
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
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              O nás
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Barbershop nachádzajúci sa v mestskej časti Žilina Bôrik na ulici Alexandra Rudnaya 45. 
            Príď si oddýchnuť a zresetovať po náročnom dni do nášho holičstva Villiz Barbershop. Ponúkame ti kvalitný pánsky strih, úpravu brady a mnoho ďalšieho.
            </p>
          </motion.div>
        </div>
      </div>
    )
  }
  