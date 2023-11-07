import React from 'react'

interface TModal {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const FilterModal = ({ isOpen, setIsOpen }: TModal) => {

	const closeModal = () => {
			console.log("fechado")
			setIsOpen(!isOpen)
	}

	if(isOpen) {
		return (
			<div className='bg-black opacity-50 fixed inset-1/2 translate-x-[-50%] translate-y-[-50%] h-full w-full text-white'>
				<div className='bg-amber-300 w-[700px] h-[450px]'>
					<h2>Filtro</h2>
					<button onClick={closeModal}>fechar</button>
				</div>
			</div>
		)
	}
 
  
}

export default FilterModal