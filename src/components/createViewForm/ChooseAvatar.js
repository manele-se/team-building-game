import React from 'react';
import * as IMG from '../../images';

export default function ChooseAvatar() {
	return (
		<div className="container">
			<h1>Choose your avatar</h1>
			<div className="row">
				<div className="column" />
				<img src={IMG.ape} />
				<img src={IMG.bagger} />
				<img src={IMG.cat} />
				<img src={IMG.cow} />
				<img src={IMG.crab} />
				<img src={IMG.dog} />
				<img src={IMG.goat} />
				<img src={IMG.hed} />
				<img src={IMG.mouse} />
				<img src={IMG.turtle} />
			</div>
		</div>
	);
}
