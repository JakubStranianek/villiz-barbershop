import * as React from "react"
import Link from "next/link"
import Image from "next/image"

const people = [
    {
      name: 'Viliam Stranianek',
      role: 'Villiz Barber',
      imageUrl:
        '/images/team1.JPG',
      instaUrl: 'https://www.instagram.com/villiz_barber',
      phoneNumber: '+421918778993',
    },
    {
      name: 'Barber wanted',
      role: 'Chceš to byť práve ty? 🫵🏽',
      imageUrl:
        '/images/barber-wanted.jpg',
      instaUrl: 'https://www.instagram.com/villiz_barber',
      phoneNumber: '+421918778993',
    }
 
  ]
  
  export default function Team() {
    return (
      <div className="bg-[#FFFDF8]" id="team">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Náš Team</h2>
              <p className="text-xl text-gray-500">
              Momentálne sa o teba postará Villiz Barber, ktorý zároveň aj náš barbershop celý zastrešuje. Tešíme sa na teba.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image className="rounded-lg object-cover shadow-lg" width={700} height={500} src={person.imageUrl} alt="" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <Link href={person.instaUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                          </Link>
                        </li>
                        <li>
                          <Link href={"tel:" + person.phoneNumber} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.61" height="20.689" viewBox="0 0 20.61 20.689">
                                <g id="Telephone-sVG-787890" transform="translate(-0.912 0)">
                                    <path id="Path_34051" data-name="Path 34051" d="M5.088,13.752a21.949,21.949,0,0,0,7.3,5.719,11.363,11.363,0,0,0,4.085,1.209c.1,0,.193.009.292.009a3.383,3.383,0,0,0,2.624-1.127.094.094,0,0,0,.017-.021,11.046,11.046,0,0,1,.827-.857c.2-.193.407-.394.6-.6A2.07,2.07,0,0,0,20.83,15l-2.576-2.576a2.085,2.085,0,0,0-1.509-.694,2.156,2.156,0,0,0-1.526.69l-1.535,1.535c-.141-.081-.287-.154-.424-.223a5.3,5.3,0,0,1-.472-.257,16.242,16.242,0,0,1-3.88-3.532A9.353,9.353,0,0,1,7.6,7.849c.4-.364.78-.746,1.145-1.119.129-.133.262-.266.394-.4a2.2,2.2,0,0,0,.712-1.543,2.18,2.18,0,0,0-.712-1.543L7.858,1.968c-.15-.15-.292-.3-.437-.446C7.137,1.23,6.842.93,6.55.66A2.137,2.137,0,0,0,5.041,0,2.2,2.2,0,0,0,3.515.664l-1.6,1.6A3.294,3.294,0,0,0,.93,4.377a7.934,7.934,0,0,0,.6,3.43A19.952,19.952,0,0,0,5.088,13.752ZM1.976,4.467a2.268,2.268,0,0,1,.682-1.458L4.252,1.415a1.154,1.154,0,0,1,.789-.364,1.1,1.1,0,0,1,.772.373c.287.266.557.544.849.84.146.15.3.3.446.454L8.385,4a1.164,1.164,0,0,1,.4.8,1.164,1.164,0,0,1-.4.8c-.133.133-.266.27-.4.4-.4.4-.772.785-1.183,1.149l-.021.021a.838.838,0,0,0-.214.952c0,.013.009.021.013.034a10.089,10.089,0,0,0,1.5,2.448,17.143,17.143,0,0,0,4.133,3.764,6.137,6.137,0,0,0,.566.309,5.3,5.3,0,0,1,.472.257l.047.026a.9.9,0,0,0,.416.107.909.909,0,0,0,.639-.292l1.6-1.6a1.134,1.134,0,0,1,.785-.382,1.077,1.077,0,0,1,.759.382l2.585,2.581a1.034,1.034,0,0,1-.013,1.616c-.18.193-.369.377-.57.57a12.345,12.345,0,0,0-.9.93,2.354,2.354,0,0,1-1.839.78c-.073,0-.15,0-.223-.009a10.323,10.323,0,0,1-3.7-1.106A20.851,20.851,0,0,1,5.9,13.092,19.1,19.1,0,0,1,2.516,7.455,6.914,6.914,0,0,1,1.976,4.467Z" transform="translate(0 0)"/>
                                </g>
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  