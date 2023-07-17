import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './Header.scss';

function Header({toggle, modal}) {

	return (
		<header>
			<div className="container">
			<div className="header_wrapper">
				<div className="logo">
					<h1>Karasaev</h1>
				</div>
				<div className="login">
					<button className={`${modal ? 'active' : ''}`} onClick={toggle}><AiOutlinePlus color='white' size={30}/></button>
				</div>
			</div>
			</div>
		</header>
	)
}

export default Header;