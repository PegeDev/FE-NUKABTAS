'use client'

import { ReactTyped } from 'react-typed'

export const Typed = () => {
    return (
        <ReactTyped
            className="text-lg font-medium text-white h-14"
            typeSpeed={40}
            strings={[
                'Siskader merupakan sistem informasi kader yang dirancang untuk mengelola kegiatan kaderisasi NU secara menyeluruh dan terintegrasi.',
            ]}
        />
    )
}
