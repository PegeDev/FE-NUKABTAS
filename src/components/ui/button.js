export const Button = ({ children, className }) => {
    return (
        <>
            <button
                className={`flex items-center justify-center flex-1 gap-2 px-6 py-4 mx-auto mt-6 font-medium transition-all ease-in-out bg-white select-none h-14 rounded-xl hover:bg-opacity-75 md:mx-0 ${className}`}>
                {children}
            </button>
        </>
    )
}
