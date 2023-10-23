import * as React from "react"
import { EnvelopeIcon, PhoneIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

export default function Example() {
  return (
    <div className="bg-[#FFFDF8]" id="kontakt">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Adresa</h2>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <HomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Alexandra Rudnaya 45</p>
                  <p className="mt-1">010 01 Žilina</p>
                  <p className="mt-1">Villiz Barbershop</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Kontakt</h2>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <Link href="tel:+421 918 778 993">0918 778 993</Link>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <Link href="mailto:viliam.stranianek7@gmail.com">viliam.stranianek7@gmail.com</Link>
                </div>
              </div>
              <div className="mt-6 flex">
              <Link href="https://www.google.com/maps/dir//villizbarbershop/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47145fc2a67a2e77:0x751dea2c9af113b5?sa=X&ved=2ahUKEwiyj8u62uX8AhUWgv0HHWaADtQQ9Rd6BAgZEAU" target={"_blank"}> 
              <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-myCamel px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-myCamel hover:bg-opacity-70"
      >Navigovať pomocou Google Maps
      </button>
      </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
