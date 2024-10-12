module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: '#076857',
            'dark-primary': '#086c53',
            white: '#ffffff',
            muted: '#d1d5db',
            error: '#dc2626',
        },
        animation: {
            'bounce-slow': 'bounce-slow 2s ease infinite',
            'bounce-in': 'bounce-in .5s ease-out',
        },
        keyframes: {
            'bounce-slow': {
                '0%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
                '100%': { transform: 'translateY(0)' },
            },
            'bounce-in': {
                '0%': {
                    transform: 'translateY(0)',
                    opacity: '0',
                },
                '50%': {
                    transform: 'translateY(-10px)',
                    opacity: '1',
                },
                '100%': {
                    transform: 'translateY(0)',
                    opacity: '1',
                },
            },
            'bounce-out': {
                '0%': {
                    transform: 'translateY(0)',
                    opacity: '0',
                },
                '50%': {
                    transform: 'translateY(10px)',
                    opacity: '1',
                },
                '100%': {
                    transform: 'translateY(0)',
                    opacity: '1',
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
}
