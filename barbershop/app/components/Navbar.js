"use client"
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Domov', href: "/", current: true },
    { name: 'O nás', href: "/#about", current: false },
    { name: 'Cenník', href: "/#priceList", current: false },
    { name: 'Recenzie', href: "/#recenzie", current: false },
    { name: 'Galéria', href: "/galeria", current: false },
    { name: 'Kariéra', href: "/kariera", current: false },
    { name: 'Kontakt', href: "/#kontakt", current: false },
  ]

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#FFFDF8] scroll-smooth relative z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-myCamel hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" aria-label='homePage'>
                    <Image
                      className="block h-8 w-auto lg:hidden"
                      src="/images/logoB.png"
                      width={105}
                      height={32}
                      alt="Villiz Barbershop"
                    />
                  </Link>
                  <Link href="/" aria-label='homePage'>
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/images/logoB.png"
                    width={105}
                    height={32}
                    alt="Villiz Barbershop"
                  />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                    return (
                      <Link
                        href={item.href}
                        key={item.name}
                        passHref={true}
                        className={classNames(
                        item.current ? 'bg-myCamel text-white' : 'text-[#024059] hover:bg-myCamel hover:bg-opacity-70 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? true : undefined}
                      >
                        {item.name}
                      </Link>
                    )})}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-myCamel text-white' : 'text-black hover:bg-myCamel hover:bg-opacity-75 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
