import Image from 'next/image'  
import Link from 'next/link'

const people = [
    {
      "source": '/images/gallery/img1.png'
    },
    {
      "source": '/images/gallery/img6.png'
    },
    {
      "source": '/images/gallery/img3.png'
    },
    {
      "source": '/images/gallery/img2.png'
    },
    {
      "source": '/images/gallery/img5.png'
    },
    {
      "source": '/images/gallery/img4.png'
    },
  ]

  function Galeria() {
  return (
    <div className='bg-gray-50 w-full'>      
      <div className='flex flex-row justify-center flex-wrap py-10'>
        <div className='pr-4'>
        <Link href="/galeria/"
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-myCamel px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-myCamel focus:ring-offset-2"
        >
          Fotky
        </Link>
        </div>

          <div className='pl-4'>
        <Link href="/galeria/videa"
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-myCamel px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-myCamel focus:ring-offset-2"
          >
          Videá
        </Link>  
            </div>
          </div>

    <div className="mx-auto px-6 py-10 max-w-7xl sm:px-6 lg:px-8">
      <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {people.map(index => {
        return (
        <div key={index + index.source} className="col-span-1 flex flex-col rounded-lg text-center shadow">
          <div className="flex flex-1 flex-col">           
              <img className="w-full h-full rounded-lg" src={index.source} alt="1" />                               
          </div>         
        </div>
        )
      })}
    </div>
    </div>
  </div>
  )
}

export default Galeria