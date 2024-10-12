import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Typed } from './components/typed'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <div className="relative z-[100] mx-auto flex max-w-full grid-cols-2 flex-col items-start justify-end gap-x-10 px-4 py-0 md:grid md:h-[80vh] md:px-8 md:py-10 lg:items-center lg:px-16 lg:py-0">
            <div className="order-1 w-full mt-10 h-fit md:order-1 md:mt-24 md:w-auto lg:mt-0">
                <p className="mb-4 text-center text-3xl font-bold tracking-wide text-white md:text-left lg:text-5xl lg:leading-[60px]">
                    Ayo Gabung Jadi <br /> Kader Nahdlatul Ulama
                </p>
                <div className=" min-h-[70px] text-center md:text-left">
                    <Typed />
                </div>
                <div className="flex flex-col items-start gap-4">
                    <Button>
                        <Image src={'/iconShield.png'} width={20} height={20} />
                        Login with NU.ID
                    </Button>
                </div>
            </div>
            <div className="text-white text-sm order-3 col-span-2 mx-auto mt-20 mb-12 w-fit rounded-full bg-[#085749] py-3 px-6 md:mx-0 md:mt-0 md:mr-auto md:mb-0">
                <p>Copyright © 2024. All rights reserved.</p>
            </div>
            <div className="order-1 w-full h-full mt-10 justify-self-center md:order-2 md:mt-0 md:justify-self-end">
                <div className="flex justify-center w-full">
                    <Image
                        alt="logo"
                        src="/logo.webp"
                        width={300}
                        height={300}
                        className="animate-bounce-slow relative top-3 z-20 w-72 sm:w-[497px]"
                    />
                </div>
            </div>
            <Image
                className="absolute right-0 z-10 -top-24"
                src={'/hero-gradient.png'}
                width={800}
                height={800}
            />
            <Image
                className="absolute right-0 z-10 w-[55%] h-full"
                src={'/dot_map.svg'}
                width={500}
                height={500}
            />
        </div>
    )
}

export default Home
