import './Footer.scss';
import settingimg from '../../Assets/image/settings.svg';

function Footer(){
   return(
     <footer className='footer'>
        <div className='container'>
           <input className='search search--bg-img' type="search" placeholder='Search Twitter'/>

           <div className='servise'>
              <div className='setting'>
                 <h2 className='heading__setting'>Trends for you</h2>

                 <button className='setting-__btn'>
                    <img src={settingimg} alt="settings img"/>
                 </button>
              </div>

              <ul className='setting__list'>
                 <li className='setting__item'>
                    <div className='setting__item-box'>
                       <span className=''>Trending in Germany</span>
                       <strong className=''>Revolution</strong>
                       <span className=''>50.4K Tweets</span>
                    </div>

                    <strong className='point'>...</strong>
                 </li>

                 <li className='setting__item'>
                    <div className='setting__item-box'>
                       <span className=''>Trending in Germany</span>
                       <strong className=''>Revolution</strong>
                       <span className=''>50.4K Tweets</span>
                    </div>

                    <strong className='point'>...</strong>
                 </li>

                 <li className='setting__item'>
                    <div className='setting__item-box'>
                       <span className=''>Trending in Germany</span>
                       <strong className=''>Revolution</strong>
                       <span className=''>50.4K Tweets</span>
                    </div>

                    <strong className='point'>...</strong>
                 </li>
              </ul>

              <span className='setting-more'>Show more</span>
           </div>

           <div className='users'>
              <h2 className='users__heading'>You might like</h2>

              <ul className='users__list'>
                 <li className='users__item'>
                    <span className='users__box'>
                       <strong className='users__name'>Mushtariy</strong>
                       <p className='user__email'>@Mushtar565266</p>
                    </span>

                    <button className='follow-btn'>Follow</button>
                 </li>

                 <li className='users__item'>
                    <span>
                       <strong className='user__name'>Shuhratbek</strong>
                       <p className='user__email'>@mrshukhrat</p>
                    </span>

                    <button className='follow-btn'>Follow</button>
                 </li>
              </ul>
              <span className='setting-more'>Show more</span>
           </div>
        </div>
     </footer>
   )
}

export default Footer