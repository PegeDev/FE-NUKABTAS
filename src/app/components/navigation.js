'use client'
import { NAVIGATION_ROUTES } from '@/routes/navigation'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
    const pathname = usePathname()
    const formatedNav = NAVIGATION_ROUTES.map(nav => ({
        ...nav,
        current: pathname.includes(nav.path),
    }))

    return (
        <div>
            <ul className="flex items-center gap-8">
                {formatedNav.map((navigation, index) => (
                    <li key={index} className="font-medium text-white">
                        <div
                            className={`relative before:absolute before:h-0.5 before:bottom-0 before:w-0 before:content-[''] before:bg-white before:hover:w-1/2 before:transition-all before:duration-300 ${navigation.current ? 'before:w-1/2' : ''}`}>
                            <a href={navigation.path} className="">
                                {navigation.label}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
