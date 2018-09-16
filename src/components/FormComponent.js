import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Form from '../presentation-components/Form';
import FormTitle from '../presentation-components/FormTitle';
import FormGroup from '../presentation-components/FormGroup';
import Label from '../presentation-components/Label';
import Link from '../presentation-components/Link';
import Input from '../presentation-components/Input';
import Button from '../presentation-components/Button';
import Text from '../presentation-components/Text';
import StrengthLabel from '../presentation-components/StrengthLabel';

class FormComponent extends Component {
	constructor(props) {
		super(props);

		this._toggleLabelVisibility = this._toggleLabelVisibility.bind(this);

		this.state = {
			labelVisibility: false
		}
	}

	_toggleLabelVisibility() {
		const {labelVisibility} = this.state;

		this.setState({
			labelVisibility: !labelVisibility
		});
	}

	render (){
		const {handleStepChange, strengthLevel} = this.props;
		const {labelVisibility} = this.state;

		return (
			<Form>
				<div>
					<FormTitle>
						<i className="fas fa-unlock-alt"></i> Password Strength Visualization
					</FormTitle>
	
					<Text removeMarginBottom>Based on <Link href="#">Colibro's sign up form</Link>. Read more about <Link href="#">the idea</Link></Text>
				</div>
	
				<div>
					<FormGroup>
						<Label>Full Name: </Label>
						<div>
							<Input />
						</div>
					</FormGroup>
	
					<FormGroup>
						<Label>Email Address: </Label>
						<div>
							<Input />
						</div>
					</FormGroup>
	
					<FormGroup>
						<Label>Password: </Label>
						<div>
							<Input
								onChange={handleStepChange}
								onFocus={this._toggleLabelVisibility}
								onBlur={this._toggleLabelVisibility}
								type="password" 
							/>
							<Text style={{
								position: 'absolute',
								visibility: labelVisibility ? 'visible' : 'hidden'
							}}>Password strength level: <StrengthLabel level={strengthLevel.toLowerCase()}>{strengthLevel}</StrengthLabel></Text>
						</div>
					</FormGroup>
	
					<FormGroup
						style={{
							marginTop: '3rem'
						}}
					>
						<Text small>Already have an account? <Link href="#" small>Login here</Link></Text>
						<Button type="button" name="signup" value="Signup"></Button>
					</FormGroup>
				</div>
			</Form>
		)
	}
}

FormComponent.propTypes = {
	handleStepChange: PropTypes.func.isRequired,
	strengthLevel: PropTypes.string.isRequired,
};

export default FormComponent;