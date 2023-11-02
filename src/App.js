import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import GenreNav from './components/GenreNav';
import Footer from './components/Footer';
import Main from './components/Main';
import LogIn from './log_in_page/components/LogIn';
import SettingsAccount from './settings/SettingsAccount';
import {} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TvShow from './components/TvShow';
import MovieDetails from './components/TvShow';

// useParams
// const params = useParams()

function App() {
	return (
		<BrowserRouter>
			<div className='bg-black'>
				<NavBar />
				<Routes>
					<Route element={<GenreNav />} path='/' />
				</Routes>

				<div className='d-flex justify-content-center'>
					<Routes>
						<Route element={<Main />} path='/' />
					</Routes>
				</div>
				<Routes>
					<Route element={<TvShow />} path='/tvShow' />
					<Route element={<MovieDetails />} path='/movie-details/:movieId' />
					<Route element={<LogIn />} path='/logIn' />
					<Route element={<SettingsAccount />} path='/settings' />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
