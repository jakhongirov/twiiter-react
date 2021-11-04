import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
	const [lang, setLang] = React.useState('en');

	return (
		<div className='container'>
			<Header lang={lang} />

			<Main lang={lang} setLang={setLang} />

			<Footer lang={lang}/>
		</div>
	);
}

export default App;
