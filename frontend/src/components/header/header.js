import styled from 'styled-components';
import {ControlPanel, Logo } from './components';

const Description = styled.div`
	font-style: italic;
`;

export const HeaderContainer = ({ className }) => {
	return (
		<div>
			<header className={className}>
				<Logo />
				<Description>Веб технологии <br/> Написание кода <br/> Разбор ошибок</Description>
				<ControlPanel />
			</header>
		</div>
	);
};

export const Header = styled(HeaderContainer)`
display: flex;
justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0 -2px 17px #000;
	background-color: #fff;
	z-index: 10;

`;
