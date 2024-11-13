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
			className={cn(
				'absolute flex items-center justify-center p-2 text-gray-600 bg-gray-100 bg-opacity-75 hover:bg-opacity-100 transition-opacity duration-300 z-10 rounded-full',
				position === 'left' ? 'left-4' : 'right-4',
				disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
			)}
			aria-label={`Arrow ${position}`}
		>
			{position === 'left' ? <IoIosArrowBack /> : <IoIosArrowForward />}
		</Button>
	)
}

export default ArrowButton
