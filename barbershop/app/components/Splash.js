import {motion} from "framer-motion"
import Image from 'next/image'

export default function SplashScreen() {
  return (
    <div className='absolute top-0 z-20 w-full h-screen flex overflow-hidden'>
        <motion.div className='w-1/2 h-full bg-[#FFFDF8] flex items-center justify-end'
        initial={{x: 0}} 
        animate={{x: -1000}}
        transition={{delay: 0.5, type: "tween", duration: 1.5}}
        >
          <Image src="/images/open1.png" alt='logo1' className='w-64' width={256} height={256}/>
        </motion.div>
        <motion.div className='w-1/2 h-full bg-[#FFFDF8] flex items-center justify-start' 
        initial={{x: 0}} 
        animate={{x: 1000}}
        transition={{delay: 0.5, type: "tween", duration: 1.5}}
        >
          <Image src="/images/open2.png" alt='logo1' className='w-64' width={256} height={256}/>
        </motion.div>
    </div>
  )
}