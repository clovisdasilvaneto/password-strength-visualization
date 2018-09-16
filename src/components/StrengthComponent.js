import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Canvas from '../presentation-components/Canvas';
import {loadImage} from '../utils/image-manipulations';

class StrengthComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: window.innerWidth - 550,
			height: window.innerHeight
		}
	}

	componentDidMount() {
		this._bindCanvas();
	}

	componentWillReceiveProps() {
		this._bindCanvas();
	}

	/**
	 * Configures the canvas by setting the default context
	 * and load the background image
	 * @private
	 */
	_bindCanvas() {
		const {width, height} = this.state;
		const {image, step} = this.props;
		const canvas = document.querySelector('#strenght-canvas');
		const ctx = canvas.getContext('2d');

		const img = loadImage(image);

		img.onload = function () {
			ctx.fillStyle = "red";
			ctx.drawImage(this, 0, 0, width, height);

			const imageData = ctx.getImageData(0, 0, width, height);
			const data = imageData.data;

			for (var i = 0; i < data.length; i += 4) {
				if(data[i] > (50 * step) && step < 8) {
					data[i] = 0;
					data[i+1] = data[i];
					data[i+2] = data[i] + 10;
				}else {
					data[i] = data[i];
					data[i+1] = data[i+1];
					data[i+2] = data[i+2];
				}
			}

			ctx.putImageData(imageData, 0, 0);
		}
	}

	/**
	 * Render the canvas based on the component width and height state
	 */
	render() {
		const {width, height} = this.state;

		return (
			<Canvas 
				id="strenght-canvas"
				width={width} 
				height={height}
			>
			</Canvas>
		)
	}
}

StrengthComponent.propTypes = {
	image: PropTypes.string.isRequired,
	step: PropTypes.number.isRequired,
};

export default StrengthComponent;