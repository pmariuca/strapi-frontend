import React from "react";

const navigation = [
	{name: 'Toate produsele', href: '/'},
	{name: 'Dynamic Zone', href: '/dynamic'},
	{ name: 'Tricouri', href: '/tricou' },
	{ name: 'Hanorace', href: 'hanorac' },
	{ name: 'Bluze', href: '/bluza' },
	{ name: 'Blugi', href: 'blugi' },
	{ name: 'Pantaloni', href: 'pantaloni' },
	{ name: 'Camasi', href: '/camasa' },
];

const Header = () => {

	const renderMenuItems=()=>{
		return navigation?.map((item) => (
			<a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
				{item.name}
			</a>
		))
	}

	return (
		<>
			<header className="bg-white mt-2">
				<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 pt-1.5" aria-label="Global">
					<div className="flex lg:flex-1">
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{renderMenuItems()}
					</div>
				</nav>
			</header>
		</>
	)
};

export default Header;