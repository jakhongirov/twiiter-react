import React from 'react';
import './App.scss';
import Feed from './Pages/Feed/Feed';
import Profile from './Pages/Profile/Profile';
import {Routes,Route ,NavLink} from 'react-router-dom';

function App() {
	const [lang, setLang] = React.useState(JSON.parse(window.localStorage.getItem('lang')) || 'en');
	const [Theme , setTheme] = React.useState(JSON.parse(window.localStorage.getItem('theme')) || false)


	return (
		<>
		<Routes>
		<Route path='/' element={<Feed lang={lang} setLang={setLang} Theme={Theme} setTheme={setTheme} />}/>	
		<Route path='/profile' element={<Profile lang={lang}/>}/>	
		</Routes>
		
		</>
	);
}

export default App;
