import './Footer.scss';
import content from '../../Localization/Content';
import settingimg from '../../Assets/image/settings.svg';

function Footer({ lang }) {
	return (
		<footer className='footer'>
			<div className='container'>
				<input
					className='search search--bg-img'
					type='search'
					placeholder={content[lang].footer.Search}
				/>

				<div className='servise'>
					<div className='setting'>
						<h2 className='heading__setting'>
							{content[lang].footer.Trends}
						</h2>

						<button className='setting-__btn'>
							<img src={settingimg} alt='settings img' />
						</button>
					</div>

					<ul className='setting__list'>
						<li className='setting__item'>
							<div className='setting__item-box'>
								<span className=''>
									{content[lang].footer.Trending}
								</span>
								<strong className=''>
									{content[lang].footer.Revolution}
								</strong>
								<span className=''>{content[lang].footer.Tweets}</span>
							</div>

							<strong className='point'>...</strong>
						</li>

						<li className='setting__item'>
							<div className='setting__item-box'>
								<span className=''>
									{content[lang].footer.Trending}
								</span>
								<strong className=''>
									{content[lang].footer.Revolution}
								</strong>
								<span className=''>{content[lang].footer.Tweets}</span>
							</div>

							<strong className='point'>...</strong>
						</li>

						<li className='setting__item'>
							<div className='setting__item-box'>
								<span className=''>
									{content[lang].footer.Trending}
								</span>
								<strong className=''>
									{content[lang].footer.Revolution}
								</strong>
								<span className=''>{content[lang].footer.Tweets}</span>
							</div>

							<strong className='point'>...</strong>
						</li>
					</ul>

					<span className='setting-more'>{content[lang].footer.More}</span>
				</div>

				<div className='users'>
					<h2 className='users__heading'>{content[lang].footer.Like}</h2>

					<ul className='users__list'>
						<li className='users__item'>
							<span className='users__box'>
								<strong className='users__name'>Mushtariy</strong>
								<p className='user__email'>@Mushtar565266</p>
							</span>

							<button className='follow-btn'>{content[lang].footer.Follow}</button>
						</li>

						<li className='users__item'>
							<span>
								<strong className='user__name'>Shuhratbek</strong>
								<p className='user__email'>@mrshukhrat</p>
							</span>

							<button className='follow-btn'>{content[lang].footer.Follow}</button>
						</li>
					</ul>
					<span className='setting-more'>{content[lang].footer.More}</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
