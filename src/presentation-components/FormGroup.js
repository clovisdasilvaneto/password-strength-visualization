import styled from 'styled-components';

export default styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	position: relative;

	div {
		width: 60%
	}
	
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: flex-start;

		div {
			width: 100%;
		}

		label {
			margin-bottom: 4px;
		}
	}
`;