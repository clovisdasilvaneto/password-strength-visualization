import styled from 'styled-components';
import Text from './Text';

export default styled(Text.withComponent('a'))`
	color: #fff;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;