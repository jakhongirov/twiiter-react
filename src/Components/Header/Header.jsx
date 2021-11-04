import './Header.scss';
import content from '../../Localization/Content';
import imageperson from '../../Assets/image/Ellipse 3.png';

function Header({ lang }) {
	return (
		<header className='header'>
			<div className='container'>
				<a className='header__logo-link' href='/'>
					<img
						className='header__logo-img'
						src='https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png'
						alt='twitter logo'
						width='40'
						height='33'
					/>
				</a>

				<nav className='header__nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<a className='nav__link nav__link--active' href='#link'>
								{content[lang].header.links.Home}
							</a>
						</li>

						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								{content[lang].header.links.Explore}
							</a>
						</li>

						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								{content[lang].header.links.Notifications}
							</a>
						</li>

						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								{content[lang].header.links.Messages}
							</a>
						</li>

						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								{content[lang].header.links.Bookmarks}
							</a>
						</li>

						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								{content[lang].header.links.Lists}
							</a>
						</li>

						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								{content[lang].header.links.Profile}
							</a>
						</li>

						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								{content[lang].header.links.More}
							</a>
						</li>
					</ul>

					<button className='nav__btn'>
						<a className='btn__link' href='#link'>
							Tweet
						</a>
					</button>
				</nav>

				<div className='user'>
					<img
						className='user__img'
						src={imageperson}
						alt='person'
						width='50'
						height='50'
					/>
					<div>
						<span className='user__name'>Bobur</span>
						<span className='user__email'>@bobur_mavlonov</span>
					</div>
					<strong className='points'>...</strong>
				</div>
			</div>
		</header>
	);
}

export default Header;
