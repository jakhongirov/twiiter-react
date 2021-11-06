import React from 'react';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Footer from '../../Components/Footer/Footer';


function Feed({lang,setLang, Theme, setTheme}) {


	return (
		<>
			{/* <div className='container'> */}
				<Header lang={lang} />

				<Main lang={lang} setLang={setLang} Theme={Theme} setTheme={setTheme} />

				<Footer lang={lang} />
			{/* </div> */}
		</>
	);
}

export default Feed;
