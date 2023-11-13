import React from 'react'
import { FaXmark, FaBurger, FaBacon, } from "react-icons/fa6"
import { BsCupStraw } from "react-icons/bs"
import { GiChickenLeg, GiNachos } from "react-icons/gi"

interface TModal {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	setCarneAberto: (isOpen: boolean) => void;
	carneAberto: boolean;
	setFrangoAberto: (isOpen: boolean) => void;
	frangoAberto: boolean;
	setBaconAberto: (isOpen: boolean) => void;
	baconAberto: boolean;
	setAcompAberto: (isOpen: boolean) => void;
	acompAberto: boolean;
	setBebidaAberto: (isOpen: boolean) => void;
	bebidaAberto: boolean;
}

const FilterModal = ({ isOpen, setIsOpen, setCarneAberto, setFrangoAberto, setBaconAberto, setAcompAberto, setBebidaAberto }: TModal) => {

	const closeModal = () => {
		console.log("fechado")
		setIsOpen(!isOpen)
	}

	const filtroCarne = () => {
		setCarneAberto((prev: boolean) => {
			const newState = !prev;

			return newState
		})
	}

	const filtroFrango = () => {
		setFrangoAberto((prev: boolean) => {
			const newState = !prev;

			return newState
		})
	}

	const filtroBacon = () => {
		setBaconAberto((prev: boolean) => {
			const newState = !prev;

			return newState
		})
	}

	const filtroAcomp = () => {
		setAcompAberto((prev: boolean) => {
			const newState = !prev;

			return newState
		})
	}

	const filtroBebida = () => {
		setBebidaAberto((prev: boolean) => {
			const newState = !prev;

			return newState
		})
	}

	if(isOpen) {
		return (
			<div className='fixed rounded inset-1/2 translate-x-[-50%] translate-y-[-50%] h-full w-full'>
				<div className='bg-black opacity-40 h-full w-full absolute'></div>

				<div className='absolute bg-white w-[700px] h-[450px] inset-1/2 translate-x-[-50%] translate-y-[-50%] text-amber-900 rounded-xl'>

					<div>
						<h3 className='flex text-2xl justify-center pt-4'>Categorias</h3>
						<button onClick={closeModal} className='absolute text-3xl right-4 top-4'>
							<FaXmark />
						</button>
					</div>

					<div>
						<div onClick={filtroCarne}>
							<p>Sanduíche de Carne</p>
							<FaBurger />
						</div>
						<div onClick={filtroFrango}>
							<p>Sansuíche de Frango</p>
							<GiChickenLeg />
						</div>
						<div onClick={filtroBacon}>
							<p>Sanduíche com Bacon</p>
							<FaBacon />
						</div>
						<div onClick={filtroAcomp}>
							<p>Acompanhamentos</p>
							<GiNachos />
						</div>
						<div onClick={filtroBebida}>
							<p>Bebidas</p>
							<BsCupStraw />
						</div>
					</div>

					<div className='flex items-end'>
						<button onClick={closeModal} className=' bg-red-500 text-white py-2 px-24 rounded text-xl'>Filtrar</button>
					</div>
				</div>
			</div>
		)
	}
	
}

export default FilterModal