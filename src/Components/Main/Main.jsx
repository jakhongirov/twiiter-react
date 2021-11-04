import './Main.scss';
import Happen from '../Happen/Happen';
import Post from '../Posts/Posts';
import themeimg from '../../Assets/image/theme.svg';

function Main() {
	return (
		<>
			<main className='main'>
				<div className='container'>
					<span className='span'>
               <h1 className='heading'>Home</h1>
               <img className='theme-img' src={themeimg} alt="theme img" width='22' height='22' />
               </span>
				</div>

            <Happen/>

            <Post/>
			</main>
		</>
	);
}

export default Main;
