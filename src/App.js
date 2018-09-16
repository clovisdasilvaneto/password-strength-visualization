import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';

import Wrapper from './presentation-components/Wrapper';
import FormComponent from './components/FormComponent';
import StrenghtComponent from './components/StrenghtComponent';

const theme = {
  font: 'Arial',
  primary: '#585858',
  secondary: '#fff',
  strenghtImage: "./password-strenght.png"
}

class App extends Component {
  constructor(props) {
    super(props)

    this.handleStepChange = this.handleStepChange.bind(this);
    this.state = {
      step: 1,
      strengthLevel: 'Low'
    }
  }

  /**
   * Updates the step based on the input value's length
   * @param {node} target 
   */
  handleStepChange({target}) {
    const {value: {length}} = target;
    let strengthLevel = "Low";
    let step;
    
    if(length < 5) {
      step = 1;
    }if(length === 5) {
      step = 2;
    }else if(length === 10) {
      step = 3;
    }else if(length === 15) {
      step = 4;
    }else if(length === 20) {
      step = 5;
    }else if(length === 25) {
      step = 6;
    }else if(length === 30) {
      step = 7;
    }else if(length === 35) {
      step = 8;
    }

    if(length > 10 && length <= 20) {
      strengthLevel = 'Medium';
    }else if(length > 20) {
      strengthLevel = 'Good';
    }

    if(step) {
      this.setState({ 
        step, 
        strengthLevel
      });
    }
  }

  render() {
    const {step, strengthLevel} = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <StrenghtComponent 
            image={theme.strenghtImage}step={step}
          >
          </StrenghtComponent>

          <FormComponent 
            strengthLevel={strengthLevel} 
            handleStepChange={this.handleStepChange}
          />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
