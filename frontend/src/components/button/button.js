import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, width, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	text-align: center;
	font-size: 18px;
	height: 32px;
	border: 1px solid #000;
	background-color: #b0c4de;
	box-shadow: 0 2px 3px #2f4f4f;
	&:hover {
		background-color: #2f4f4f;
		color: #fff;
		cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	}
`;

ButtonContainer.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
}
