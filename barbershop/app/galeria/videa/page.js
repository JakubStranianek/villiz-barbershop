import Link from "next/link"

export default function Video() {
  return (
    <div className='bg-[#FFFDF8] w-full'>      
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
      
      <div className="flex flex-col justify-center items-center flex-wrap md:flex-row md:justify-between mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="w-4/5 md:w-1/4">
        <div class="wistia_responsive_padding" style={{padding:"177.5% 0 0 0",position:"relative"}}><div class="wistia_responsive_wrapper" style={{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}><iframe src="https://fast.wistia.net/embed/iframe/3ht7oixlvf?videoFoam=true" title="video1" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </div>
        
        <div className="w-4/5 py-10 md:w-1/4">
        <div class="wistia_responsive_padding" style={{padding:"177.5% 0 0 0",position:"relative"}}><div class="wistia_responsive_wrapper" style={{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}><iframe src="https://fast.wistia.net/embed/iframe/btgdfy8oth?videoFoam=true" title="video2" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </div>

        <div className="w-4/5 md:w-1/4">
        <div class="wistia_responsive_padding" style={{padding:"177.5% 0 0 0",position:"relative"}}><div class="wistia_responsive_wrapper" style={{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}><iframe src="https://fast.wistia.net/embed/iframe/eghkhubtpm?videoFoam=true" title="video3" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </div>
    </div>
    </div>

  )
}
