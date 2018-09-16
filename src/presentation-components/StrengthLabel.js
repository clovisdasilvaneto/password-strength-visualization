import styled from 'styled-components';
import Text from './Text';

export default styled(Text.withComponent('span'))`
	color: ${({level, theme}) => {
		if(level === 'low') {
			return 'red';
		}else if(level === 'good') {
			return '#fff';
		}else {
			return theme.primary;
		}
	}};
`