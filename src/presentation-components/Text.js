import styled from 'styled-components';

export default styled.p`
	color: ${props => props.light ? '#fff' : props.theme.primary};
	font-weight: 300;

	${props => props.removeMarginBottom ? 'margin-bottom: 0' : ''}
	font-size: ${props => props.small ? '0.8rem' : '1rem'}
`;