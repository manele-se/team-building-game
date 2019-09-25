import React from 'react';
import IMG from '../../images';
import './choose-avatar.css';
import '../scoreView/score.css';

const ChooseAvatar = () => {
	return (
		<div className="container scoreViewBackground">
			<h1 className="titelAvatar">Choose your avatar!</h1>
			<div className="container chooseAvatar">
				<img src={IMG.ape} />
				<img src={IMG.badger} />
				<img src={IMG.cat} />
				<img src={IMG.cow} />
				<img src={IMG.crab} />
				<img src={IMG.dog} />
				<img src={IMG.goat} />
				<img src={IMG.hedgehog} />
				<img src={IMG.mouse} />
				<img src={IMG.turtle} />
			</div>
		</div>
	);
};

export default ChooseAvatar;
