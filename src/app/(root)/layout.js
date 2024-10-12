import { Navbar } from '../components/navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div className="relative overflow-hidden bg-primary md:h-screen">
                <Navbar />
                <main className="relative h-full ">{children}</main>
            </div>
        </>
    )
}
export default Layout
