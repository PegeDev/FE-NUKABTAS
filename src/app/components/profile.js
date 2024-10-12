'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/ui/button'
import { maskEmail } from '@/lib/format'

export const Profile = () => {
    const [open, setOpen] = useState(false)

    const { user } = useAuth({
        middleware: 'guest',
    })

    const optAnimate = {
        enter: {
            opacity: 1,
            translateY: [0, -10, 0],
            transition: {
                duration: 0.3,
            },
            display: 'block',
        },
        exit: {
            opacity: 0,
            translateY: [0, 10, 0],
            transition: {
                duration: 0.3,
            },
            display: 'none',
        },
    }
    
    return user ? (
        <motion.div onClick={() => setOpen(!open)} className="relative">
            <button>
                <div className="inline-flex items-center justify-end h-12 space-x-4 transition-all ease-in-out hover:cursor-pointer">
                    <div className="flex flex-col justify-end text-white">
                        <p className="font-medium text-right truncate text-nowrap">{user.name}</p>
                        <span className="text-xs text-right">
                            {maskEmail(user.email)}
                        </span>
                    </div>
                    <div className="relative z-10 flex h-[50px] w-[50px] items-center justify-end space-x-2.5 overflow-hidden rounded-full">
                        <Image
                        loader={({ src})=> {
                                return `${process.env.NEXT_PUBLIC_BACKEND_URL}/${src}`
                        }}
                            src={`storage/${user.profile_picture}`}
                            alt="avatar"
                            fill
                            className="object-cover w-full h-full "
                        />
                    </div>
                </div>
            </button>
            <motion.div
                initial="exit"
                animate={open ? 'enter' : 'exit'}
                variants={optAnimate}
                className={`absolute top-full right-0 -z-10 mt-6 w-[320px]`}>
                <div className="relative bg-white rounded-lg">
                    <span className="absolute top-0 right-0 w-7 h-7 transform rotate-45 -translate-x-4 -translate-y-2 bg-white rounded-[4px]" />
                    <div className="font-semibold text-black px-5 py-3.5 select-none">
                        {user.name}
                    </div>
                    <hr className="border-muted" />
                    <div className="flex flex-col">
                        <a
                           href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard`}
                            target='_blank'
                            rel="noreferrer"
                            className="px-5 py-3.5 text-sm hover:bg-muted transition-colors ease-linear cursor-pointer">
                            Dashboard
                        </a>
                        <a
                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard/profile`}
                            target='_blank'
                            rel="noreferrer"
                            className="px-5 py-3.5 text-sm hover:bg-muted transition-colors ease-linear cursor-pointer">
                            Profil Saya
                        </a>
                        <a
                           href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard/profile`}
                             target='_blank'
                            rel="noreferrer"
                            className="px-5 py-3.5 text-sm hover:bg-muted transition-colors ease-linear cursor-pointer">
                            Ubah Password
                        </a>
                    </div>
                    <hr className="border-muted" />
                    <div className="overflow-hidden rounded-b-lg">
                        <button className="text-error px-5 py-3.5 text-sm hover:bg-muted transition-colors ease-linear cursor-pointer w-full text-left">
                            Keluar
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    ) : (
        <div>
            <a
                className={
                    'h-10 items-center justify-center gap-2.5 rounded-md px-4 py-3 transition-all ease-in-out hover:opacity-75 lg:flex bg-white text-black'
                }
                href="/login">
                <Image src={'/iconShield.png'} width={20} height={20} />
                Login
            </a>
        </div>
    )
}
