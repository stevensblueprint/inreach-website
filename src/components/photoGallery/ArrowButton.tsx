import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Button } from '@mantine/core'
import { cn } from '../../lib/utils'

interface ArrowButtonProps {
	position: 'left' | 'right'
	onClick: () => void
	disabled?: boolean
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ position, onClick, disabled = false }) => {
	return (
		<Button
			onClick={onClick}
			disabled={disabled}
			style={{ backgroundColor: 'transparent' }}
			size='xl'
			className={cn(
				'absolute flex items-center justify-center p-2 text-gray-300 bg-black bg-opacity-0 hover:text-white hover:bg-opacity-40 transition-opacity duration-300 z-10',
				position === 'left'
					? 'left-2 bottom-4 sm:bottom-auto sm:left-4'
					: 'right-2 bottom-4 sm:bottom-auto sm:right-4',
				disabled ? 'text-gray-700 cursor-not-allowed' : 'opacity-100'
			)}
			aria-label={`Arrow ${position}`}
		>
			{position === 'left' ? (
				<IoIosArrowBack className='p-2' size={60} />
			) : (
				<IoIosArrowForward className='p-2' size={60} />
			)}
		</Button>
	)
}

export default ArrowButton
