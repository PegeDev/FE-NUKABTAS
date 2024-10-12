import { Navigation } from './navigation'
import { Profile } from './profile'

export const Navbar = () => {
    return (
        <nav className="top-0 z-[999] w-full transition-all ease-in-out bg-primary sticky bg-opacity-0 ">
            <div className="max-w-full px-4 mx-auto md:px-8 lg:px-16">
                <div className="flex items-center justify-between w-full py-3 md:py-5 lg:justify-between lg:space-x-10 lg:py-6">
                    <div>Logo</div>
                    <Navigation />
                    <Profile />
                </div>
            </div>
        </nav>
    )
}
