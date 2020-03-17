import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const TabBar = props => {
	return (
		<div class="tab-nav-container">
			<div class="tab">
				<i class="fas fa-home"></i>
			</div>
			<div class="tab">
				<i class="fas fa-euro-sign"></i>
			</div>
			<div class="tab">
				<i class="fas fa-chart-bar"></i>
			</div>
			<div class="tab">
				<i class="fas fa-cog"></i>
			</div>
		</div >
	);
};

export default TabBar;
