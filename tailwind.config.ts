import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'inreach-alley-green': '#00D56C',
				'inreach-light-gray': '#EFEFEF',
				'inreach-soft-black': '#21272C',
				'inreach-dark-grey': '#65676B',
				'inreach-white': '#FFFFFF',
				'inreach-teal': '#28939C',
				'inreach-cornflower': '#4792DA',
				'inreach-cool-grey': '#D9D9D9',
				'inreach-pink': '#D4A1BA',
				'inreach-light-blue': '#79ADD7',
				'inreach-purple': '#705890',
				'inreach-dark-blue': '#3C4E8F',
				'inreach-green': '#749C66',
				'inreach-yellow': '#F1DD7F',
				'inreach-orange': '#C77E54',
				'inreach-red': '#C05C4A',
				'inreach-brown': '#5D4830',
				'inreach-dark-brown': '#322F2E',
			},
			keyframes: {
				bounceImage: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' },
				},
			},
			animation: {
				bounceImage: 'bounceImage 1.5s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
export default config
