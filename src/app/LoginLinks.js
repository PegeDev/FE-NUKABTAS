'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="fixed top-0 right-0 hidden px-6 py-4 sm:block">
            {user ? (
                <Link
                    href="/dashboard"
                    className="ml-4 text-sm text-gray-700 underline"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard/login`}
                        className="text-sm text-gray-700 underline"
                    >
                        Login
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
