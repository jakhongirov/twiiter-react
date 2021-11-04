import './Main.scss';
import React from 'react';
import Happen from '../Happen/Happen';
import Post from '../Posts/Posts';
import themeimg from '../../Assets/image/theme.svg';
import content from '../../Localization/Content';

function Main({lang , setLang}) {
	// const Theme = React.useRef();
	
	return (
		<>
			<main className='main'>
				<div className='container'>
					<span className='span'>
						<h1 className='heading'>{content[lang].main.Home}</h1>

						<select
							className='lang__select'
							value={lang}
							onChange={(evt) => {
								setLang(evt.target.value);
							}}>
							<option value='en'>En</option>
							<option value='uz'>Uz</option>
						</select>

						<button className='theme__btn'>
							<img
								className='theme-img'
								src={themeimg}
								alt='theme img'
								width='25'
								height='25'
							/>
						</button>
					</span>
				</div>

				<Happen lang={lang}/>

				<Post />
			</main>
		</>
	);
}

export default Main;
